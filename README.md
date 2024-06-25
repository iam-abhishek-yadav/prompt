## Starting the Application

- **Run a MongoDB Container**

  ```sh
  docker run -d -p 27017:27017 mongo
  ```

- **Create a Secret**

  ```sh
  openssl rand --base64 32
  ```

- **Create OAuth Secret**

  - `Create a New Project:` Go to the [Google Cloud Console](https://console.cloud.google.com/).
  - `Configure OAuth Consent Screen`

    - **Navigate to API and Services**: Go to `API and Services` and then click on `OAuth consent screen`.
    - **Create OAuth Consent Screen**: Select the appropriate user type and click `Create`.
    - **Fill Out the Consent Screen Information**:
      - **App name**: Enter your app name.
      - **User support email**: Enter a user support email.
      - **Developer contact information**: Enter the developer's contact information.
      - Click `Save and Continue`.

  - `Create OAuth Credentials`
    - **Go to Credentials**:
      - In the left-hand menu under `API and Services`, click on `Credentials`.
    - **Create Credentials**:
      - Click on `Create credentials` and select `OAuth 2.0 Client IDs`.
    - **Add OAuth Client Details**:
      - **Name**: Enter a name for your OAuth client.
      - **Authorized JavaScript Origins**:
        - Add your application's origin. Example: `http://localhost:3000`.
      - **Authorized Redirect URIs**:
        - Add the redirect URIs where Google will send responses to your authentication requests. Example: `http://localhost:3000/api/auth/callback/google`.
    - **Save**:
      - Click `Create`. You will be provided with a `Client ID` and `Client Secret`.

- **Configure Environment Variables**

  - **Create a `.env` file**:
    In the root directory of your Next.js application, create a file named `.env`.

  - **Add the following environment variables**:
    ```env
    GOOGLE_CLIENT_ID=your-client-id
    GOOGLE_CLIENT_SECRET=your-client-secret
    MONGODB_URI="mongodb://localhost:27017/mydatabase"
    NEXTAUTH_URL=http://localhost:3000
    NEXTAUTH_URL_INTERNAL=http://localhost:3000
    NEXTAUTH_SECRET=your-generated-secret
    ```

- **Start the Application**

  ```sh
  npm install
  ```

  ```sh
  npm run dev
  ```
