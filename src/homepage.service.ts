import { Injectable } from '@nestjs/common';

@Injectable()
export class HomepageService {
  getHomepage(): string {
    return `<html lang="en">
      <head>
        <meta charset="utf-8">
        <title>Test</title>
        <base href="/">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="icon" type="image/x-icon" href="favicon.ico">
      </head>
      <body>
        <app-root></app-root>
      </body>
    </html>`;
  }
}
