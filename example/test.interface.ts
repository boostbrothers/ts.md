/**
 * Test Literal Types
 */
type LiteralTypes = 'Test1' | 'Test2';

/**
 * Test TypeLiteral Type
 */
type TypeLiteralType = {
  f1: string;
  f2: Partial<TypeLiteralType>;
};

/**
 * Test Interface.
 *
 * - markdown bullet list 1
 * - markdown bullet list 2
 *
 * @template Gen String Generic Parameter
 */
interface Interface<Gen extends string = LiteralTypes> {
  /** first field */
  field1: number;
  /**
   * second field
   * @pattern [0-9A-Za-z]{6, 16}
   */
  field2: string;
  field3: null;
  field4?: unknown;
  /**
   * 5th field
   * @deprecated don't use any type
   */
  field5?: any;
  field6?: LiteralTypes;
  /**
   * @min 0
   * @max 100
   */
  field7: number[];
  field8: {
    field81: 'field1' | 'field2';
  };
  field9?: Array<LiteralTypes>;
  field10: Gen;
}
