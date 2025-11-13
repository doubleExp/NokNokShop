# NokNokShop 프로젝트

백엔드(Spring Boot) + 프론트엔드(React + Vite) 뼈대 프로젝트입니다.

## 1. 백엔드(Sprint Boot)

### 실행 방법

```bash
cd noknokshop-backend
# DB 정보 application.yml 수정 후
mvn spring-boot:run
```

PostgreSQL 설정은 `src/main/resources/application.yml` 에서 수정하세요.

## 2. 프론트엔드(React + Vite)

### 실행 방법

```bash
cd noknokshop-frontend
npm install
npm run dev
```

기본 상품 API 호출 주소는 `http://localhost:8080/api/products` 로 되어 있습니다.
