# test.interface

## LiteralTypes

- type: `type`

Test Literal Types

```typescript
Test1 | Test2
```

## TypeLiteralType

- type: `type`

Test TypeLiteral Type

### Properties

이름 | 타입 | 필수 | 기본값 | 설명
---|---|:---:|---|--
f1| String|  ✅ | | 
f2| [`Partial`](#Partial)\<[`TypeLiteralType`](#TypeLiteralType)\>|  ✅ | | 

## Interface

- type: `interface`

Test Interface.

- markdown bullet list 1
- markdown bullet list 2

### Tags

- `@template`: String Generic Parameter
### Generics

이름 | extends of | default
--- | --- | ---
Gen| String| [`LiteralTypes`](#LiteralTypes)
### Properties

이름 | 타입 | 필수 | 기본값 | 설명
---|---|:---:|---|---
field1| Number|  ✅ | | first field
field2| String|  ✅ | | second field<br />`@pattern: [0-9A-Za-z]{6, 16}`
field3| Null|  ✅ | | 
field4| Unknown| | | 
~~field5~~| Any| | | 5th field<br />`@deprecated: don't use any type`
field6| [`LiteralTypes`](#LiteralTypes)| | | 
field7| Array\<Number\>|  ✅ | | <br />`@min: 0`<br />`@max: 100`
field8| Object|  ✅ | | 
field8.field81| field1 \| field2|  ✅ | | 
field9| [`Array`](#Array)\<[`LiteralTypes`](#LiteralTypes)\>| | | 
field10| [`Gen`](#Gen)|  ✅ | | 


