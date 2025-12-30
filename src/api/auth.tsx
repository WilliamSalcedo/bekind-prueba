interface LoginPayload {
  username: string;
  password: string;
}
 



interface ApiErrorResponse {
  message?: string;
  Message?: string;
}

export const loginRequest = async (
  payload: LoginPayload
): Promise<string> => {
  const response = await fetch(
    "https://dev.apinetbo.bekindnetwork.com/api/Authentication/Login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  );
  if (!response.ok) {
    const errorData: ApiErrorResponse = await response.json();
    throw {
      message:
        errorData.message || errorData.Message || "Error al iniciar sesión",
    };
  }
  const token = await response.text()
  return token
};
