import { NextResponse } from "next/server";
import { google } from "googleapis";
import moment from "moment-timezone";

export async function GET(req) {
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
    const url = new URL(req.url);
    const id = url.searchParams.get("id");
    if (!id) {
      const res = await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
        range: `Guest!A2:F2000`,
      });
      const data = res.data.values.map((row) => {
        return {
          name: row[0],
          url: row[1],
          phone: row[2],
          address: row[3],
          guestId: Number(row[4]),
        };
      });
      return NextResponse.json(data);
    } else {
      const res = await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
        range: `Guest!A2:F2000`,
      });
      const data = res.data.values.map((row) => {
        return {
          name: row[0],
          url: row[1],
          phone: row[2],
          address: row[3],
          guestId: Number(row[4]),
        };
      });

      const filtered = data.filter((item) => item.guestId == id);
      return NextResponse.json(filtered[0]);
    }
  } catch (error) {
    return NextResponse.json({ id: null, name: null, url: null });
  }
}

export async function POST(req) {
  const body = await req.json();
  const unix = moment().unix();
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
    const post = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
      range: `Guest!A2:G2000`,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            body.name,
            process.env.NEXT_PUBLIC_INV_LINK + unix,
            body.phone,
            body.address,
            Number(unix),
            `="Message!B"&MATCH("${body.name}",Message!A:A,0)`,
          ],
        ],
      },
    });
    return NextResponse.json({ message: "Success" });
  } catch (error) {
    return NextResponse.json({ message: "Failed to add guest" });
  }
}
