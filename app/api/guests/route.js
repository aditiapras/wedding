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
        range: `Guest!A2:K2000`,
      });
      const data = res.data.values.map((row) => {
        return {
          name: row[0],
          url: row[1],
          guestId: Number(row[2]),
          guestOf: row[3],
          type: row[4],
          relationship: row[5],
          phone: row[6],
          address: row[7],
          invitationStatus: row[8],
        };
      });
      return NextResponse.json(data);
    } else {
      const res = await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
        range: `Guest!A2:K2000`,
      });
      const data = res.data.values.map((row) => {
        return {
          name: row[0],
          url: row[1],
          guestId: Number(row[2]),
          guestOf: row[3],
          type: row[4],
          relationship: row[5],
          phone: row[6],
          address: row[7],
          invitationStatus: row[8],
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
    const nameVerification = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
      range: `Guest!A2:A2000`,
    });
    const guestName = nameVerification.data.values.map((row) => {
      return { name: row[0] };
    });
    const filtered = guestName.filter((item) => item.name == body.name);
    const filteredName = filtered[0].name;

    if (filteredName.toLowerCase() == body.name.toLowerCase()) {
      return NextResponse.json({
        isListed: true,
        message: "Guest already exists",
        name: filteredName,
      });
    }
  } catch (error) {
    try {
      const post = await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
        range: `Guest!A2:K2000`,
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [
            [
              body.name,
              process.env.NEXT_PUBLIC_INV_LINK + unix,
              Number(unix),
              body.guestOf,
              body.type,
              body.relationship,
              `'${body.phone}`,
              body.address,
              "Belum Terkirim",
              `="Message!B"&MATCH("${body.name}",Message!A:A,0)`,
              `="Guest!C"&MATCH("${body.name}",Guest!A:A,0)`,
            ],
          ],
        },
      });
      return NextResponse.json({ message: "Success", isListed: false });
    } catch (error) {
      return NextResponse.json({ message: "Failed to add guest" });
    }
  }
}
