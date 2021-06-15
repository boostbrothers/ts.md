# schemata-documentation

이 라이브러리는 Typescript에서 interface와 enum 등의 타입을 자동으로 문서화 시켜주는 라이브러리입니다.

이후 Public Package로 배포할 계획을 가지고 있습니다.

## Config

실행 경로에 `sgenconfig.json`을 만들어주세요.

```sh
./sgenconfig.json # 기본 경로
```

설정 파일에 필요 정보를 입력해주세요.

### Example `sgencofing.json`
```json
{
  "path": './src',
  "extensions": '',
}
```

name | type | is required | default | description
--- | :---: | :---: | --- | ---
path | string | v | | 문서화를 진행할 typescript source 상대 경로
extensions | string[] \| undefined | | undefined | 확장자 목록
exclude | string[] \| undefined | | undefined | 문서화 제외 목록
include | string[] \| undefined | | undefined | 문서화 포함 목록<br />(ex. `["**/*.interface.ts"]`)
depth | number \| undefined | | undefined | 디렉토리 구조 탐색 깊이 제한
out | string \| undefined | | `./docs/schemata.md` | 문서를 내보낼 파일 위치

## Usage

```sh
$sg [configfile path]
or
$sg ./sgenconfig.json
```
