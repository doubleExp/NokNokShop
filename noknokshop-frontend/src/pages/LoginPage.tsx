import React from "react"

export const LoginPage: React.FC = () => {
  const backendBaseUrl =
    import.meta.env.VITE_API_BASE_URL ?? "http://localhost:8080"

  const handleLogin = (provider: string) => {
    window.location.href = `${backendBaseUrl}/oauth2/authorization/${provider}`
  }

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-8">

        {/* 로고 + 타이틀 */}
        <div className="flex flex-col items-center mb-8">
          <img
            src="/images/iclogo.png"
            className="w-12 h-12 object-contain mb-3"
          />
          <h2 className="text-2xl font-bold">NokNokShop 로그인</h2>
          <p className="text-sm text-gray-500">간편 로그인 서비스를 이용하세요.</p>
        </div>

        {/* 이미지 로그인 버튼 */}
        <div className="space-y-3">

          {/* Kakao */}
          <button
            onClick={() => handleLogin("kakao")}
            className="w-full flex justify-center"
          >
            <img
              src="/images/login/kakao_login.png"
              className="h-[45px] w-auto"
              alt="카카오 로그인"
            />
          </button>

          {/* Naver */}
          <button
            onClick={() => handleLogin("naver")}
            className="w-full flex justify-center"
          >
            <img
              src="/images/login/naver_login.png"
              className="h-[45px] w-auto"
              alt="네이버 로그인"
            />
          </button>

          {/* Google */}
          <button
            type="button"
            onClick={() => handleLogin("google")}
            className="w-full flex justify-center"
          >
            <div className="flex items-center justify-center gap-2 w-[183px] h-[45px] border border-gray-300 rounded-md bg-white hover:bg-gray-50">
              {/* 공식 Google G 로고 (SVG) */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                className="w-5 h-5"
              >
                <path
                  fill="#EA4335"
                  d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0
                    14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                />
                <path
                  fill="#4285F4"
                  d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26
                    5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                />
                <path
                  fill="#FBBC05"
                  d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59L2.55 13.22C.92
                    16.46 0 20.12 0 24c0 3.88.92 7.54 2.55 10.78l7.98-6.19z"
                />
                <path
                  fill="#34A853"
                  d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16
                    2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                />
              </svg>

              <span className="text-gray-700 opacity-50 font-semibold">
                Google 로그인
              </span>
            </div>
          </button>

        </div>


        {/* 안내 문구 */}
        <p className="mt-6 text-xs text-gray-400 text-center">
          로그인 시 서비스 이용약관 및 개인정보처리방침에 동의한 것으로 간주됩니다.
        </p>
      </div>
    </div>
  )
}
