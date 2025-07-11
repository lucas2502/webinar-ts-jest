# 🎓 Webinar: Testes Unitários com TypeScript e Jest

Este repositório contém todo o material apresentado na webinar sobre **TypeScript avançado com foco em testes unitários usando Jest**.

---

## 📦 Estrutura do Projeto

```
typescript_jest_webinar/
├── src/
│   ├── utils/
│   │   ├── math.ts
│   │   └── swapi.ts
│   ├── domain/
│   │   ├── result.ts
│   │   └── UserService.ts
│   ├── usecases/
│   │   └── GetUserUseCase.ts
│   └── zod/
│       └── starwars.ts
├── tests/
│   ├── math.test.ts
│   ├── swapi.test.ts
│   ├── GetUserUseCase.test.ts
│   └── zod/
│       └── starwars.test.ts
├── package.json
├── tsconfig.json
├── jest.config.js
└── README.md
```

---

## 🚀 Como Rodar

1. Instale as dependências:
```bash
npm install
```

2. Execute os testes:
```bash
npm test
```

---

## 🧪 Exemplos Inclusos

### ✅ Testes Básicos com Tipos

- **math.ts**:
```ts
export function sum(a: number, b: number): number {
  return a + b;
}
```

- **math.test.ts**:
```ts
test('adds two numbers', () => {
  expect(sum(2, 3)).toBe(5);
});
```

---

### 🌐 Testando APIs Públicas com TypeScript

- **swapi.ts**:
```ts
export async function getCharacter(id: number): Promise<{ name: string }> {
  const res = await fetch(\`https://swapi.dev/api/people/\${id}\`);
  return res.json();
}
```

- **swapi.test.ts**:
```ts
test('should return Luke Skywalker for ID 1', async () => {
  const data = await getCharacter(1);
  expect(data.name).toBe('Luke Skywalker');
});
```

---

### 🧰 Trabalhando com `Result<T, E>`

- **result.ts**:
```ts
export type Result<T, E> = 
  | { ok: true; value: T }
  | { ok: false; error: E };
```

- **Uso em Use Case**:
```ts
const result = await useCase.execute(1);
if (result.ok) console.log(result.value);
else console.error(result.error);
```

---

### 🤖 Mock Seguro com `jest.Mocked<T>`

- **UserService.ts** (interface):
```ts
export interface UserService {
  getUserById(id: number): Promise<User>;
}
```

- **Mock**:
```ts
const mockService: jest.Mocked<UserService> = {
  getUserById: jest.fn()
};
```

---

### 📦 Validação com Zod + API Pública

- **starwars.ts**:
```ts
const CharacterSchema = z.object({
  name: z.string(),
  height: z.string(),
  mass: z.string()
});
```

- **Testando a API**:
```ts
const char = await fetchCharacter(1);
expect(char.name).toBe('Luke Skywalker');
```

---

## 📖 Benefícios Usando TypeScript com Jest

- Segurança de tipos em mocks
- Inferência automática de retorno
- Redução de testes redundantes
- Design orientado a contratos
- Validação estática com `Result<T, E>` e `zod`

---

## 🧠 Ideal para
- Desenvolvedores seniores que querem aplicar boas práticas de tipagem forte
- Times que seguem TDD e Clean Architecture
- Projetos com necessidade de segurança de tipos e cobertura confiável

---

Feito com ❤️ para a comunidade TypeScript.
