import { NextResponse } from "next/server";
import { google } from "googleapis";

export async function GET() {
  const auth = await google.auth.getClient({
    credentials: {
      project_id: process.env.GOOGLE_PROJECT_ID,
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY,
      client_id: process.env.GOOGLE_CLIENT_ID,
      token_url: process.env.GOOGLE_TOKEN_URL,
      universe_domain: process.env.GOOGLE_UNIVERSE_DOMAIN,
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  const sheets = google.sheets({ version: "v4", auth });

  try {
    const res = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
      range: `Message!A2:G10000`,
    });

    const data = res.data.values.map((row, index) => {
      const rows = index + 1;
      return {
        rowId: rows + 1,
        name: row[0],
        guestId: Number(row[5]),
        message: row[1],
        address: row[2],
        postTime: row[3],
        rsvp: row[4],
        editRange: row[6],
      };
    });

    const filtered = data.filter((item) => item.name !== "");

    return NextResponse.json(filtered);
  } catch (error) {
    return NextResponse.json(data);
  }
}

export async function POST(req) {
  const body = await req.json();
  const auth = await google.auth.getClient({
    credentials: {
      project_id: process.env.GOOGLE_PROJECT_ID,
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY,
      client_id: process.env.GOOGLE_CLIENT_ID,
      token_url: process.env.GOOGLE_TOKEN_URL,
      universe_domain: process.env.GOOGLE_UNIVERSE_DOMAIN,
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });
  const post = await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
    range: `Message!A2:F2000`,
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [
        [
          body.name,
          body.message,
          body.address,
          body.time,
          body.rsvp,
          `=VLOOKUP("${body.name}",Guest!A:E,5,0)`,
          `="Message!B"&MATCH("${body.name}",Message!A:A,0)`,
        ],
      ],
    },
  });

  return NextResponse.json({
    request: post.config.data.values,
    status: post.status,
  });
}
