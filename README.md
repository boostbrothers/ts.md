# ts.md

이 라이브러리는 Typescript에서 interface와 enum 등의 타입을 자동으로 문서화 시켜주는 라이브러리입니다.

이후 Public Package로 배포할 계획을 가지고 있습니다.

## Install

```sh
$npm i -g @boostbrothers/ts.md # global
or
$npm i -D @boostbrothers/ts.md # local
```

## Usage

### Global installed

```sh
$tsmd [configfile path]
or
$tsmd ./.tsmdrc.json
```

### Local installed

```sh
$npx tsmd [configfile path]
or
$npx tsmd ./.tsmdrc.json
```


## Config

실행 경로에 `.tsmdrc.json`을 만들어주세요.

```sh
./.tsmdrc.json # 기본 경로
```

설정 파일에 필요 정보를 입력해주세요.

### Example `.tsmdrc.json`
```json
{
  "path": "./src",
  "include": ["**/*.interface.ts"],
  "out": "./docs/schemata.md"
}
```

name | type | is required | default | description
--- | :---: | :---: | --- | ---
path | string | | `./` | 문서화를 진행할 typescript source 상대 경로
extensions | string[] \| undefined | | undefined | 확장자 목록
exclude | string[] \| undefined | | undefined | 문서화 제외 목록
include | string[] \| undefined | | undefined | 문서화 포함 목록<br />(ex. `["**/*.interface.ts"]`)
depth | number \| undefined | | undefined | 디렉토리 구조 탐색 깊이 제한
out | string \| undefined | | `./docs/schemata.md` | 문서를 내보낼 파일 위치

## TODO

- [ ] Index(TOC)
- [ ] File 별로 출력

## Features

### Type Nodes

- [x] Type Reference(kind: 174)
- [x] Array Type Node(kind: 179)
- [x] Tuple Type Node(kind: 180)
- [x] Union Type Node(kind: 183)
- [x] Intersection Type Node(kind: 184)
- [x] Literal Type Node(kind: 192)

### Tokens

- [x] First Literal
- [x] Numeric Literal
- [x] String Literal
- [x] String Keyword
- [x] Number Keyword
- [x] Boolean Keyword
- [x] Null Keyword
- [x] Unknown Keyword
- [x] Any Keyword

### Declaration

- [x] Identifier(kind: 78)
  - `escapedText: string`
- [x] Type Element
  - `name?: PropertyName`
  - `questionToken?: QuestionToken`
- [x] Property Signature(kind: 163)
  - `name: PropertyName`
  - `questionToken?: QuestionToken`
  - `type?: TypeNode`
- [x] Enum Member Declaration(kind: 292)
- [x] Enum Declaration(kind: 256)
- [x] Type Literal(kind: 178)
  - `members: TypeElement[]`
- [x] Type Parameter Declaration(kind: 160)
