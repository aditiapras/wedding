import { NextResponse } from "next/server";
import { google } from "googleapis";

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
  const url = new URL(req.url);
  const id = url.searchParams.get("id");
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
    range: `Guest!A2:F2000`,
  });

  if (!id) {
    const data = res.data.values.map((row) => {
      return {
        name: row[0],
        url: row[1],
        phone: row[2],
        address: row[3],
        unixId: Number(row[4]),
        range: row[5],
      };
    });
    const filtered = data.filter((item) => item.unixId != 0);
    return NextResponse.json(filtered);
  } else {
    const data = res.data.values.map((row) => {
      return {
        name: row[0],
        url: row[1],
        phone: row[2],
        address: row[3],
        unixId: Number(row[4]),
        range: row[5],
      };
    });
    const filtered = data.filter((item) => item.unixId == id);
    return NextResponse.json(filtered);
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
  const url = new URL(req.url);
  const range = url.searchParams.get("range");

  const edit = await sheets.spreadsheets.values.update({
    spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
    range: range,
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [[body.message]],
    },
  });
  return NextResponse.json("Success");
}
