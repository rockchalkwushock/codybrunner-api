module.exports = data => `
<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
  <meta charset="utf-8">
  <!-- utf-8 works for most cases -->
  <meta name="viewport" content="width=device-width">
  <!-- Forcing initial-scale shouldn't be necessary -->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!-- Use the latest (edge) version of IE rendering engine -->
  <meta name="x-apple-disable-message-reformatting">
  <!-- Disable auto-scale in iOS 10 Mail entirely -->
  <title>Booking Inquiry</title>
  <!-- The title tag shows in email notifications, like Android 4.4. -->
  <!-- Web Font / @font-face : BEGIN -->
  <!-- NOTE: If web fonts are not required, lines 10 - 27 can be safely removed. -->
  <!-- Desktop Outlook chokes on web font references and defaults to Times New Roman, so we force a safe fallback font. -->
  <!--[if mso]>
        <style>
            * {
                font-family: sans-serif !important;
            }
        </style>
    <![endif]-->
  <!-- All other clients get the webfont reference; some will render the font and others will silently fail to the fallbacks. More on that here: http://stylecampaign.com/blog/2015/02/webfont-support-in-email/ -->
  <!--[if !mso]><!-->
  <link href="https://fonts.googleapis.com/css?family=Courgette|Nunito" rel="stylesheet" type='text/css'>
  <!--<![endif]-->
  <!-- Web Font / @font-face : END -->
  <!-- CSS Reset : BEGIN -->
  <style>
    /* What it does: Remove spaces around the email design added by some email clients. */

    /* Beware: It can remove the padding / margin and add a background color to the compose a reply window. */

    html,
    body {
      margin: 0 auto !important;
      padding: 0 !important;
      height: 100% !important;
      width: 100% !important;
    }

    /* What it does: Stops email clients resizing small text. */

    * {
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
    }

    /* What it does: Centers email on Android 4.4 */

    div[style*="margin: 16px 0"] {
      margin: 0 !important;
    }

    /* What it does: Stops Outlook from adding extra spacing to tables. */

    table,
    td {
      mso-table-lspace: 0pt !important;
      mso-table-rspace: 0pt !important;
    }

    /* What it does: Fixes webkit padding issue. Fix for Yahoo mail table alignment bug. Applies table-layout to the first 2 tables then removes for anything nested deeper. */

    table {
      border-spacing: 0 !important;
      border-collapse: collapse !important;
      table-layout: fixed !important;
      margin: 0 auto !important;
    }

    table table table {
      table-layout: auto;
    }

    /* What it does: Uses a better rendering method when resizing images in IE. */

    img {
      -ms-interpolation-mode: bicubic;
    }

    /* What it does: A work-around for email clients meddling in triggered links. */

    *[x-apple-data-detectors],
    /* iOS */

    .x-gmail-data-detectors,
    /* Gmail */

    .x-gmail-data-detectors *,
    .aBn {
      border-bottom: 0 !important;
      cursor: default !important;
      color: inherit !important;
      text-decoration: none !important;
      font-size: inherit !important;
      font-family: inherit !important;
      font-weight: inherit !important;
      line-height: inherit !important;
    }

    /* What it does: Prevents Gmail from displaying an download button on large, non-linked images. */

    .a6S {
      display: none !important;
      opacity: 0.01 !important;
    }

    /* If the above doesn't work, add a .g-img class to any image in question. */

    img.g-img+div {
      display: none !important;
    }

    /* What it does: Prevents underlining the button text in Windows 10 */

    .button-link {
      text-decoration: none !important;
    }

    /* What it does: Removes right gutter in Gmail iOS app: https://github.com/TedGoas/Cerberus/issues/89  */

    /* Create one of these media queries for each additional viewport size you'd like to fix */

    /* Thanks to Eric Lepetit (@ericlepetitsf) for help troubleshooting */

    @media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
      /* iPhone 6 and 6+ */
      .email-container {
        min-width: 375px !important;
      }
    }
  </style>
  <!-- CSS Reset : END -->
  <!-- Progressive Enhancements : BEGIN -->
  <style>
    /* Media Queries */

    @media screen and (max-width: 600px) {
      .email-container {
        width: 100% !important;
        margin: auto !important;
      }
      /* What it does: Forces elements to resize to the full width of their container. Useful for resizing images beyond their max-width. */
      .fluid {
        max-width: 100% !important;
        height: auto !important;
        margin-left: auto !important;
        margin-right: auto !important;
      }
      /* What it does: Forces table cells into full-width rows. */
      .stack-column,
      .stack-column-center {
        display: block !important;
        width: 100% !important;
        max-width: 100% !important;
        direction: ltr !important;
      }
      /* And center justify these ones. */
      .stack-column-center {
        text-align: center !important;
      }
      /* What it does: Generic utility class for centering. Useful for images, buttons, and nested tables. */
      .center-on-narrow {
        text-align: center !important;
        display: block !important;
        margin-left: auto !important;
        margin-right: auto !important;
        float: none !important;
      }
      table.center-on-narrow {
        display: inline-block !important;
      }
      /* What it does: Adjust typography on small screens to improve readability */
      .email-container p {
        font-size: 17px !important;
        line-height: 22px !important;
      }
    }
  </style>
  <!-- Progressive Enhancements : END -->
  <!-- My Styles : BEGIN -->
  <style>
    body {
      background-color: #fff;
      margin: 0;
      mso-line-height-rule: exactly;
      width: 100%;
    }

    center {
      background-color: #fff;
      text-align: left;
      width: 100%;
    }

    table {
      border: none;
      margin: auto;
      width: 600px;
    }

    h1 {
      color: #000;
      font-family: 'Courgette', cursive;
      font-size: 24px;
      font-weight: normal;
      line-height: 27px;
      margin: 0;
    }

    p {
      margin: 0;
    }

    .email-body {
      background-color: #fff;
      color: #000;
      font-family: 'Nunito', sans-serif;
      font-size: 15px;
      line-height: 20px;
      padding: 0 40px 40px;
      text-align: justify;
    }

    .email-header {
      background-color: #fff;
      padding: 40px 40px 20px;
      text-align: left;
    }
  </style>
  <!-- My Styles : END -->
  <!-- What it does: Makes background images in 72ppi Outlook render at correct size. -->
  <!--[if gte mso 9]>
    <xml>
        <o:OfficeDocumentSettings>
            <o:AllowPNG/>
            <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->
</head>

<body>
  <center>
    <!-- Email Header : BEGIN -->
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" class="email-container">
      <tr>
        <td style="padding: 20px 0; text-align: center">
          <h1>CodyBrunner.me</h1>
        </td>
      </tr>
    </table>
    <!-- Email Header : END -->
    <!-- Email Body : BEGIN -->
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" class="email-container">
      <!-- Header -->
      <tr>
        <td class="email-header">
          <h1>Hello Cody!</h1>
        </td>
      </tr>
      <!-- User's info injected into stock message. -->
      <tr>
        <td class="email-body">
          <p>
            My name is, ${data.name} with ${data.company}.

            Please feel free to contact me either
            by email, ${data.email} or by phone, ${data.phone}.
          </p>
        </td>
      </tr>
      <!-- User's custom message. -->
      <tr>
        <td class="email-body">
          <p>${data.message}</p>
        </td>
      </tr>
      <!-- User's Goodbye -->
      <tr>
        <td class="email-body">
          <p>Thank you!</p>
          <br/>
          <p>${data.name}</p>
        </td>
      </tr>
    </table>
    <!-- Email Body : END -->
  </center>
</body>

</html>
`
