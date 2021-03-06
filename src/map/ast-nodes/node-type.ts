/**
 * Map AST node types
 * All AST nodes have this type
 */
export enum NodeType {
  Abs = 'Abs',
  Addition = 'Addition',
  Atan2 = 'Atan2',
  Ceil = 'Ceil',
  Cos = 'Cos',
  Distance = 'Distance',
  DistanceStatement = 'DistanceStatement',
  Division = 'Division',
  Exp = 'Exp',
  Floor = 'Floor',
  Log = 'Log',
  MapFunction = 'MapFunction',
  MapFunctionWithKeyAndSubelement = 'MapFunctionWithKeyAndSubelement',
  MapFunctionWithKey = 'MapFunctionWithKey',
  Modulo = 'Modulo',
  Multiplication = 'Multiplication',
  Number = 'Number',
  Parens = 'Parens',
  Pow = 'Pow',
  Rand = 'Rand',
  Root = 'Root',
  Sin = 'Sin',
  Sqrt = 'Sqrt',
  String = 'String',
  Subtraction = 'Subtraction',
  Unary = 'Unary',
  VarAssignStatement = 'VarAssignStatement',
  Var = 'Var',
}
