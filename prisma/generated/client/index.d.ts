
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model VerificationRequest
 * 
 */
export type VerificationRequest = $Result.DefaultSelection<Prisma.$VerificationRequestPayload>
/**
 * Model Board
 * 
 */
export type Board = $Result.DefaultSelection<Prisma.$BoardPayload>
/**
 * Model BoardLikeDisLike
 * 
 */
export type BoardLikeDisLike = $Result.DefaultSelection<Prisma.$BoardLikeDisLikePayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model ViewdBoardStore
 * 
 */
export type ViewdBoardStore = $Result.DefaultSelection<Prisma.$ViewdBoardStorePayload>
/**
 * Model ViewdProductStore
 * 
 */
export type ViewdProductStore = $Result.DefaultSelection<Prisma.$ViewdProductStorePayload>
/**
 * Model Conversation
 * 
 */
export type Conversation = $Result.DefaultSelection<Prisma.$ConversationPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserType: {
  User: 'User',
  Admin: 'Admin'
};

export type UserType = (typeof UserType)[keyof typeof UserType]

}

export type UserType = $Enums.UserType

export const UserType: typeof $Enums.UserType

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs>;

  /**
   * `prisma.verificationRequest`: Exposes CRUD operations for the **VerificationRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationRequests
    * const verificationRequests = await prisma.verificationRequest.findMany()
    * ```
    */
  get verificationRequest(): Prisma.VerificationRequestDelegate<ExtArgs>;

  /**
   * `prisma.board`: Exposes CRUD operations for the **Board** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Boards
    * const boards = await prisma.board.findMany()
    * ```
    */
  get board(): Prisma.BoardDelegate<ExtArgs>;

  /**
   * `prisma.boardLikeDisLike`: Exposes CRUD operations for the **BoardLikeDisLike** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BoardLikeDisLikes
    * const boardLikeDisLikes = await prisma.boardLikeDisLike.findMany()
    * ```
    */
  get boardLikeDisLike(): Prisma.BoardLikeDisLikeDelegate<ExtArgs>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs>;

  /**
   * `prisma.viewdBoardStore`: Exposes CRUD operations for the **ViewdBoardStore** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ViewdBoardStores
    * const viewdBoardStores = await prisma.viewdBoardStore.findMany()
    * ```
    */
  get viewdBoardStore(): Prisma.ViewdBoardStoreDelegate<ExtArgs>;

  /**
   * `prisma.viewdProductStore`: Exposes CRUD operations for the **ViewdProductStore** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ViewdProductStores
    * const viewdProductStores = await prisma.viewdProductStore.findMany()
    * ```
    */
  get viewdProductStore(): Prisma.ViewdProductStoreDelegate<ExtArgs>;

  /**
   * `prisma.conversation`: Exposes CRUD operations for the **Conversation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Conversations
    * const conversations = await prisma.conversation.findMany()
    * ```
    */
  get conversation(): Prisma.ConversationDelegate<ExtArgs>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.4.1
   * Query Engine version: 2f302df92bd8945e20ad4595a73def5b96afa54f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Account: 'Account',
    Session: 'Session',
    VerificationRequest: 'VerificationRequest',
    Board: 'Board',
    BoardLikeDisLike: 'BoardLikeDisLike',
    Product: 'Product',
    ViewdBoardStore: 'ViewdBoardStore',
    ViewdProductStore: 'ViewdProductStore',
    Conversation: 'Conversation',
    Message: 'Message'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'account' | 'session' | 'verificationRequest' | 'board' | 'boardLikeDisLike' | 'product' | 'viewdBoardStore' | 'viewdProductStore' | 'conversation' | 'message'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>,
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>,
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      VerificationRequest: {
        payload: Prisma.$VerificationRequestPayload<ExtArgs>
        fields: Prisma.VerificationRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationRequestFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationRequestFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationRequestPayload>
          }
          findFirst: {
            args: Prisma.VerificationRequestFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationRequestFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationRequestPayload>
          }
          findMany: {
            args: Prisma.VerificationRequestFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationRequestPayload>[]
          }
          create: {
            args: Prisma.VerificationRequestCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationRequestPayload>
          }
          createMany: {
            args: Prisma.VerificationRequestCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.VerificationRequestDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationRequestPayload>
          }
          update: {
            args: Prisma.VerificationRequestUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationRequestPayload>
          }
          deleteMany: {
            args: Prisma.VerificationRequestDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationRequestUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.VerificationRequestUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationRequestPayload>
          }
          aggregate: {
            args: Prisma.VerificationRequestAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateVerificationRequest>
          }
          groupBy: {
            args: Prisma.VerificationRequestGroupByArgs<ExtArgs>,
            result: $Utils.Optional<VerificationRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationRequestCountArgs<ExtArgs>,
            result: $Utils.Optional<VerificationRequestCountAggregateOutputType> | number
          }
        }
      }
      Board: {
        payload: Prisma.$BoardPayload<ExtArgs>
        fields: Prisma.BoardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BoardFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BoardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BoardFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>
          }
          findFirst: {
            args: Prisma.BoardFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BoardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BoardFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>
          }
          findMany: {
            args: Prisma.BoardFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>[]
          }
          create: {
            args: Prisma.BoardCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>
          }
          createMany: {
            args: Prisma.BoardCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.BoardDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>
          }
          update: {
            args: Prisma.BoardUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>
          }
          deleteMany: {
            args: Prisma.BoardDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BoardUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BoardUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>
          }
          aggregate: {
            args: Prisma.BoardAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBoard>
          }
          groupBy: {
            args: Prisma.BoardGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BoardGroupByOutputType>[]
          }
          count: {
            args: Prisma.BoardCountArgs<ExtArgs>,
            result: $Utils.Optional<BoardCountAggregateOutputType> | number
          }
        }
      }
      BoardLikeDisLike: {
        payload: Prisma.$BoardLikeDisLikePayload<ExtArgs>
        fields: Prisma.BoardLikeDisLikeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BoardLikeDisLikeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BoardLikeDisLikePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BoardLikeDisLikeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BoardLikeDisLikePayload>
          }
          findFirst: {
            args: Prisma.BoardLikeDisLikeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BoardLikeDisLikePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BoardLikeDisLikeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BoardLikeDisLikePayload>
          }
          findMany: {
            args: Prisma.BoardLikeDisLikeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BoardLikeDisLikePayload>[]
          }
          create: {
            args: Prisma.BoardLikeDisLikeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BoardLikeDisLikePayload>
          }
          createMany: {
            args: Prisma.BoardLikeDisLikeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.BoardLikeDisLikeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BoardLikeDisLikePayload>
          }
          update: {
            args: Prisma.BoardLikeDisLikeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BoardLikeDisLikePayload>
          }
          deleteMany: {
            args: Prisma.BoardLikeDisLikeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BoardLikeDisLikeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BoardLikeDisLikeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BoardLikeDisLikePayload>
          }
          aggregate: {
            args: Prisma.BoardLikeDisLikeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBoardLikeDisLike>
          }
          groupBy: {
            args: Prisma.BoardLikeDisLikeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BoardLikeDisLikeGroupByOutputType>[]
          }
          count: {
            args: Prisma.BoardLikeDisLikeCountArgs<ExtArgs>,
            result: $Utils.Optional<BoardLikeDisLikeCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>,
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      ViewdBoardStore: {
        payload: Prisma.$ViewdBoardStorePayload<ExtArgs>
        fields: Prisma.ViewdBoardStoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ViewdBoardStoreFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ViewdBoardStorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ViewdBoardStoreFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ViewdBoardStorePayload>
          }
          findFirst: {
            args: Prisma.ViewdBoardStoreFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ViewdBoardStorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ViewdBoardStoreFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ViewdBoardStorePayload>
          }
          findMany: {
            args: Prisma.ViewdBoardStoreFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ViewdBoardStorePayload>[]
          }
          create: {
            args: Prisma.ViewdBoardStoreCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ViewdBoardStorePayload>
          }
          createMany: {
            args: Prisma.ViewdBoardStoreCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ViewdBoardStoreDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ViewdBoardStorePayload>
          }
          update: {
            args: Prisma.ViewdBoardStoreUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ViewdBoardStorePayload>
          }
          deleteMany: {
            args: Prisma.ViewdBoardStoreDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ViewdBoardStoreUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ViewdBoardStoreUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ViewdBoardStorePayload>
          }
          aggregate: {
            args: Prisma.ViewdBoardStoreAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateViewdBoardStore>
          }
          groupBy: {
            args: Prisma.ViewdBoardStoreGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ViewdBoardStoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.ViewdBoardStoreCountArgs<ExtArgs>,
            result: $Utils.Optional<ViewdBoardStoreCountAggregateOutputType> | number
          }
        }
      }
      ViewdProductStore: {
        payload: Prisma.$ViewdProductStorePayload<ExtArgs>
        fields: Prisma.ViewdProductStoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ViewdProductStoreFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ViewdProductStorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ViewdProductStoreFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ViewdProductStorePayload>
          }
          findFirst: {
            args: Prisma.ViewdProductStoreFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ViewdProductStorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ViewdProductStoreFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ViewdProductStorePayload>
          }
          findMany: {
            args: Prisma.ViewdProductStoreFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ViewdProductStorePayload>[]
          }
          create: {
            args: Prisma.ViewdProductStoreCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ViewdProductStorePayload>
          }
          createMany: {
            args: Prisma.ViewdProductStoreCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ViewdProductStoreDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ViewdProductStorePayload>
          }
          update: {
            args: Prisma.ViewdProductStoreUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ViewdProductStorePayload>
          }
          deleteMany: {
            args: Prisma.ViewdProductStoreDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ViewdProductStoreUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ViewdProductStoreUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ViewdProductStorePayload>
          }
          aggregate: {
            args: Prisma.ViewdProductStoreAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateViewdProductStore>
          }
          groupBy: {
            args: Prisma.ViewdProductStoreGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ViewdProductStoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.ViewdProductStoreCountArgs<ExtArgs>,
            result: $Utils.Optional<ViewdProductStoreCountAggregateOutputType> | number
          }
        }
      }
      Conversation: {
        payload: Prisma.$ConversationPayload<ExtArgs>
        fields: Prisma.ConversationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConversationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConversationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          findFirst: {
            args: Prisma.ConversationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConversationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          findMany: {
            args: Prisma.ConversationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>[]
          }
          create: {
            args: Prisma.ConversationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          createMany: {
            args: Prisma.ConversationCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ConversationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          update: {
            args: Prisma.ConversationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          deleteMany: {
            args: Prisma.ConversationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ConversationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ConversationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          aggregate: {
            args: Prisma.ConversationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateConversation>
          }
          groupBy: {
            args: Prisma.ConversationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ConversationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConversationCountArgs<ExtArgs>,
            result: $Utils.Optional<ConversationCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>,
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sessions: number
    Product: number
    Board: number
    ViewdBoardStore: number
    ViewdProductStore: number
    BoardLikeDisLike: number
    accounts: number
    conversations: number
    sendMessages: number
    receivedMessages: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    Product?: boolean | UserCountOutputTypeCountProductArgs
    Board?: boolean | UserCountOutputTypeCountBoardArgs
    ViewdBoardStore?: boolean | UserCountOutputTypeCountViewdBoardStoreArgs
    ViewdProductStore?: boolean | UserCountOutputTypeCountViewdProductStoreArgs
    BoardLikeDisLike?: boolean | UserCountOutputTypeCountBoardLikeDisLikeArgs
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    conversations?: boolean | UserCountOutputTypeCountConversationsArgs
    sendMessages?: boolean | UserCountOutputTypeCountSendMessagesArgs
    receivedMessages?: boolean | UserCountOutputTypeCountReceivedMessagesArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBoardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BoardWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountViewdBoardStoreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViewdBoardStoreWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountViewdProductStoreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViewdProductStoreWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBoardLikeDisLikeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BoardLikeDisLikeWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountConversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSendMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }



  /**
   * Count Type BoardCountOutputType
   */

  export type BoardCountOutputType = {
    ViewdBoardStore: number
    BoardLikeDisLike: number
  }

  export type BoardCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ViewdBoardStore?: boolean | BoardCountOutputTypeCountViewdBoardStoreArgs
    BoardLikeDisLike?: boolean | BoardCountOutputTypeCountBoardLikeDisLikeArgs
  }

  // Custom InputTypes

  /**
   * BoardCountOutputType without action
   */
  export type BoardCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoardCountOutputType
     */
    select?: BoardCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * BoardCountOutputType without action
   */
  export type BoardCountOutputTypeCountViewdBoardStoreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViewdBoardStoreWhereInput
  }


  /**
   * BoardCountOutputType without action
   */
  export type BoardCountOutputTypeCountBoardLikeDisLikeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BoardLikeDisLikeWhereInput
  }



  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    ViewdProductStore: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ViewdProductStore?: boolean | ProductCountOutputTypeCountViewdProductStoreArgs
  }

  // Custom InputTypes

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountViewdProductStoreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViewdProductStoreWhereInput
  }



  /**
   * Count Type ConversationCountOutputType
   */

  export type ConversationCountOutputType = {
    users: number
    messages: number
  }

  export type ConversationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | ConversationCountOutputTypeCountUsersArgs
    messages?: boolean | ConversationCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes

  /**
   * ConversationCountOutputType without action
   */
  export type ConversationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationCountOutputType
     */
    select?: ConversationCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ConversationCountOutputType without action
   */
  export type ConversationCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * ConversationCountOutputType without action
   */
  export type ConversationCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    hashedPassword: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userType: $Enums.UserType | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    hashedPassword: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userType: $Enums.UserType | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    hashedPassword: number
    email: number
    emailVerified: number
    image: number
    createdAt: number
    updatedAt: number
    userType: number
    favoriteIds: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    hashedPassword?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    userType?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    hashedPassword?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    userType?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    hashedPassword?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    userType?: true
    favoriteIds?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    hashedPassword: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    createdAt: Date
    updatedAt: Date
    userType: $Enums.UserType
    favoriteIds: string[]
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    hashedPassword?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userType?: boolean
    favoriteIds?: boolean
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    Product?: boolean | User$ProductArgs<ExtArgs>
    Board?: boolean | User$BoardArgs<ExtArgs>
    ViewdBoardStore?: boolean | User$ViewdBoardStoreArgs<ExtArgs>
    ViewdProductStore?: boolean | User$ViewdProductStoreArgs<ExtArgs>
    BoardLikeDisLike?: boolean | User$BoardLikeDisLikeArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    conversations?: boolean | User$conversationsArgs<ExtArgs>
    sendMessages?: boolean | User$sendMessagesArgs<ExtArgs>
    receivedMessages?: boolean | User$receivedMessagesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    hashedPassword?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userType?: boolean
    favoriteIds?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    Product?: boolean | User$ProductArgs<ExtArgs>
    Board?: boolean | User$BoardArgs<ExtArgs>
    ViewdBoardStore?: boolean | User$ViewdBoardStoreArgs<ExtArgs>
    ViewdProductStore?: boolean | User$ViewdProductStoreArgs<ExtArgs>
    BoardLikeDisLike?: boolean | User$BoardLikeDisLikeArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    conversations?: boolean | User$conversationsArgs<ExtArgs>
    sendMessages?: boolean | User$sendMessagesArgs<ExtArgs>
    receivedMessages?: boolean | User$receivedMessagesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      Product: Prisma.$ProductPayload<ExtArgs>[]
      Board: Prisma.$BoardPayload<ExtArgs>[]
      ViewdBoardStore: Prisma.$ViewdBoardStorePayload<ExtArgs>[]
      ViewdProductStore: Prisma.$ViewdProductStorePayload<ExtArgs>[]
      BoardLikeDisLike: Prisma.$BoardLikeDisLikePayload<ExtArgs>[]
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      conversations: Prisma.$ConversationPayload<ExtArgs>[]
      sendMessages: Prisma.$MessagePayload<ExtArgs>[]
      receivedMessages: Prisma.$MessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      hashedPassword: string | null
      email: string | null
      emailVerified: Date | null
      image: string | null
      createdAt: Date
      updatedAt: Date
      userType: $Enums.UserType
      favoriteIds: string[]
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findMany'> | Null>;

    Product<T extends User$ProductArgs<ExtArgs> = {}>(args?: Subset<T, User$ProductArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findMany'> | Null>;

    Board<T extends User$BoardArgs<ExtArgs> = {}>(args?: Subset<T, User$BoardArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, 'findMany'> | Null>;

    ViewdBoardStore<T extends User$ViewdBoardStoreArgs<ExtArgs> = {}>(args?: Subset<T, User$ViewdBoardStoreArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewdBoardStorePayload<ExtArgs>, T, 'findMany'> | Null>;

    ViewdProductStore<T extends User$ViewdProductStoreArgs<ExtArgs> = {}>(args?: Subset<T, User$ViewdProductStoreArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewdProductStorePayload<ExtArgs>, T, 'findMany'> | Null>;

    BoardLikeDisLike<T extends User$BoardLikeDisLikeArgs<ExtArgs> = {}>(args?: Subset<T, User$BoardLikeDisLikeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoardLikeDisLikePayload<ExtArgs>, T, 'findMany'> | Null>;

    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findMany'> | Null>;

    conversations<T extends User$conversationsArgs<ExtArgs> = {}>(args?: Subset<T, User$conversationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, 'findMany'> | Null>;

    sendMessages<T extends User$sendMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$sendMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findMany'> | Null>;

    receivedMessages<T extends User$receivedMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$receivedMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly hashedPassword: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly userType: FieldRef<"User", 'UserType'>
    readonly favoriteIds: FieldRef<"User", 'String[]'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }


  /**
   * User.Product
   */
  export type User$ProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * User.Board
   */
  export type User$BoardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardInclude<ExtArgs> | null
    where?: BoardWhereInput
    orderBy?: BoardOrderByWithRelationInput | BoardOrderByWithRelationInput[]
    cursor?: BoardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BoardScalarFieldEnum | BoardScalarFieldEnum[]
  }


  /**
   * User.ViewdBoardStore
   */
  export type User$ViewdBoardStoreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewdBoardStore
     */
    select?: ViewdBoardStoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ViewdBoardStoreInclude<ExtArgs> | null
    where?: ViewdBoardStoreWhereInput
    orderBy?: ViewdBoardStoreOrderByWithRelationInput | ViewdBoardStoreOrderByWithRelationInput[]
    cursor?: ViewdBoardStoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ViewdBoardStoreScalarFieldEnum | ViewdBoardStoreScalarFieldEnum[]
  }


  /**
   * User.ViewdProductStore
   */
  export type User$ViewdProductStoreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewdProductStore
     */
    select?: ViewdProductStoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ViewdProductStoreInclude<ExtArgs> | null
    where?: ViewdProductStoreWhereInput
    orderBy?: ViewdProductStoreOrderByWithRelationInput | ViewdProductStoreOrderByWithRelationInput[]
    cursor?: ViewdProductStoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ViewdProductStoreScalarFieldEnum | ViewdProductStoreScalarFieldEnum[]
  }


  /**
   * User.BoardLikeDisLike
   */
  export type User$BoardLikeDisLikeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoardLikeDisLike
     */
    select?: BoardLikeDisLikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardLikeDisLikeInclude<ExtArgs> | null
    where?: BoardLikeDisLikeWhereInput
    orderBy?: BoardLikeDisLikeOrderByWithRelationInput | BoardLikeDisLikeOrderByWithRelationInput[]
    cursor?: BoardLikeDisLikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BoardLikeDisLikeScalarFieldEnum | BoardLikeDisLikeScalarFieldEnum[]
  }


  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }


  /**
   * User.conversations
   */
  export type User$conversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationInclude<ExtArgs> | null
    where?: ConversationWhereInput
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    cursor?: ConversationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }


  /**
   * User.sendMessages
   */
  export type User$sendMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }


  /**
   * User.receivedMessages
   */
  export type User$receivedMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
  }

  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }


  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AccountFindManyArgs, 'select' | 'include'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AccountFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Account that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AccountFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AccountFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
    **/
    create<T extends AccountCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AccountCreateArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Accounts.
     *     @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     *     @example
     *     // Create many Accounts
     *     const account = await prisma.account.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AccountCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
    **/
    delete<T extends AccountDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AccountUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AccountDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AccountUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
    **/
    upsert<T extends AccountUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Account model
   */ 
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }


  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }


  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }


  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }


  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
  }


  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }


  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
  }


  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
  }



  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    sessionToken: string | null
    accessToken: string | null
    expires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    sessionToken: string | null
    accessToken: string | null
    expires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    userId: number
    sessionToken: number
    accessToken: number
    expires: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    userId?: true
    sessionToken?: true
    accessToken?: true
    expires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    userId?: true
    sessionToken?: true
    accessToken?: true
    expires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    userId?: true
    sessionToken?: true
    accessToken?: true
    expires?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    userId: string | null
    sessionToken: string
    accessToken: string | null
    expires: Date
    createdAt: Date
    updatedAt: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sessionToken?: boolean
    accessToken?: boolean
    expires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | Session$userArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    userId?: boolean
    sessionToken?: boolean
    accessToken?: boolean
    expires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Session$userArgs<ExtArgs>
  }


  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      sessionToken: string
      accessToken: string | null
      expires: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }


  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SessionFindManyArgs, 'select' | 'include'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SessionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Session that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SessionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SessionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
    **/
    create<T extends SessionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SessionCreateArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Sessions.
     *     @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     *     @example
     *     // Create many Sessions
     *     const session = await prisma.session.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SessionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
    **/
    delete<T extends SessionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SessionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SessionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SessionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
    **/
    upsert<T extends SessionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends Session$userArgs<ExtArgs> = {}>(args?: Subset<T, Session$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Session model
   */ 
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly accessToken: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }


  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }


  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }


  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }


  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
  }


  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }


  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
  }


  /**
   * Session.user
   */
  export type Session$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }


  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
  }



  /**
   * Model VerificationRequest
   */

  export type AggregateVerificationRequest = {
    _count: VerificationRequestCountAggregateOutputType | null
    _min: VerificationRequestMinAggregateOutputType | null
    _max: VerificationRequestMaxAggregateOutputType | null
  }

  export type VerificationRequestMinAggregateOutputType = {
    id: string | null
    identifier: string | null
    token: string | null
    expires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationRequestMaxAggregateOutputType = {
    id: string | null
    identifier: string | null
    token: string | null
    expires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationRequestCountAggregateOutputType = {
    id: number
    identifier: number
    token: number
    expires: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VerificationRequestMinAggregateInputType = {
    id?: true
    identifier?: true
    token?: true
    expires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationRequestMaxAggregateInputType = {
    id?: true
    identifier?: true
    token?: true
    expires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationRequestCountAggregateInputType = {
    id?: true
    identifier?: true
    token?: true
    expires?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VerificationRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationRequest to aggregate.
     */
    where?: VerificationRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationRequests to fetch.
     */
    orderBy?: VerificationRequestOrderByWithRelationInput | VerificationRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationRequests
    **/
    _count?: true | VerificationRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationRequestMaxAggregateInputType
  }

  export type GetVerificationRequestAggregateType<T extends VerificationRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationRequest[P]>
      : GetScalarType<T[P], AggregateVerificationRequest[P]>
  }




  export type VerificationRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationRequestWhereInput
    orderBy?: VerificationRequestOrderByWithAggregationInput | VerificationRequestOrderByWithAggregationInput[]
    by: VerificationRequestScalarFieldEnum[] | VerificationRequestScalarFieldEnum
    having?: VerificationRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationRequestCountAggregateInputType | true
    _min?: VerificationRequestMinAggregateInputType
    _max?: VerificationRequestMaxAggregateInputType
  }

  export type VerificationRequestGroupByOutputType = {
    id: string
    identifier: string
    token: string
    expires: Date
    createdAt: Date
    updatedAt: Date
    _count: VerificationRequestCountAggregateOutputType | null
    _min: VerificationRequestMinAggregateOutputType | null
    _max: VerificationRequestMaxAggregateOutputType | null
  }

  type GetVerificationRequestGroupByPayload<T extends VerificationRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationRequestGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationRequestGroupByOutputType[P]>
        }
      >
    >


  export type VerificationRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    token?: boolean
    expires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verificationRequest"]>

  export type VerificationRequestSelectScalar = {
    id?: boolean
    identifier?: boolean
    token?: boolean
    expires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $VerificationRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationRequest"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      identifier: string
      token: string
      expires: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["verificationRequest"]>
    composites: {}
  }


  type VerificationRequestGetPayload<S extends boolean | null | undefined | VerificationRequestDefaultArgs> = $Result.GetResult<Prisma.$VerificationRequestPayload, S>

  type VerificationRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VerificationRequestFindManyArgs, 'select' | 'include'> & {
      select?: VerificationRequestCountAggregateInputType | true
    }

  export interface VerificationRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationRequest'], meta: { name: 'VerificationRequest' } }
    /**
     * Find zero or one VerificationRequest that matches the filter.
     * @param {VerificationRequestFindUniqueArgs} args - Arguments to find a VerificationRequest
     * @example
     * // Get one VerificationRequest
     * const verificationRequest = await prisma.verificationRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VerificationRequestFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationRequestFindUniqueArgs<ExtArgs>>
    ): Prisma__VerificationRequestClient<$Result.GetResult<Prisma.$VerificationRequestPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one VerificationRequest that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {VerificationRequestFindUniqueOrThrowArgs} args - Arguments to find a VerificationRequest
     * @example
     * // Get one VerificationRequest
     * const verificationRequest = await prisma.verificationRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VerificationRequestFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationRequestFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__VerificationRequestClient<$Result.GetResult<Prisma.$VerificationRequestPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first VerificationRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationRequestFindFirstArgs} args - Arguments to find a VerificationRequest
     * @example
     * // Get one VerificationRequest
     * const verificationRequest = await prisma.verificationRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VerificationRequestFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationRequestFindFirstArgs<ExtArgs>>
    ): Prisma__VerificationRequestClient<$Result.GetResult<Prisma.$VerificationRequestPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first VerificationRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationRequestFindFirstOrThrowArgs} args - Arguments to find a VerificationRequest
     * @example
     * // Get one VerificationRequest
     * const verificationRequest = await prisma.verificationRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VerificationRequestFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationRequestFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__VerificationRequestClient<$Result.GetResult<Prisma.$VerificationRequestPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more VerificationRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationRequestFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationRequests
     * const verificationRequests = await prisma.verificationRequest.findMany()
     * 
     * // Get first 10 VerificationRequests
     * const verificationRequests = await prisma.verificationRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationRequestWithIdOnly = await prisma.verificationRequest.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends VerificationRequestFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationRequestFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationRequestPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a VerificationRequest.
     * @param {VerificationRequestCreateArgs} args - Arguments to create a VerificationRequest.
     * @example
     * // Create one VerificationRequest
     * const VerificationRequest = await prisma.verificationRequest.create({
     *   data: {
     *     // ... data to create a VerificationRequest
     *   }
     * })
     * 
    **/
    create<T extends VerificationRequestCreateArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationRequestCreateArgs<ExtArgs>>
    ): Prisma__VerificationRequestClient<$Result.GetResult<Prisma.$VerificationRequestPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many VerificationRequests.
     *     @param {VerificationRequestCreateManyArgs} args - Arguments to create many VerificationRequests.
     *     @example
     *     // Create many VerificationRequests
     *     const verificationRequest = await prisma.verificationRequest.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends VerificationRequestCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationRequestCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VerificationRequest.
     * @param {VerificationRequestDeleteArgs} args - Arguments to delete one VerificationRequest.
     * @example
     * // Delete one VerificationRequest
     * const VerificationRequest = await prisma.verificationRequest.delete({
     *   where: {
     *     // ... filter to delete one VerificationRequest
     *   }
     * })
     * 
    **/
    delete<T extends VerificationRequestDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationRequestDeleteArgs<ExtArgs>>
    ): Prisma__VerificationRequestClient<$Result.GetResult<Prisma.$VerificationRequestPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one VerificationRequest.
     * @param {VerificationRequestUpdateArgs} args - Arguments to update one VerificationRequest.
     * @example
     * // Update one VerificationRequest
     * const verificationRequest = await prisma.verificationRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VerificationRequestUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationRequestUpdateArgs<ExtArgs>>
    ): Prisma__VerificationRequestClient<$Result.GetResult<Prisma.$VerificationRequestPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more VerificationRequests.
     * @param {VerificationRequestDeleteManyArgs} args - Arguments to filter VerificationRequests to delete.
     * @example
     * // Delete a few VerificationRequests
     * const { count } = await prisma.verificationRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VerificationRequestDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationRequestDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationRequests
     * const verificationRequest = await prisma.verificationRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VerificationRequestUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationRequestUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VerificationRequest.
     * @param {VerificationRequestUpsertArgs} args - Arguments to update or create a VerificationRequest.
     * @example
     * // Update or create a VerificationRequest
     * const verificationRequest = await prisma.verificationRequest.upsert({
     *   create: {
     *     // ... data to create a VerificationRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationRequest we want to update
     *   }
     * })
    **/
    upsert<T extends VerificationRequestUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationRequestUpsertArgs<ExtArgs>>
    ): Prisma__VerificationRequestClient<$Result.GetResult<Prisma.$VerificationRequestPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of VerificationRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationRequestCountArgs} args - Arguments to filter VerificationRequests to count.
     * @example
     * // Count the number of VerificationRequests
     * const count = await prisma.verificationRequest.count({
     *   where: {
     *     // ... the filter for the VerificationRequests we want to count
     *   }
     * })
    **/
    count<T extends VerificationRequestCountArgs>(
      args?: Subset<T, VerificationRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationRequestAggregateArgs>(args: Subset<T, VerificationRequestAggregateArgs>): Prisma.PrismaPromise<GetVerificationRequestAggregateType<T>>

    /**
     * Group by VerificationRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationRequestGroupByArgs['orderBy'] }
        : { orderBy?: VerificationRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationRequest model
   */
  readonly fields: VerificationRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the VerificationRequest model
   */ 
  interface VerificationRequestFieldRefs {
    readonly id: FieldRef<"VerificationRequest", 'String'>
    readonly identifier: FieldRef<"VerificationRequest", 'String'>
    readonly token: FieldRef<"VerificationRequest", 'String'>
    readonly expires: FieldRef<"VerificationRequest", 'DateTime'>
    readonly createdAt: FieldRef<"VerificationRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"VerificationRequest", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * VerificationRequest findUnique
   */
  export type VerificationRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationRequest
     */
    select?: VerificationRequestSelect<ExtArgs> | null
    /**
     * Filter, which VerificationRequest to fetch.
     */
    where: VerificationRequestWhereUniqueInput
  }


  /**
   * VerificationRequest findUniqueOrThrow
   */
  export type VerificationRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationRequest
     */
    select?: VerificationRequestSelect<ExtArgs> | null
    /**
     * Filter, which VerificationRequest to fetch.
     */
    where: VerificationRequestWhereUniqueInput
  }


  /**
   * VerificationRequest findFirst
   */
  export type VerificationRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationRequest
     */
    select?: VerificationRequestSelect<ExtArgs> | null
    /**
     * Filter, which VerificationRequest to fetch.
     */
    where?: VerificationRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationRequests to fetch.
     */
    orderBy?: VerificationRequestOrderByWithRelationInput | VerificationRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationRequests.
     */
    cursor?: VerificationRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationRequests.
     */
    distinct?: VerificationRequestScalarFieldEnum | VerificationRequestScalarFieldEnum[]
  }


  /**
   * VerificationRequest findFirstOrThrow
   */
  export type VerificationRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationRequest
     */
    select?: VerificationRequestSelect<ExtArgs> | null
    /**
     * Filter, which VerificationRequest to fetch.
     */
    where?: VerificationRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationRequests to fetch.
     */
    orderBy?: VerificationRequestOrderByWithRelationInput | VerificationRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationRequests.
     */
    cursor?: VerificationRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationRequests.
     */
    distinct?: VerificationRequestScalarFieldEnum | VerificationRequestScalarFieldEnum[]
  }


  /**
   * VerificationRequest findMany
   */
  export type VerificationRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationRequest
     */
    select?: VerificationRequestSelect<ExtArgs> | null
    /**
     * Filter, which VerificationRequests to fetch.
     */
    where?: VerificationRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationRequests to fetch.
     */
    orderBy?: VerificationRequestOrderByWithRelationInput | VerificationRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationRequests.
     */
    cursor?: VerificationRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationRequests.
     */
    skip?: number
    distinct?: VerificationRequestScalarFieldEnum | VerificationRequestScalarFieldEnum[]
  }


  /**
   * VerificationRequest create
   */
  export type VerificationRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationRequest
     */
    select?: VerificationRequestSelect<ExtArgs> | null
    /**
     * The data needed to create a VerificationRequest.
     */
    data: XOR<VerificationRequestCreateInput, VerificationRequestUncheckedCreateInput>
  }


  /**
   * VerificationRequest createMany
   */
  export type VerificationRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationRequests.
     */
    data: VerificationRequestCreateManyInput | VerificationRequestCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * VerificationRequest update
   */
  export type VerificationRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationRequest
     */
    select?: VerificationRequestSelect<ExtArgs> | null
    /**
     * The data needed to update a VerificationRequest.
     */
    data: XOR<VerificationRequestUpdateInput, VerificationRequestUncheckedUpdateInput>
    /**
     * Choose, which VerificationRequest to update.
     */
    where: VerificationRequestWhereUniqueInput
  }


  /**
   * VerificationRequest updateMany
   */
  export type VerificationRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationRequests.
     */
    data: XOR<VerificationRequestUpdateManyMutationInput, VerificationRequestUncheckedUpdateManyInput>
    /**
     * Filter which VerificationRequests to update
     */
    where?: VerificationRequestWhereInput
  }


  /**
   * VerificationRequest upsert
   */
  export type VerificationRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationRequest
     */
    select?: VerificationRequestSelect<ExtArgs> | null
    /**
     * The filter to search for the VerificationRequest to update in case it exists.
     */
    where: VerificationRequestWhereUniqueInput
    /**
     * In case the VerificationRequest found by the `where` argument doesn't exist, create a new VerificationRequest with this data.
     */
    create: XOR<VerificationRequestCreateInput, VerificationRequestUncheckedCreateInput>
    /**
     * In case the VerificationRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationRequestUpdateInput, VerificationRequestUncheckedUpdateInput>
  }


  /**
   * VerificationRequest delete
   */
  export type VerificationRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationRequest
     */
    select?: VerificationRequestSelect<ExtArgs> | null
    /**
     * Filter which VerificationRequest to delete.
     */
    where: VerificationRequestWhereUniqueInput
  }


  /**
   * VerificationRequest deleteMany
   */
  export type VerificationRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationRequests to delete
     */
    where?: VerificationRequestWhereInput
  }


  /**
   * VerificationRequest without action
   */
  export type VerificationRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationRequest
     */
    select?: VerificationRequestSelect<ExtArgs> | null
  }



  /**
   * Model Board
   */

  export type AggregateBoard = {
    _count: BoardCountAggregateOutputType | null
    _avg: BoardAvgAggregateOutputType | null
    _sum: BoardSumAggregateOutputType | null
    _min: BoardMinAggregateOutputType | null
    _max: BoardMaxAggregateOutputType | null
  }

  export type BoardAvgAggregateOutputType = {
    likes: number | null
    dislikes: number | null
    views: number | null
  }

  export type BoardSumAggregateOutputType = {
    likes: number | null
    dislikes: number | null
    views: number | null
  }

  export type BoardMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    category: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    likes: number | null
    dislikes: number | null
    views: number | null
  }

  export type BoardMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    category: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    likes: number | null
    dislikes: number | null
    views: number | null
  }

  export type BoardCountAggregateOutputType = {
    id: number
    title: number
    description: number
    category: number
    userId: number
    createdAt: number
    updatedAt: number
    likes: number
    dislikes: number
    views: number
    _all: number
  }


  export type BoardAvgAggregateInputType = {
    likes?: true
    dislikes?: true
    views?: true
  }

  export type BoardSumAggregateInputType = {
    likes?: true
    dislikes?: true
    views?: true
  }

  export type BoardMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    likes?: true
    dislikes?: true
    views?: true
  }

  export type BoardMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    likes?: true
    dislikes?: true
    views?: true
  }

  export type BoardCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    likes?: true
    dislikes?: true
    views?: true
    _all?: true
  }

  export type BoardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Board to aggregate.
     */
    where?: BoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boards to fetch.
     */
    orderBy?: BoardOrderByWithRelationInput | BoardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Boards
    **/
    _count?: true | BoardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BoardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BoardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BoardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BoardMaxAggregateInputType
  }

  export type GetBoardAggregateType<T extends BoardAggregateArgs> = {
        [P in keyof T & keyof AggregateBoard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBoard[P]>
      : GetScalarType<T[P], AggregateBoard[P]>
  }




  export type BoardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BoardWhereInput
    orderBy?: BoardOrderByWithAggregationInput | BoardOrderByWithAggregationInput[]
    by: BoardScalarFieldEnum[] | BoardScalarFieldEnum
    having?: BoardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BoardCountAggregateInputType | true
    _avg?: BoardAvgAggregateInputType
    _sum?: BoardSumAggregateInputType
    _min?: BoardMinAggregateInputType
    _max?: BoardMaxAggregateInputType
  }

  export type BoardGroupByOutputType = {
    id: string
    title: string
    description: string
    category: string
    userId: string
    createdAt: Date
    updatedAt: Date
    likes: number
    dislikes: number
    views: number
    _count: BoardCountAggregateOutputType | null
    _avg: BoardAvgAggregateOutputType | null
    _sum: BoardSumAggregateOutputType | null
    _min: BoardMinAggregateOutputType | null
    _max: BoardMaxAggregateOutputType | null
  }

  type GetBoardGroupByPayload<T extends BoardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BoardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BoardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BoardGroupByOutputType[P]>
            : GetScalarType<T[P], BoardGroupByOutputType[P]>
        }
      >
    >


  export type BoardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    likes?: boolean
    dislikes?: boolean
    views?: boolean
    ViewdBoardStore?: boolean | Board$ViewdBoardStoreArgs<ExtArgs>
    BoardLikeDisLike?: boolean | Board$BoardLikeDisLikeArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | BoardCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["board"]>

  export type BoardSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    likes?: boolean
    dislikes?: boolean
    views?: boolean
  }

  export type BoardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ViewdBoardStore?: boolean | Board$ViewdBoardStoreArgs<ExtArgs>
    BoardLikeDisLike?: boolean | Board$BoardLikeDisLikeArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | BoardCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $BoardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Board"
    objects: {
      ViewdBoardStore: Prisma.$ViewdBoardStorePayload<ExtArgs>[]
      BoardLikeDisLike: Prisma.$BoardLikeDisLikePayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      category: string
      userId: string
      createdAt: Date
      updatedAt: Date
      likes: number
      dislikes: number
      views: number
    }, ExtArgs["result"]["board"]>
    composites: {}
  }


  type BoardGetPayload<S extends boolean | null | undefined | BoardDefaultArgs> = $Result.GetResult<Prisma.$BoardPayload, S>

  type BoardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BoardFindManyArgs, 'select' | 'include'> & {
      select?: BoardCountAggregateInputType | true
    }

  export interface BoardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Board'], meta: { name: 'Board' } }
    /**
     * Find zero or one Board that matches the filter.
     * @param {BoardFindUniqueArgs} args - Arguments to find a Board
     * @example
     * // Get one Board
     * const board = await prisma.board.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BoardFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BoardFindUniqueArgs<ExtArgs>>
    ): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Board that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BoardFindUniqueOrThrowArgs} args - Arguments to find a Board
     * @example
     * // Get one Board
     * const board = await prisma.board.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BoardFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BoardFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Board that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardFindFirstArgs} args - Arguments to find a Board
     * @example
     * // Get one Board
     * const board = await prisma.board.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BoardFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BoardFindFirstArgs<ExtArgs>>
    ): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Board that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardFindFirstOrThrowArgs} args - Arguments to find a Board
     * @example
     * // Get one Board
     * const board = await prisma.board.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BoardFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BoardFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Boards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Boards
     * const boards = await prisma.board.findMany()
     * 
     * // Get first 10 Boards
     * const boards = await prisma.board.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const boardWithIdOnly = await prisma.board.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BoardFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BoardFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Board.
     * @param {BoardCreateArgs} args - Arguments to create a Board.
     * @example
     * // Create one Board
     * const Board = await prisma.board.create({
     *   data: {
     *     // ... data to create a Board
     *   }
     * })
     * 
    **/
    create<T extends BoardCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BoardCreateArgs<ExtArgs>>
    ): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Boards.
     *     @param {BoardCreateManyArgs} args - Arguments to create many Boards.
     *     @example
     *     // Create many Boards
     *     const board = await prisma.board.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BoardCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BoardCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Board.
     * @param {BoardDeleteArgs} args - Arguments to delete one Board.
     * @example
     * // Delete one Board
     * const Board = await prisma.board.delete({
     *   where: {
     *     // ... filter to delete one Board
     *   }
     * })
     * 
    **/
    delete<T extends BoardDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BoardDeleteArgs<ExtArgs>>
    ): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Board.
     * @param {BoardUpdateArgs} args - Arguments to update one Board.
     * @example
     * // Update one Board
     * const board = await prisma.board.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BoardUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BoardUpdateArgs<ExtArgs>>
    ): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Boards.
     * @param {BoardDeleteManyArgs} args - Arguments to filter Boards to delete.
     * @example
     * // Delete a few Boards
     * const { count } = await prisma.board.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BoardDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BoardDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Boards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Boards
     * const board = await prisma.board.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BoardUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BoardUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Board.
     * @param {BoardUpsertArgs} args - Arguments to update or create a Board.
     * @example
     * // Update or create a Board
     * const board = await prisma.board.upsert({
     *   create: {
     *     // ... data to create a Board
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Board we want to update
     *   }
     * })
    **/
    upsert<T extends BoardUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BoardUpsertArgs<ExtArgs>>
    ): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Boards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardCountArgs} args - Arguments to filter Boards to count.
     * @example
     * // Count the number of Boards
     * const count = await prisma.board.count({
     *   where: {
     *     // ... the filter for the Boards we want to count
     *   }
     * })
    **/
    count<T extends BoardCountArgs>(
      args?: Subset<T, BoardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BoardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Board.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BoardAggregateArgs>(args: Subset<T, BoardAggregateArgs>): Prisma.PrismaPromise<GetBoardAggregateType<T>>

    /**
     * Group by Board.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BoardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BoardGroupByArgs['orderBy'] }
        : { orderBy?: BoardGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BoardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBoardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Board model
   */
  readonly fields: BoardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Board.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BoardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    ViewdBoardStore<T extends Board$ViewdBoardStoreArgs<ExtArgs> = {}>(args?: Subset<T, Board$ViewdBoardStoreArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewdBoardStorePayload<ExtArgs>, T, 'findMany'> | Null>;

    BoardLikeDisLike<T extends Board$BoardLikeDisLikeArgs<ExtArgs> = {}>(args?: Subset<T, Board$BoardLikeDisLikeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoardLikeDisLikePayload<ExtArgs>, T, 'findMany'> | Null>;

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Board model
   */ 
  interface BoardFieldRefs {
    readonly id: FieldRef<"Board", 'String'>
    readonly title: FieldRef<"Board", 'String'>
    readonly description: FieldRef<"Board", 'String'>
    readonly category: FieldRef<"Board", 'String'>
    readonly userId: FieldRef<"Board", 'String'>
    readonly createdAt: FieldRef<"Board", 'DateTime'>
    readonly updatedAt: FieldRef<"Board", 'DateTime'>
    readonly likes: FieldRef<"Board", 'Int'>
    readonly dislikes: FieldRef<"Board", 'Int'>
    readonly views: FieldRef<"Board", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Board findUnique
   */
  export type BoardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * Filter, which Board to fetch.
     */
    where: BoardWhereUniqueInput
  }


  /**
   * Board findUniqueOrThrow
   */
  export type BoardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * Filter, which Board to fetch.
     */
    where: BoardWhereUniqueInput
  }


  /**
   * Board findFirst
   */
  export type BoardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * Filter, which Board to fetch.
     */
    where?: BoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boards to fetch.
     */
    orderBy?: BoardOrderByWithRelationInput | BoardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Boards.
     */
    cursor?: BoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Boards.
     */
    distinct?: BoardScalarFieldEnum | BoardScalarFieldEnum[]
  }


  /**
   * Board findFirstOrThrow
   */
  export type BoardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * Filter, which Board to fetch.
     */
    where?: BoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boards to fetch.
     */
    orderBy?: BoardOrderByWithRelationInput | BoardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Boards.
     */
    cursor?: BoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Boards.
     */
    distinct?: BoardScalarFieldEnum | BoardScalarFieldEnum[]
  }


  /**
   * Board findMany
   */
  export type BoardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * Filter, which Boards to fetch.
     */
    where?: BoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boards to fetch.
     */
    orderBy?: BoardOrderByWithRelationInput | BoardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Boards.
     */
    cursor?: BoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boards.
     */
    skip?: number
    distinct?: BoardScalarFieldEnum | BoardScalarFieldEnum[]
  }


  /**
   * Board create
   */
  export type BoardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * The data needed to create a Board.
     */
    data: XOR<BoardCreateInput, BoardUncheckedCreateInput>
  }


  /**
   * Board createMany
   */
  export type BoardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Boards.
     */
    data: BoardCreateManyInput | BoardCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Board update
   */
  export type BoardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * The data needed to update a Board.
     */
    data: XOR<BoardUpdateInput, BoardUncheckedUpdateInput>
    /**
     * Choose, which Board to update.
     */
    where: BoardWhereUniqueInput
  }


  /**
   * Board updateMany
   */
  export type BoardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Boards.
     */
    data: XOR<BoardUpdateManyMutationInput, BoardUncheckedUpdateManyInput>
    /**
     * Filter which Boards to update
     */
    where?: BoardWhereInput
  }


  /**
   * Board upsert
   */
  export type BoardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * The filter to search for the Board to update in case it exists.
     */
    where: BoardWhereUniqueInput
    /**
     * In case the Board found by the `where` argument doesn't exist, create a new Board with this data.
     */
    create: XOR<BoardCreateInput, BoardUncheckedCreateInput>
    /**
     * In case the Board was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BoardUpdateInput, BoardUncheckedUpdateInput>
  }


  /**
   * Board delete
   */
  export type BoardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * Filter which Board to delete.
     */
    where: BoardWhereUniqueInput
  }


  /**
   * Board deleteMany
   */
  export type BoardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Boards to delete
     */
    where?: BoardWhereInput
  }


  /**
   * Board.ViewdBoardStore
   */
  export type Board$ViewdBoardStoreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewdBoardStore
     */
    select?: ViewdBoardStoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ViewdBoardStoreInclude<ExtArgs> | null
    where?: ViewdBoardStoreWhereInput
    orderBy?: ViewdBoardStoreOrderByWithRelationInput | ViewdBoardStoreOrderByWithRelationInput[]
    cursor?: ViewdBoardStoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ViewdBoardStoreScalarFieldEnum | ViewdBoardStoreScalarFieldEnum[]
  }


  /**
   * Board.BoardLikeDisLike
   */
  export type Board$BoardLikeDisLikeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoardLikeDisLike
     */
    select?: BoardLikeDisLikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardLikeDisLikeInclude<ExtArgs> | null
    where?: BoardLikeDisLikeWhereInput
    orderBy?: BoardLikeDisLikeOrderByWithRelationInput | BoardLikeDisLikeOrderByWithRelationInput[]
    cursor?: BoardLikeDisLikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BoardLikeDisLikeScalarFieldEnum | BoardLikeDisLikeScalarFieldEnum[]
  }


  /**
   * Board without action
   */
  export type BoardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardInclude<ExtArgs> | null
  }



  /**
   * Model BoardLikeDisLike
   */

  export type AggregateBoardLikeDisLike = {
    _count: BoardLikeDisLikeCountAggregateOutputType | null
    _avg: BoardLikeDisLikeAvgAggregateOutputType | null
    _sum: BoardLikeDisLikeSumAggregateOutputType | null
    _min: BoardLikeDisLikeMinAggregateOutputType | null
    _max: BoardLikeDisLikeMaxAggregateOutputType | null
  }

  export type BoardLikeDisLikeAvgAggregateOutputType = {
    id: number | null
  }

  export type BoardLikeDisLikeSumAggregateOutputType = {
    id: number | null
  }

  export type BoardLikeDisLikeMinAggregateOutputType = {
    id: number | null
    type: string | null
    createdAt: Date | null
    userId: string | null
    boardId: string | null
  }

  export type BoardLikeDisLikeMaxAggregateOutputType = {
    id: number | null
    type: string | null
    createdAt: Date | null
    userId: string | null
    boardId: string | null
  }

  export type BoardLikeDisLikeCountAggregateOutputType = {
    id: number
    type: number
    createdAt: number
    userId: number
    boardId: number
    _all: number
  }


  export type BoardLikeDisLikeAvgAggregateInputType = {
    id?: true
  }

  export type BoardLikeDisLikeSumAggregateInputType = {
    id?: true
  }

  export type BoardLikeDisLikeMinAggregateInputType = {
    id?: true
    type?: true
    createdAt?: true
    userId?: true
    boardId?: true
  }

  export type BoardLikeDisLikeMaxAggregateInputType = {
    id?: true
    type?: true
    createdAt?: true
    userId?: true
    boardId?: true
  }

  export type BoardLikeDisLikeCountAggregateInputType = {
    id?: true
    type?: true
    createdAt?: true
    userId?: true
    boardId?: true
    _all?: true
  }

  export type BoardLikeDisLikeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BoardLikeDisLike to aggregate.
     */
    where?: BoardLikeDisLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoardLikeDisLikes to fetch.
     */
    orderBy?: BoardLikeDisLikeOrderByWithRelationInput | BoardLikeDisLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BoardLikeDisLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoardLikeDisLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoardLikeDisLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BoardLikeDisLikes
    **/
    _count?: true | BoardLikeDisLikeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BoardLikeDisLikeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BoardLikeDisLikeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BoardLikeDisLikeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BoardLikeDisLikeMaxAggregateInputType
  }

  export type GetBoardLikeDisLikeAggregateType<T extends BoardLikeDisLikeAggregateArgs> = {
        [P in keyof T & keyof AggregateBoardLikeDisLike]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBoardLikeDisLike[P]>
      : GetScalarType<T[P], AggregateBoardLikeDisLike[P]>
  }




  export type BoardLikeDisLikeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BoardLikeDisLikeWhereInput
    orderBy?: BoardLikeDisLikeOrderByWithAggregationInput | BoardLikeDisLikeOrderByWithAggregationInput[]
    by: BoardLikeDisLikeScalarFieldEnum[] | BoardLikeDisLikeScalarFieldEnum
    having?: BoardLikeDisLikeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BoardLikeDisLikeCountAggregateInputType | true
    _avg?: BoardLikeDisLikeAvgAggregateInputType
    _sum?: BoardLikeDisLikeSumAggregateInputType
    _min?: BoardLikeDisLikeMinAggregateInputType
    _max?: BoardLikeDisLikeMaxAggregateInputType
  }

  export type BoardLikeDisLikeGroupByOutputType = {
    id: number
    type: string
    createdAt: Date
    userId: string
    boardId: string
    _count: BoardLikeDisLikeCountAggregateOutputType | null
    _avg: BoardLikeDisLikeAvgAggregateOutputType | null
    _sum: BoardLikeDisLikeSumAggregateOutputType | null
    _min: BoardLikeDisLikeMinAggregateOutputType | null
    _max: BoardLikeDisLikeMaxAggregateOutputType | null
  }

  type GetBoardLikeDisLikeGroupByPayload<T extends BoardLikeDisLikeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BoardLikeDisLikeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BoardLikeDisLikeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BoardLikeDisLikeGroupByOutputType[P]>
            : GetScalarType<T[P], BoardLikeDisLikeGroupByOutputType[P]>
        }
      >
    >


  export type BoardLikeDisLikeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    createdAt?: boolean
    userId?: boolean
    boardId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    board?: boolean | BoardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["boardLikeDisLike"]>

  export type BoardLikeDisLikeSelectScalar = {
    id?: boolean
    type?: boolean
    createdAt?: boolean
    userId?: boolean
    boardId?: boolean
  }

  export type BoardLikeDisLikeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    board?: boolean | BoardDefaultArgs<ExtArgs>
  }


  export type $BoardLikeDisLikePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BoardLikeDisLike"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      board: Prisma.$BoardPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: string
      createdAt: Date
      userId: string
      boardId: string
    }, ExtArgs["result"]["boardLikeDisLike"]>
    composites: {}
  }


  type BoardLikeDisLikeGetPayload<S extends boolean | null | undefined | BoardLikeDisLikeDefaultArgs> = $Result.GetResult<Prisma.$BoardLikeDisLikePayload, S>

  type BoardLikeDisLikeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BoardLikeDisLikeFindManyArgs, 'select' | 'include'> & {
      select?: BoardLikeDisLikeCountAggregateInputType | true
    }

  export interface BoardLikeDisLikeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BoardLikeDisLike'], meta: { name: 'BoardLikeDisLike' } }
    /**
     * Find zero or one BoardLikeDisLike that matches the filter.
     * @param {BoardLikeDisLikeFindUniqueArgs} args - Arguments to find a BoardLikeDisLike
     * @example
     * // Get one BoardLikeDisLike
     * const boardLikeDisLike = await prisma.boardLikeDisLike.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BoardLikeDisLikeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BoardLikeDisLikeFindUniqueArgs<ExtArgs>>
    ): Prisma__BoardLikeDisLikeClient<$Result.GetResult<Prisma.$BoardLikeDisLikePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one BoardLikeDisLike that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BoardLikeDisLikeFindUniqueOrThrowArgs} args - Arguments to find a BoardLikeDisLike
     * @example
     * // Get one BoardLikeDisLike
     * const boardLikeDisLike = await prisma.boardLikeDisLike.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BoardLikeDisLikeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BoardLikeDisLikeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BoardLikeDisLikeClient<$Result.GetResult<Prisma.$BoardLikeDisLikePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first BoardLikeDisLike that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardLikeDisLikeFindFirstArgs} args - Arguments to find a BoardLikeDisLike
     * @example
     * // Get one BoardLikeDisLike
     * const boardLikeDisLike = await prisma.boardLikeDisLike.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BoardLikeDisLikeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BoardLikeDisLikeFindFirstArgs<ExtArgs>>
    ): Prisma__BoardLikeDisLikeClient<$Result.GetResult<Prisma.$BoardLikeDisLikePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first BoardLikeDisLike that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardLikeDisLikeFindFirstOrThrowArgs} args - Arguments to find a BoardLikeDisLike
     * @example
     * // Get one BoardLikeDisLike
     * const boardLikeDisLike = await prisma.boardLikeDisLike.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BoardLikeDisLikeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BoardLikeDisLikeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BoardLikeDisLikeClient<$Result.GetResult<Prisma.$BoardLikeDisLikePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more BoardLikeDisLikes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardLikeDisLikeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BoardLikeDisLikes
     * const boardLikeDisLikes = await prisma.boardLikeDisLike.findMany()
     * 
     * // Get first 10 BoardLikeDisLikes
     * const boardLikeDisLikes = await prisma.boardLikeDisLike.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const boardLikeDisLikeWithIdOnly = await prisma.boardLikeDisLike.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BoardLikeDisLikeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BoardLikeDisLikeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoardLikeDisLikePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a BoardLikeDisLike.
     * @param {BoardLikeDisLikeCreateArgs} args - Arguments to create a BoardLikeDisLike.
     * @example
     * // Create one BoardLikeDisLike
     * const BoardLikeDisLike = await prisma.boardLikeDisLike.create({
     *   data: {
     *     // ... data to create a BoardLikeDisLike
     *   }
     * })
     * 
    **/
    create<T extends BoardLikeDisLikeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BoardLikeDisLikeCreateArgs<ExtArgs>>
    ): Prisma__BoardLikeDisLikeClient<$Result.GetResult<Prisma.$BoardLikeDisLikePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many BoardLikeDisLikes.
     *     @param {BoardLikeDisLikeCreateManyArgs} args - Arguments to create many BoardLikeDisLikes.
     *     @example
     *     // Create many BoardLikeDisLikes
     *     const boardLikeDisLike = await prisma.boardLikeDisLike.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BoardLikeDisLikeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BoardLikeDisLikeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BoardLikeDisLike.
     * @param {BoardLikeDisLikeDeleteArgs} args - Arguments to delete one BoardLikeDisLike.
     * @example
     * // Delete one BoardLikeDisLike
     * const BoardLikeDisLike = await prisma.boardLikeDisLike.delete({
     *   where: {
     *     // ... filter to delete one BoardLikeDisLike
     *   }
     * })
     * 
    **/
    delete<T extends BoardLikeDisLikeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BoardLikeDisLikeDeleteArgs<ExtArgs>>
    ): Prisma__BoardLikeDisLikeClient<$Result.GetResult<Prisma.$BoardLikeDisLikePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one BoardLikeDisLike.
     * @param {BoardLikeDisLikeUpdateArgs} args - Arguments to update one BoardLikeDisLike.
     * @example
     * // Update one BoardLikeDisLike
     * const boardLikeDisLike = await prisma.boardLikeDisLike.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BoardLikeDisLikeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BoardLikeDisLikeUpdateArgs<ExtArgs>>
    ): Prisma__BoardLikeDisLikeClient<$Result.GetResult<Prisma.$BoardLikeDisLikePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more BoardLikeDisLikes.
     * @param {BoardLikeDisLikeDeleteManyArgs} args - Arguments to filter BoardLikeDisLikes to delete.
     * @example
     * // Delete a few BoardLikeDisLikes
     * const { count } = await prisma.boardLikeDisLike.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BoardLikeDisLikeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BoardLikeDisLikeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BoardLikeDisLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardLikeDisLikeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BoardLikeDisLikes
     * const boardLikeDisLike = await prisma.boardLikeDisLike.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BoardLikeDisLikeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BoardLikeDisLikeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BoardLikeDisLike.
     * @param {BoardLikeDisLikeUpsertArgs} args - Arguments to update or create a BoardLikeDisLike.
     * @example
     * // Update or create a BoardLikeDisLike
     * const boardLikeDisLike = await prisma.boardLikeDisLike.upsert({
     *   create: {
     *     // ... data to create a BoardLikeDisLike
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BoardLikeDisLike we want to update
     *   }
     * })
    **/
    upsert<T extends BoardLikeDisLikeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BoardLikeDisLikeUpsertArgs<ExtArgs>>
    ): Prisma__BoardLikeDisLikeClient<$Result.GetResult<Prisma.$BoardLikeDisLikePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of BoardLikeDisLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardLikeDisLikeCountArgs} args - Arguments to filter BoardLikeDisLikes to count.
     * @example
     * // Count the number of BoardLikeDisLikes
     * const count = await prisma.boardLikeDisLike.count({
     *   where: {
     *     // ... the filter for the BoardLikeDisLikes we want to count
     *   }
     * })
    **/
    count<T extends BoardLikeDisLikeCountArgs>(
      args?: Subset<T, BoardLikeDisLikeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BoardLikeDisLikeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BoardLikeDisLike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardLikeDisLikeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BoardLikeDisLikeAggregateArgs>(args: Subset<T, BoardLikeDisLikeAggregateArgs>): Prisma.PrismaPromise<GetBoardLikeDisLikeAggregateType<T>>

    /**
     * Group by BoardLikeDisLike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardLikeDisLikeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BoardLikeDisLikeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BoardLikeDisLikeGroupByArgs['orderBy'] }
        : { orderBy?: BoardLikeDisLikeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BoardLikeDisLikeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBoardLikeDisLikeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BoardLikeDisLike model
   */
  readonly fields: BoardLikeDisLikeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BoardLikeDisLike.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BoardLikeDisLikeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    board<T extends BoardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BoardDefaultArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the BoardLikeDisLike model
   */ 
  interface BoardLikeDisLikeFieldRefs {
    readonly id: FieldRef<"BoardLikeDisLike", 'Int'>
    readonly type: FieldRef<"BoardLikeDisLike", 'String'>
    readonly createdAt: FieldRef<"BoardLikeDisLike", 'DateTime'>
    readonly userId: FieldRef<"BoardLikeDisLike", 'String'>
    readonly boardId: FieldRef<"BoardLikeDisLike", 'String'>
  }
    

  // Custom InputTypes

  /**
   * BoardLikeDisLike findUnique
   */
  export type BoardLikeDisLikeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoardLikeDisLike
     */
    select?: BoardLikeDisLikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardLikeDisLikeInclude<ExtArgs> | null
    /**
     * Filter, which BoardLikeDisLike to fetch.
     */
    where: BoardLikeDisLikeWhereUniqueInput
  }


  /**
   * BoardLikeDisLike findUniqueOrThrow
   */
  export type BoardLikeDisLikeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoardLikeDisLike
     */
    select?: BoardLikeDisLikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardLikeDisLikeInclude<ExtArgs> | null
    /**
     * Filter, which BoardLikeDisLike to fetch.
     */
    where: BoardLikeDisLikeWhereUniqueInput
  }


  /**
   * BoardLikeDisLike findFirst
   */
  export type BoardLikeDisLikeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoardLikeDisLike
     */
    select?: BoardLikeDisLikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardLikeDisLikeInclude<ExtArgs> | null
    /**
     * Filter, which BoardLikeDisLike to fetch.
     */
    where?: BoardLikeDisLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoardLikeDisLikes to fetch.
     */
    orderBy?: BoardLikeDisLikeOrderByWithRelationInput | BoardLikeDisLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BoardLikeDisLikes.
     */
    cursor?: BoardLikeDisLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoardLikeDisLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoardLikeDisLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BoardLikeDisLikes.
     */
    distinct?: BoardLikeDisLikeScalarFieldEnum | BoardLikeDisLikeScalarFieldEnum[]
  }


  /**
   * BoardLikeDisLike findFirstOrThrow
   */
  export type BoardLikeDisLikeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoardLikeDisLike
     */
    select?: BoardLikeDisLikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardLikeDisLikeInclude<ExtArgs> | null
    /**
     * Filter, which BoardLikeDisLike to fetch.
     */
    where?: BoardLikeDisLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoardLikeDisLikes to fetch.
     */
    orderBy?: BoardLikeDisLikeOrderByWithRelationInput | BoardLikeDisLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BoardLikeDisLikes.
     */
    cursor?: BoardLikeDisLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoardLikeDisLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoardLikeDisLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BoardLikeDisLikes.
     */
    distinct?: BoardLikeDisLikeScalarFieldEnum | BoardLikeDisLikeScalarFieldEnum[]
  }


  /**
   * BoardLikeDisLike findMany
   */
  export type BoardLikeDisLikeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoardLikeDisLike
     */
    select?: BoardLikeDisLikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardLikeDisLikeInclude<ExtArgs> | null
    /**
     * Filter, which BoardLikeDisLikes to fetch.
     */
    where?: BoardLikeDisLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoardLikeDisLikes to fetch.
     */
    orderBy?: BoardLikeDisLikeOrderByWithRelationInput | BoardLikeDisLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BoardLikeDisLikes.
     */
    cursor?: BoardLikeDisLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoardLikeDisLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoardLikeDisLikes.
     */
    skip?: number
    distinct?: BoardLikeDisLikeScalarFieldEnum | BoardLikeDisLikeScalarFieldEnum[]
  }


  /**
   * BoardLikeDisLike create
   */
  export type BoardLikeDisLikeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoardLikeDisLike
     */
    select?: BoardLikeDisLikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardLikeDisLikeInclude<ExtArgs> | null
    /**
     * The data needed to create a BoardLikeDisLike.
     */
    data: XOR<BoardLikeDisLikeCreateInput, BoardLikeDisLikeUncheckedCreateInput>
  }


  /**
   * BoardLikeDisLike createMany
   */
  export type BoardLikeDisLikeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BoardLikeDisLikes.
     */
    data: BoardLikeDisLikeCreateManyInput | BoardLikeDisLikeCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * BoardLikeDisLike update
   */
  export type BoardLikeDisLikeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoardLikeDisLike
     */
    select?: BoardLikeDisLikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardLikeDisLikeInclude<ExtArgs> | null
    /**
     * The data needed to update a BoardLikeDisLike.
     */
    data: XOR<BoardLikeDisLikeUpdateInput, BoardLikeDisLikeUncheckedUpdateInput>
    /**
     * Choose, which BoardLikeDisLike to update.
     */
    where: BoardLikeDisLikeWhereUniqueInput
  }


  /**
   * BoardLikeDisLike updateMany
   */
  export type BoardLikeDisLikeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BoardLikeDisLikes.
     */
    data: XOR<BoardLikeDisLikeUpdateManyMutationInput, BoardLikeDisLikeUncheckedUpdateManyInput>
    /**
     * Filter which BoardLikeDisLikes to update
     */
    where?: BoardLikeDisLikeWhereInput
  }


  /**
   * BoardLikeDisLike upsert
   */
  export type BoardLikeDisLikeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoardLikeDisLike
     */
    select?: BoardLikeDisLikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardLikeDisLikeInclude<ExtArgs> | null
    /**
     * The filter to search for the BoardLikeDisLike to update in case it exists.
     */
    where: BoardLikeDisLikeWhereUniqueInput
    /**
     * In case the BoardLikeDisLike found by the `where` argument doesn't exist, create a new BoardLikeDisLike with this data.
     */
    create: XOR<BoardLikeDisLikeCreateInput, BoardLikeDisLikeUncheckedCreateInput>
    /**
     * In case the BoardLikeDisLike was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BoardLikeDisLikeUpdateInput, BoardLikeDisLikeUncheckedUpdateInput>
  }


  /**
   * BoardLikeDisLike delete
   */
  export type BoardLikeDisLikeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoardLikeDisLike
     */
    select?: BoardLikeDisLikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardLikeDisLikeInclude<ExtArgs> | null
    /**
     * Filter which BoardLikeDisLike to delete.
     */
    where: BoardLikeDisLikeWhereUniqueInput
  }


  /**
   * BoardLikeDisLike deleteMany
   */
  export type BoardLikeDisLikeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BoardLikeDisLikes to delete
     */
    where?: BoardLikeDisLikeWhereInput
  }


  /**
   * BoardLikeDisLike without action
   */
  export type BoardLikeDisLikeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoardLikeDisLike
     */
    select?: BoardLikeDisLikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardLikeDisLikeInclude<ExtArgs> | null
  }



  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    price: number | null
    latitude: number | null
    longitude: number | null
    views: number | null
  }

  export type ProductSumAggregateOutputType = {
    price: number | null
    latitude: number | null
    longitude: number | null
    views: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    userId: string | null
    price: number | null
    latitude: number | null
    longitude: number | null
    address: string | null
    addressDetail: string | null
    createdAt: Date | null
    updatedAt: Date | null
    sold: boolean | null
    views: number | null
    delivery: boolean | null
    faceToFace: boolean | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    userId: string | null
    price: number | null
    latitude: number | null
    longitude: number | null
    address: string | null
    addressDetail: string | null
    createdAt: Date | null
    updatedAt: Date | null
    sold: boolean | null
    views: number | null
    delivery: boolean | null
    faceToFace: boolean | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    title: number
    description: number
    imageSrc: number
    userId: number
    price: number
    latitude: number
    longitude: number
    address: number
    addressDetail: number
    createdAt: number
    updatedAt: number
    sold: number
    views: number
    delivery: number
    faceToFace: number
    categories: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    price?: true
    latitude?: true
    longitude?: true
    views?: true
  }

  export type ProductSumAggregateInputType = {
    price?: true
    latitude?: true
    longitude?: true
    views?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    userId?: true
    price?: true
    latitude?: true
    longitude?: true
    address?: true
    addressDetail?: true
    createdAt?: true
    updatedAt?: true
    sold?: true
    views?: true
    delivery?: true
    faceToFace?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    userId?: true
    price?: true
    latitude?: true
    longitude?: true
    address?: true
    addressDetail?: true
    createdAt?: true
    updatedAt?: true
    sold?: true
    views?: true
    delivery?: true
    faceToFace?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    imageSrc?: true
    userId?: true
    price?: true
    latitude?: true
    longitude?: true
    address?: true
    addressDetail?: true
    createdAt?: true
    updatedAt?: true
    sold?: true
    views?: true
    delivery?: true
    faceToFace?: true
    categories?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    title: string
    description: string
    imageSrc: string[]
    userId: string
    price: number
    latitude: number | null
    longitude: number | null
    address: string | null
    addressDetail: string | null
    createdAt: Date
    updatedAt: Date
    sold: boolean
    views: number
    delivery: boolean
    faceToFace: boolean
    categories: string[]
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    imageSrc?: boolean
    userId?: boolean
    price?: boolean
    latitude?: boolean
    longitude?: boolean
    address?: boolean
    addressDetail?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sold?: boolean
    views?: boolean
    delivery?: boolean
    faceToFace?: boolean
    categories?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    ViewdProductStore?: boolean | Product$ViewdProductStoreArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    imageSrc?: boolean
    userId?: boolean
    price?: boolean
    latitude?: boolean
    longitude?: boolean
    address?: boolean
    addressDetail?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sold?: boolean
    views?: boolean
    delivery?: boolean
    faceToFace?: boolean
    categories?: boolean
  }

  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    ViewdProductStore?: boolean | Product$ViewdProductStoreArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      ViewdProductStore: Prisma.$ViewdProductStorePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      imageSrc: string[]
      userId: string
      price: number
      latitude: number | null
      longitude: number | null
      address: string | null
      addressDetail: string | null
      createdAt: Date
      updatedAt: Date
      sold: boolean
      views: number
      delivery: boolean
      faceToFace: boolean
      categories: string[]
    }, ExtArgs["result"]["product"]>
    composites: {}
  }


  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductFindManyArgs, 'select' | 'include'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Product that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProductFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
    **/
    create<T extends ProductCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductCreateArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Products.
     *     @param {ProductCreateManyArgs} args - Arguments to create many Products.
     *     @example
     *     // Create many Products
     *     const product = await prisma.product.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProductCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
    **/
    delete<T extends ProductDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
    **/
    upsert<T extends ProductUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    ViewdProductStore<T extends Product$ViewdProductStoreArgs<ExtArgs> = {}>(args?: Subset<T, Product$ViewdProductStoreArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewdProductStorePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Product model
   */ 
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly title: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly imageSrc: FieldRef<"Product", 'String[]'>
    readonly userId: FieldRef<"Product", 'String'>
    readonly price: FieldRef<"Product", 'Int'>
    readonly latitude: FieldRef<"Product", 'Float'>
    readonly longitude: FieldRef<"Product", 'Float'>
    readonly address: FieldRef<"Product", 'String'>
    readonly addressDetail: FieldRef<"Product", 'String'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
    readonly sold: FieldRef<"Product", 'Boolean'>
    readonly views: FieldRef<"Product", 'Int'>
    readonly delivery: FieldRef<"Product", 'Boolean'>
    readonly faceToFace: FieldRef<"Product", 'Boolean'>
    readonly categories: FieldRef<"Product", 'String[]'>
  }
    

  // Custom InputTypes

  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }


  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
  }


  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }


  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
  }


  /**
   * Product.ViewdProductStore
   */
  export type Product$ViewdProductStoreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewdProductStore
     */
    select?: ViewdProductStoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ViewdProductStoreInclude<ExtArgs> | null
    where?: ViewdProductStoreWhereInput
    orderBy?: ViewdProductStoreOrderByWithRelationInput | ViewdProductStoreOrderByWithRelationInput[]
    cursor?: ViewdProductStoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ViewdProductStoreScalarFieldEnum | ViewdProductStoreScalarFieldEnum[]
  }


  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
  }



  /**
   * Model ViewdBoardStore
   */

  export type AggregateViewdBoardStore = {
    _count: ViewdBoardStoreCountAggregateOutputType | null
    _min: ViewdBoardStoreMinAggregateOutputType | null
    _max: ViewdBoardStoreMaxAggregateOutputType | null
  }

  export type ViewdBoardStoreMinAggregateOutputType = {
    id: string | null
    userId: string | null
    boardId: string | null
    viewedAt: Date | null
  }

  export type ViewdBoardStoreMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    boardId: string | null
    viewedAt: Date | null
  }

  export type ViewdBoardStoreCountAggregateOutputType = {
    id: number
    userId: number
    boardId: number
    viewedAt: number
    _all: number
  }


  export type ViewdBoardStoreMinAggregateInputType = {
    id?: true
    userId?: true
    boardId?: true
    viewedAt?: true
  }

  export type ViewdBoardStoreMaxAggregateInputType = {
    id?: true
    userId?: true
    boardId?: true
    viewedAt?: true
  }

  export type ViewdBoardStoreCountAggregateInputType = {
    id?: true
    userId?: true
    boardId?: true
    viewedAt?: true
    _all?: true
  }

  export type ViewdBoardStoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ViewdBoardStore to aggregate.
     */
    where?: ViewdBoardStoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ViewdBoardStores to fetch.
     */
    orderBy?: ViewdBoardStoreOrderByWithRelationInput | ViewdBoardStoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ViewdBoardStoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ViewdBoardStores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ViewdBoardStores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ViewdBoardStores
    **/
    _count?: true | ViewdBoardStoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ViewdBoardStoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ViewdBoardStoreMaxAggregateInputType
  }

  export type GetViewdBoardStoreAggregateType<T extends ViewdBoardStoreAggregateArgs> = {
        [P in keyof T & keyof AggregateViewdBoardStore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateViewdBoardStore[P]>
      : GetScalarType<T[P], AggregateViewdBoardStore[P]>
  }




  export type ViewdBoardStoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViewdBoardStoreWhereInput
    orderBy?: ViewdBoardStoreOrderByWithAggregationInput | ViewdBoardStoreOrderByWithAggregationInput[]
    by: ViewdBoardStoreScalarFieldEnum[] | ViewdBoardStoreScalarFieldEnum
    having?: ViewdBoardStoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ViewdBoardStoreCountAggregateInputType | true
    _min?: ViewdBoardStoreMinAggregateInputType
    _max?: ViewdBoardStoreMaxAggregateInputType
  }

  export type ViewdBoardStoreGroupByOutputType = {
    id: string
    userId: string
    boardId: string
    viewedAt: Date
    _count: ViewdBoardStoreCountAggregateOutputType | null
    _min: ViewdBoardStoreMinAggregateOutputType | null
    _max: ViewdBoardStoreMaxAggregateOutputType | null
  }

  type GetViewdBoardStoreGroupByPayload<T extends ViewdBoardStoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ViewdBoardStoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ViewdBoardStoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ViewdBoardStoreGroupByOutputType[P]>
            : GetScalarType<T[P], ViewdBoardStoreGroupByOutputType[P]>
        }
      >
    >


  export type ViewdBoardStoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    boardId?: boolean
    viewedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    board?: boolean | BoardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["viewdBoardStore"]>

  export type ViewdBoardStoreSelectScalar = {
    id?: boolean
    userId?: boolean
    boardId?: boolean
    viewedAt?: boolean
  }

  export type ViewdBoardStoreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    board?: boolean | BoardDefaultArgs<ExtArgs>
  }


  export type $ViewdBoardStorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ViewdBoardStore"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      board: Prisma.$BoardPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      boardId: string
      viewedAt: Date
    }, ExtArgs["result"]["viewdBoardStore"]>
    composites: {}
  }


  type ViewdBoardStoreGetPayload<S extends boolean | null | undefined | ViewdBoardStoreDefaultArgs> = $Result.GetResult<Prisma.$ViewdBoardStorePayload, S>

  type ViewdBoardStoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ViewdBoardStoreFindManyArgs, 'select' | 'include'> & {
      select?: ViewdBoardStoreCountAggregateInputType | true
    }

  export interface ViewdBoardStoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ViewdBoardStore'], meta: { name: 'ViewdBoardStore' } }
    /**
     * Find zero or one ViewdBoardStore that matches the filter.
     * @param {ViewdBoardStoreFindUniqueArgs} args - Arguments to find a ViewdBoardStore
     * @example
     * // Get one ViewdBoardStore
     * const viewdBoardStore = await prisma.viewdBoardStore.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ViewdBoardStoreFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ViewdBoardStoreFindUniqueArgs<ExtArgs>>
    ): Prisma__ViewdBoardStoreClient<$Result.GetResult<Prisma.$ViewdBoardStorePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ViewdBoardStore that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ViewdBoardStoreFindUniqueOrThrowArgs} args - Arguments to find a ViewdBoardStore
     * @example
     * // Get one ViewdBoardStore
     * const viewdBoardStore = await prisma.viewdBoardStore.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ViewdBoardStoreFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ViewdBoardStoreFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ViewdBoardStoreClient<$Result.GetResult<Prisma.$ViewdBoardStorePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ViewdBoardStore that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewdBoardStoreFindFirstArgs} args - Arguments to find a ViewdBoardStore
     * @example
     * // Get one ViewdBoardStore
     * const viewdBoardStore = await prisma.viewdBoardStore.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ViewdBoardStoreFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ViewdBoardStoreFindFirstArgs<ExtArgs>>
    ): Prisma__ViewdBoardStoreClient<$Result.GetResult<Prisma.$ViewdBoardStorePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ViewdBoardStore that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewdBoardStoreFindFirstOrThrowArgs} args - Arguments to find a ViewdBoardStore
     * @example
     * // Get one ViewdBoardStore
     * const viewdBoardStore = await prisma.viewdBoardStore.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ViewdBoardStoreFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ViewdBoardStoreFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ViewdBoardStoreClient<$Result.GetResult<Prisma.$ViewdBoardStorePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ViewdBoardStores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewdBoardStoreFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ViewdBoardStores
     * const viewdBoardStores = await prisma.viewdBoardStore.findMany()
     * 
     * // Get first 10 ViewdBoardStores
     * const viewdBoardStores = await prisma.viewdBoardStore.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const viewdBoardStoreWithIdOnly = await prisma.viewdBoardStore.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ViewdBoardStoreFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ViewdBoardStoreFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewdBoardStorePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ViewdBoardStore.
     * @param {ViewdBoardStoreCreateArgs} args - Arguments to create a ViewdBoardStore.
     * @example
     * // Create one ViewdBoardStore
     * const ViewdBoardStore = await prisma.viewdBoardStore.create({
     *   data: {
     *     // ... data to create a ViewdBoardStore
     *   }
     * })
     * 
    **/
    create<T extends ViewdBoardStoreCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ViewdBoardStoreCreateArgs<ExtArgs>>
    ): Prisma__ViewdBoardStoreClient<$Result.GetResult<Prisma.$ViewdBoardStorePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ViewdBoardStores.
     *     @param {ViewdBoardStoreCreateManyArgs} args - Arguments to create many ViewdBoardStores.
     *     @example
     *     // Create many ViewdBoardStores
     *     const viewdBoardStore = await prisma.viewdBoardStore.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ViewdBoardStoreCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ViewdBoardStoreCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ViewdBoardStore.
     * @param {ViewdBoardStoreDeleteArgs} args - Arguments to delete one ViewdBoardStore.
     * @example
     * // Delete one ViewdBoardStore
     * const ViewdBoardStore = await prisma.viewdBoardStore.delete({
     *   where: {
     *     // ... filter to delete one ViewdBoardStore
     *   }
     * })
     * 
    **/
    delete<T extends ViewdBoardStoreDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ViewdBoardStoreDeleteArgs<ExtArgs>>
    ): Prisma__ViewdBoardStoreClient<$Result.GetResult<Prisma.$ViewdBoardStorePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ViewdBoardStore.
     * @param {ViewdBoardStoreUpdateArgs} args - Arguments to update one ViewdBoardStore.
     * @example
     * // Update one ViewdBoardStore
     * const viewdBoardStore = await prisma.viewdBoardStore.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ViewdBoardStoreUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ViewdBoardStoreUpdateArgs<ExtArgs>>
    ): Prisma__ViewdBoardStoreClient<$Result.GetResult<Prisma.$ViewdBoardStorePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ViewdBoardStores.
     * @param {ViewdBoardStoreDeleteManyArgs} args - Arguments to filter ViewdBoardStores to delete.
     * @example
     * // Delete a few ViewdBoardStores
     * const { count } = await prisma.viewdBoardStore.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ViewdBoardStoreDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ViewdBoardStoreDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ViewdBoardStores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewdBoardStoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ViewdBoardStores
     * const viewdBoardStore = await prisma.viewdBoardStore.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ViewdBoardStoreUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ViewdBoardStoreUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ViewdBoardStore.
     * @param {ViewdBoardStoreUpsertArgs} args - Arguments to update or create a ViewdBoardStore.
     * @example
     * // Update or create a ViewdBoardStore
     * const viewdBoardStore = await prisma.viewdBoardStore.upsert({
     *   create: {
     *     // ... data to create a ViewdBoardStore
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ViewdBoardStore we want to update
     *   }
     * })
    **/
    upsert<T extends ViewdBoardStoreUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ViewdBoardStoreUpsertArgs<ExtArgs>>
    ): Prisma__ViewdBoardStoreClient<$Result.GetResult<Prisma.$ViewdBoardStorePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ViewdBoardStores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewdBoardStoreCountArgs} args - Arguments to filter ViewdBoardStores to count.
     * @example
     * // Count the number of ViewdBoardStores
     * const count = await prisma.viewdBoardStore.count({
     *   where: {
     *     // ... the filter for the ViewdBoardStores we want to count
     *   }
     * })
    **/
    count<T extends ViewdBoardStoreCountArgs>(
      args?: Subset<T, ViewdBoardStoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ViewdBoardStoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ViewdBoardStore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewdBoardStoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ViewdBoardStoreAggregateArgs>(args: Subset<T, ViewdBoardStoreAggregateArgs>): Prisma.PrismaPromise<GetViewdBoardStoreAggregateType<T>>

    /**
     * Group by ViewdBoardStore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewdBoardStoreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ViewdBoardStoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ViewdBoardStoreGroupByArgs['orderBy'] }
        : { orderBy?: ViewdBoardStoreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ViewdBoardStoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetViewdBoardStoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ViewdBoardStore model
   */
  readonly fields: ViewdBoardStoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ViewdBoardStore.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ViewdBoardStoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    board<T extends BoardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BoardDefaultArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ViewdBoardStore model
   */ 
  interface ViewdBoardStoreFieldRefs {
    readonly id: FieldRef<"ViewdBoardStore", 'String'>
    readonly userId: FieldRef<"ViewdBoardStore", 'String'>
    readonly boardId: FieldRef<"ViewdBoardStore", 'String'>
    readonly viewedAt: FieldRef<"ViewdBoardStore", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * ViewdBoardStore findUnique
   */
  export type ViewdBoardStoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewdBoardStore
     */
    select?: ViewdBoardStoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ViewdBoardStoreInclude<ExtArgs> | null
    /**
     * Filter, which ViewdBoardStore to fetch.
     */
    where: ViewdBoardStoreWhereUniqueInput
  }


  /**
   * ViewdBoardStore findUniqueOrThrow
   */
  export type ViewdBoardStoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewdBoardStore
     */
    select?: ViewdBoardStoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ViewdBoardStoreInclude<ExtArgs> | null
    /**
     * Filter, which ViewdBoardStore to fetch.
     */
    where: ViewdBoardStoreWhereUniqueInput
  }


  /**
   * ViewdBoardStore findFirst
   */
  export type ViewdBoardStoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewdBoardStore
     */
    select?: ViewdBoardStoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ViewdBoardStoreInclude<ExtArgs> | null
    /**
     * Filter, which ViewdBoardStore to fetch.
     */
    where?: ViewdBoardStoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ViewdBoardStores to fetch.
     */
    orderBy?: ViewdBoardStoreOrderByWithRelationInput | ViewdBoardStoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ViewdBoardStores.
     */
    cursor?: ViewdBoardStoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ViewdBoardStores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ViewdBoardStores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ViewdBoardStores.
     */
    distinct?: ViewdBoardStoreScalarFieldEnum | ViewdBoardStoreScalarFieldEnum[]
  }


  /**
   * ViewdBoardStore findFirstOrThrow
   */
  export type ViewdBoardStoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewdBoardStore
     */
    select?: ViewdBoardStoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ViewdBoardStoreInclude<ExtArgs> | null
    /**
     * Filter, which ViewdBoardStore to fetch.
     */
    where?: ViewdBoardStoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ViewdBoardStores to fetch.
     */
    orderBy?: ViewdBoardStoreOrderByWithRelationInput | ViewdBoardStoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ViewdBoardStores.
     */
    cursor?: ViewdBoardStoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ViewdBoardStores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ViewdBoardStores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ViewdBoardStores.
     */
    distinct?: ViewdBoardStoreScalarFieldEnum | ViewdBoardStoreScalarFieldEnum[]
  }


  /**
   * ViewdBoardStore findMany
   */
  export type ViewdBoardStoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewdBoardStore
     */
    select?: ViewdBoardStoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ViewdBoardStoreInclude<ExtArgs> | null
    /**
     * Filter, which ViewdBoardStores to fetch.
     */
    where?: ViewdBoardStoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ViewdBoardStores to fetch.
     */
    orderBy?: ViewdBoardStoreOrderByWithRelationInput | ViewdBoardStoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ViewdBoardStores.
     */
    cursor?: ViewdBoardStoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ViewdBoardStores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ViewdBoardStores.
     */
    skip?: number
    distinct?: ViewdBoardStoreScalarFieldEnum | ViewdBoardStoreScalarFieldEnum[]
  }


  /**
   * ViewdBoardStore create
   */
  export type ViewdBoardStoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewdBoardStore
     */
    select?: ViewdBoardStoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ViewdBoardStoreInclude<ExtArgs> | null
    /**
     * The data needed to create a ViewdBoardStore.
     */
    data: XOR<ViewdBoardStoreCreateInput, ViewdBoardStoreUncheckedCreateInput>
  }


  /**
   * ViewdBoardStore createMany
   */
  export type ViewdBoardStoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ViewdBoardStores.
     */
    data: ViewdBoardStoreCreateManyInput | ViewdBoardStoreCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ViewdBoardStore update
   */
  export type ViewdBoardStoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewdBoardStore
     */
    select?: ViewdBoardStoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ViewdBoardStoreInclude<ExtArgs> | null
    /**
     * The data needed to update a ViewdBoardStore.
     */
    data: XOR<ViewdBoardStoreUpdateInput, ViewdBoardStoreUncheckedUpdateInput>
    /**
     * Choose, which ViewdBoardStore to update.
     */
    where: ViewdBoardStoreWhereUniqueInput
  }


  /**
   * ViewdBoardStore updateMany
   */
  export type ViewdBoardStoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ViewdBoardStores.
     */
    data: XOR<ViewdBoardStoreUpdateManyMutationInput, ViewdBoardStoreUncheckedUpdateManyInput>
    /**
     * Filter which ViewdBoardStores to update
     */
    where?: ViewdBoardStoreWhereInput
  }


  /**
   * ViewdBoardStore upsert
   */
  export type ViewdBoardStoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewdBoardStore
     */
    select?: ViewdBoardStoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ViewdBoardStoreInclude<ExtArgs> | null
    /**
     * The filter to search for the ViewdBoardStore to update in case it exists.
     */
    where: ViewdBoardStoreWhereUniqueInput
    /**
     * In case the ViewdBoardStore found by the `where` argument doesn't exist, create a new ViewdBoardStore with this data.
     */
    create: XOR<ViewdBoardStoreCreateInput, ViewdBoardStoreUncheckedCreateInput>
    /**
     * In case the ViewdBoardStore was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ViewdBoardStoreUpdateInput, ViewdBoardStoreUncheckedUpdateInput>
  }


  /**
   * ViewdBoardStore delete
   */
  export type ViewdBoardStoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewdBoardStore
     */
    select?: ViewdBoardStoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ViewdBoardStoreInclude<ExtArgs> | null
    /**
     * Filter which ViewdBoardStore to delete.
     */
    where: ViewdBoardStoreWhereUniqueInput
  }


  /**
   * ViewdBoardStore deleteMany
   */
  export type ViewdBoardStoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ViewdBoardStores to delete
     */
    where?: ViewdBoardStoreWhereInput
  }


  /**
   * ViewdBoardStore without action
   */
  export type ViewdBoardStoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewdBoardStore
     */
    select?: ViewdBoardStoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ViewdBoardStoreInclude<ExtArgs> | null
  }



  /**
   * Model ViewdProductStore
   */

  export type AggregateViewdProductStore = {
    _count: ViewdProductStoreCountAggregateOutputType | null
    _min: ViewdProductStoreMinAggregateOutputType | null
    _max: ViewdProductStoreMaxAggregateOutputType | null
  }

  export type ViewdProductStoreMinAggregateOutputType = {
    id: string | null
    userId: string | null
    productId: string | null
    viewedAt: Date | null
  }

  export type ViewdProductStoreMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    productId: string | null
    viewedAt: Date | null
  }

  export type ViewdProductStoreCountAggregateOutputType = {
    id: number
    userId: number
    productId: number
    viewedAt: number
    _all: number
  }


  export type ViewdProductStoreMinAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    viewedAt?: true
  }

  export type ViewdProductStoreMaxAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    viewedAt?: true
  }

  export type ViewdProductStoreCountAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    viewedAt?: true
    _all?: true
  }

  export type ViewdProductStoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ViewdProductStore to aggregate.
     */
    where?: ViewdProductStoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ViewdProductStores to fetch.
     */
    orderBy?: ViewdProductStoreOrderByWithRelationInput | ViewdProductStoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ViewdProductStoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ViewdProductStores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ViewdProductStores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ViewdProductStores
    **/
    _count?: true | ViewdProductStoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ViewdProductStoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ViewdProductStoreMaxAggregateInputType
  }

  export type GetViewdProductStoreAggregateType<T extends ViewdProductStoreAggregateArgs> = {
        [P in keyof T & keyof AggregateViewdProductStore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateViewdProductStore[P]>
      : GetScalarType<T[P], AggregateViewdProductStore[P]>
  }




  export type ViewdProductStoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViewdProductStoreWhereInput
    orderBy?: ViewdProductStoreOrderByWithAggregationInput | ViewdProductStoreOrderByWithAggregationInput[]
    by: ViewdProductStoreScalarFieldEnum[] | ViewdProductStoreScalarFieldEnum
    having?: ViewdProductStoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ViewdProductStoreCountAggregateInputType | true
    _min?: ViewdProductStoreMinAggregateInputType
    _max?: ViewdProductStoreMaxAggregateInputType
  }

  export type ViewdProductStoreGroupByOutputType = {
    id: string
    userId: string
    productId: string
    viewedAt: Date
    _count: ViewdProductStoreCountAggregateOutputType | null
    _min: ViewdProductStoreMinAggregateOutputType | null
    _max: ViewdProductStoreMaxAggregateOutputType | null
  }

  type GetViewdProductStoreGroupByPayload<T extends ViewdProductStoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ViewdProductStoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ViewdProductStoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ViewdProductStoreGroupByOutputType[P]>
            : GetScalarType<T[P], ViewdProductStoreGroupByOutputType[P]>
        }
      >
    >


  export type ViewdProductStoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    productId?: boolean
    viewedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["viewdProductStore"]>

  export type ViewdProductStoreSelectScalar = {
    id?: boolean
    userId?: boolean
    productId?: boolean
    viewedAt?: boolean
  }

  export type ViewdProductStoreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }


  export type $ViewdProductStorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ViewdProductStore"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      productId: string
      viewedAt: Date
    }, ExtArgs["result"]["viewdProductStore"]>
    composites: {}
  }


  type ViewdProductStoreGetPayload<S extends boolean | null | undefined | ViewdProductStoreDefaultArgs> = $Result.GetResult<Prisma.$ViewdProductStorePayload, S>

  type ViewdProductStoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ViewdProductStoreFindManyArgs, 'select' | 'include'> & {
      select?: ViewdProductStoreCountAggregateInputType | true
    }

  export interface ViewdProductStoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ViewdProductStore'], meta: { name: 'ViewdProductStore' } }
    /**
     * Find zero or one ViewdProductStore that matches the filter.
     * @param {ViewdProductStoreFindUniqueArgs} args - Arguments to find a ViewdProductStore
     * @example
     * // Get one ViewdProductStore
     * const viewdProductStore = await prisma.viewdProductStore.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ViewdProductStoreFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ViewdProductStoreFindUniqueArgs<ExtArgs>>
    ): Prisma__ViewdProductStoreClient<$Result.GetResult<Prisma.$ViewdProductStorePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ViewdProductStore that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ViewdProductStoreFindUniqueOrThrowArgs} args - Arguments to find a ViewdProductStore
     * @example
     * // Get one ViewdProductStore
     * const viewdProductStore = await prisma.viewdProductStore.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ViewdProductStoreFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ViewdProductStoreFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ViewdProductStoreClient<$Result.GetResult<Prisma.$ViewdProductStorePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ViewdProductStore that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewdProductStoreFindFirstArgs} args - Arguments to find a ViewdProductStore
     * @example
     * // Get one ViewdProductStore
     * const viewdProductStore = await prisma.viewdProductStore.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ViewdProductStoreFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ViewdProductStoreFindFirstArgs<ExtArgs>>
    ): Prisma__ViewdProductStoreClient<$Result.GetResult<Prisma.$ViewdProductStorePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ViewdProductStore that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewdProductStoreFindFirstOrThrowArgs} args - Arguments to find a ViewdProductStore
     * @example
     * // Get one ViewdProductStore
     * const viewdProductStore = await prisma.viewdProductStore.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ViewdProductStoreFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ViewdProductStoreFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ViewdProductStoreClient<$Result.GetResult<Prisma.$ViewdProductStorePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ViewdProductStores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewdProductStoreFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ViewdProductStores
     * const viewdProductStores = await prisma.viewdProductStore.findMany()
     * 
     * // Get first 10 ViewdProductStores
     * const viewdProductStores = await prisma.viewdProductStore.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const viewdProductStoreWithIdOnly = await prisma.viewdProductStore.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ViewdProductStoreFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ViewdProductStoreFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewdProductStorePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ViewdProductStore.
     * @param {ViewdProductStoreCreateArgs} args - Arguments to create a ViewdProductStore.
     * @example
     * // Create one ViewdProductStore
     * const ViewdProductStore = await prisma.viewdProductStore.create({
     *   data: {
     *     // ... data to create a ViewdProductStore
     *   }
     * })
     * 
    **/
    create<T extends ViewdProductStoreCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ViewdProductStoreCreateArgs<ExtArgs>>
    ): Prisma__ViewdProductStoreClient<$Result.GetResult<Prisma.$ViewdProductStorePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ViewdProductStores.
     *     @param {ViewdProductStoreCreateManyArgs} args - Arguments to create many ViewdProductStores.
     *     @example
     *     // Create many ViewdProductStores
     *     const viewdProductStore = await prisma.viewdProductStore.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ViewdProductStoreCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ViewdProductStoreCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ViewdProductStore.
     * @param {ViewdProductStoreDeleteArgs} args - Arguments to delete one ViewdProductStore.
     * @example
     * // Delete one ViewdProductStore
     * const ViewdProductStore = await prisma.viewdProductStore.delete({
     *   where: {
     *     // ... filter to delete one ViewdProductStore
     *   }
     * })
     * 
    **/
    delete<T extends ViewdProductStoreDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ViewdProductStoreDeleteArgs<ExtArgs>>
    ): Prisma__ViewdProductStoreClient<$Result.GetResult<Prisma.$ViewdProductStorePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ViewdProductStore.
     * @param {ViewdProductStoreUpdateArgs} args - Arguments to update one ViewdProductStore.
     * @example
     * // Update one ViewdProductStore
     * const viewdProductStore = await prisma.viewdProductStore.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ViewdProductStoreUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ViewdProductStoreUpdateArgs<ExtArgs>>
    ): Prisma__ViewdProductStoreClient<$Result.GetResult<Prisma.$ViewdProductStorePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ViewdProductStores.
     * @param {ViewdProductStoreDeleteManyArgs} args - Arguments to filter ViewdProductStores to delete.
     * @example
     * // Delete a few ViewdProductStores
     * const { count } = await prisma.viewdProductStore.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ViewdProductStoreDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ViewdProductStoreDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ViewdProductStores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewdProductStoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ViewdProductStores
     * const viewdProductStore = await prisma.viewdProductStore.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ViewdProductStoreUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ViewdProductStoreUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ViewdProductStore.
     * @param {ViewdProductStoreUpsertArgs} args - Arguments to update or create a ViewdProductStore.
     * @example
     * // Update or create a ViewdProductStore
     * const viewdProductStore = await prisma.viewdProductStore.upsert({
     *   create: {
     *     // ... data to create a ViewdProductStore
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ViewdProductStore we want to update
     *   }
     * })
    **/
    upsert<T extends ViewdProductStoreUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ViewdProductStoreUpsertArgs<ExtArgs>>
    ): Prisma__ViewdProductStoreClient<$Result.GetResult<Prisma.$ViewdProductStorePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ViewdProductStores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewdProductStoreCountArgs} args - Arguments to filter ViewdProductStores to count.
     * @example
     * // Count the number of ViewdProductStores
     * const count = await prisma.viewdProductStore.count({
     *   where: {
     *     // ... the filter for the ViewdProductStores we want to count
     *   }
     * })
    **/
    count<T extends ViewdProductStoreCountArgs>(
      args?: Subset<T, ViewdProductStoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ViewdProductStoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ViewdProductStore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewdProductStoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ViewdProductStoreAggregateArgs>(args: Subset<T, ViewdProductStoreAggregateArgs>): Prisma.PrismaPromise<GetViewdProductStoreAggregateType<T>>

    /**
     * Group by ViewdProductStore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewdProductStoreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ViewdProductStoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ViewdProductStoreGroupByArgs['orderBy'] }
        : { orderBy?: ViewdProductStoreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ViewdProductStoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetViewdProductStoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ViewdProductStore model
   */
  readonly fields: ViewdProductStoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ViewdProductStore.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ViewdProductStoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ViewdProductStore model
   */ 
  interface ViewdProductStoreFieldRefs {
    readonly id: FieldRef<"ViewdProductStore", 'String'>
    readonly userId: FieldRef<"ViewdProductStore", 'String'>
    readonly productId: FieldRef<"ViewdProductStore", 'String'>
    readonly viewedAt: FieldRef<"ViewdProductStore", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * ViewdProductStore findUnique
   */
  export type ViewdProductStoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewdProductStore
     */
    select?: ViewdProductStoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ViewdProductStoreInclude<ExtArgs> | null
    /**
     * Filter, which ViewdProductStore to fetch.
     */
    where: ViewdProductStoreWhereUniqueInput
  }


  /**
   * ViewdProductStore findUniqueOrThrow
   */
  export type ViewdProductStoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewdProductStore
     */
    select?: ViewdProductStoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ViewdProductStoreInclude<ExtArgs> | null
    /**
     * Filter, which ViewdProductStore to fetch.
     */
    where: ViewdProductStoreWhereUniqueInput
  }


  /**
   * ViewdProductStore findFirst
   */
  export type ViewdProductStoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewdProductStore
     */
    select?: ViewdProductStoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ViewdProductStoreInclude<ExtArgs> | null
    /**
     * Filter, which ViewdProductStore to fetch.
     */
    where?: ViewdProductStoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ViewdProductStores to fetch.
     */
    orderBy?: ViewdProductStoreOrderByWithRelationInput | ViewdProductStoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ViewdProductStores.
     */
    cursor?: ViewdProductStoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ViewdProductStores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ViewdProductStores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ViewdProductStores.
     */
    distinct?: ViewdProductStoreScalarFieldEnum | ViewdProductStoreScalarFieldEnum[]
  }


  /**
   * ViewdProductStore findFirstOrThrow
   */
  export type ViewdProductStoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewdProductStore
     */
    select?: ViewdProductStoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ViewdProductStoreInclude<ExtArgs> | null
    /**
     * Filter, which ViewdProductStore to fetch.
     */
    where?: ViewdProductStoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ViewdProductStores to fetch.
     */
    orderBy?: ViewdProductStoreOrderByWithRelationInput | ViewdProductStoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ViewdProductStores.
     */
    cursor?: ViewdProductStoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ViewdProductStores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ViewdProductStores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ViewdProductStores.
     */
    distinct?: ViewdProductStoreScalarFieldEnum | ViewdProductStoreScalarFieldEnum[]
  }


  /**
   * ViewdProductStore findMany
   */
  export type ViewdProductStoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewdProductStore
     */
    select?: ViewdProductStoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ViewdProductStoreInclude<ExtArgs> | null
    /**
     * Filter, which ViewdProductStores to fetch.
     */
    where?: ViewdProductStoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ViewdProductStores to fetch.
     */
    orderBy?: ViewdProductStoreOrderByWithRelationInput | ViewdProductStoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ViewdProductStores.
     */
    cursor?: ViewdProductStoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ViewdProductStores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ViewdProductStores.
     */
    skip?: number
    distinct?: ViewdProductStoreScalarFieldEnum | ViewdProductStoreScalarFieldEnum[]
  }


  /**
   * ViewdProductStore create
   */
  export type ViewdProductStoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewdProductStore
     */
    select?: ViewdProductStoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ViewdProductStoreInclude<ExtArgs> | null
    /**
     * The data needed to create a ViewdProductStore.
     */
    data: XOR<ViewdProductStoreCreateInput, ViewdProductStoreUncheckedCreateInput>
  }


  /**
   * ViewdProductStore createMany
   */
  export type ViewdProductStoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ViewdProductStores.
     */
    data: ViewdProductStoreCreateManyInput | ViewdProductStoreCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ViewdProductStore update
   */
  export type ViewdProductStoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewdProductStore
     */
    select?: ViewdProductStoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ViewdProductStoreInclude<ExtArgs> | null
    /**
     * The data needed to update a ViewdProductStore.
     */
    data: XOR<ViewdProductStoreUpdateInput, ViewdProductStoreUncheckedUpdateInput>
    /**
     * Choose, which ViewdProductStore to update.
     */
    where: ViewdProductStoreWhereUniqueInput
  }


  /**
   * ViewdProductStore updateMany
   */
  export type ViewdProductStoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ViewdProductStores.
     */
    data: XOR<ViewdProductStoreUpdateManyMutationInput, ViewdProductStoreUncheckedUpdateManyInput>
    /**
     * Filter which ViewdProductStores to update
     */
    where?: ViewdProductStoreWhereInput
  }


  /**
   * ViewdProductStore upsert
   */
  export type ViewdProductStoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewdProductStore
     */
    select?: ViewdProductStoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ViewdProductStoreInclude<ExtArgs> | null
    /**
     * The filter to search for the ViewdProductStore to update in case it exists.
     */
    where: ViewdProductStoreWhereUniqueInput
    /**
     * In case the ViewdProductStore found by the `where` argument doesn't exist, create a new ViewdProductStore with this data.
     */
    create: XOR<ViewdProductStoreCreateInput, ViewdProductStoreUncheckedCreateInput>
    /**
     * In case the ViewdProductStore was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ViewdProductStoreUpdateInput, ViewdProductStoreUncheckedUpdateInput>
  }


  /**
   * ViewdProductStore delete
   */
  export type ViewdProductStoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewdProductStore
     */
    select?: ViewdProductStoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ViewdProductStoreInclude<ExtArgs> | null
    /**
     * Filter which ViewdProductStore to delete.
     */
    where: ViewdProductStoreWhereUniqueInput
  }


  /**
   * ViewdProductStore deleteMany
   */
  export type ViewdProductStoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ViewdProductStores to delete
     */
    where?: ViewdProductStoreWhereInput
  }


  /**
   * ViewdProductStore without action
   */
  export type ViewdProductStoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewdProductStore
     */
    select?: ViewdProductStoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ViewdProductStoreInclude<ExtArgs> | null
  }



  /**
   * Model Conversation
   */

  export type AggregateConversation = {
    _count: ConversationCountAggregateOutputType | null
    _min: ConversationMinAggregateOutputType | null
    _max: ConversationMaxAggregateOutputType | null
  }

  export type ConversationMinAggregateOutputType = {
    id: string | null
    name: string | null
    senderId: string | null
    receiverId: string | null
    createdAt: Date | null
  }

  export type ConversationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    senderId: string | null
    receiverId: string | null
    createdAt: Date | null
  }

  export type ConversationCountAggregateOutputType = {
    id: number
    name: number
    senderId: number
    receiverId: number
    createdAt: number
    _all: number
  }


  export type ConversationMinAggregateInputType = {
    id?: true
    name?: true
    senderId?: true
    receiverId?: true
    createdAt?: true
  }

  export type ConversationMaxAggregateInputType = {
    id?: true
    name?: true
    senderId?: true
    receiverId?: true
    createdAt?: true
  }

  export type ConversationCountAggregateInputType = {
    id?: true
    name?: true
    senderId?: true
    receiverId?: true
    createdAt?: true
    _all?: true
  }

  export type ConversationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conversation to aggregate.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Conversations
    **/
    _count?: true | ConversationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConversationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConversationMaxAggregateInputType
  }

  export type GetConversationAggregateType<T extends ConversationAggregateArgs> = {
        [P in keyof T & keyof AggregateConversation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConversation[P]>
      : GetScalarType<T[P], AggregateConversation[P]>
  }




  export type ConversationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationWhereInput
    orderBy?: ConversationOrderByWithAggregationInput | ConversationOrderByWithAggregationInput[]
    by: ConversationScalarFieldEnum[] | ConversationScalarFieldEnum
    having?: ConversationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConversationCountAggregateInputType | true
    _min?: ConversationMinAggregateInputType
    _max?: ConversationMaxAggregateInputType
  }

  export type ConversationGroupByOutputType = {
    id: string
    name: string | null
    senderId: string
    receiverId: string
    createdAt: Date
    _count: ConversationCountAggregateOutputType | null
    _min: ConversationMinAggregateOutputType | null
    _max: ConversationMaxAggregateOutputType | null
  }

  type GetConversationGroupByPayload<T extends ConversationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConversationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConversationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConversationGroupByOutputType[P]>
            : GetScalarType<T[P], ConversationGroupByOutputType[P]>
        }
      >
    >


  export type ConversationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    senderId?: boolean
    receiverId?: boolean
    createdAt?: boolean
    users?: boolean | Conversation$usersArgs<ExtArgs>
    messages?: boolean | Conversation$messagesArgs<ExtArgs>
    _count?: boolean | ConversationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversation"]>

  export type ConversationSelectScalar = {
    id?: boolean
    name?: boolean
    senderId?: boolean
    receiverId?: boolean
    createdAt?: boolean
  }

  export type ConversationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Conversation$usersArgs<ExtArgs>
    messages?: boolean | Conversation$messagesArgs<ExtArgs>
    _count?: boolean | ConversationCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ConversationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Conversation"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      messages: Prisma.$MessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      senderId: string
      receiverId: string
      createdAt: Date
    }, ExtArgs["result"]["conversation"]>
    composites: {}
  }


  type ConversationGetPayload<S extends boolean | null | undefined | ConversationDefaultArgs> = $Result.GetResult<Prisma.$ConversationPayload, S>

  type ConversationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ConversationFindManyArgs, 'select' | 'include'> & {
      select?: ConversationCountAggregateInputType | true
    }

  export interface ConversationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Conversation'], meta: { name: 'Conversation' } }
    /**
     * Find zero or one Conversation that matches the filter.
     * @param {ConversationFindUniqueArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ConversationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ConversationFindUniqueArgs<ExtArgs>>
    ): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Conversation that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ConversationFindUniqueOrThrowArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ConversationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ConversationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Conversation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationFindFirstArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ConversationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ConversationFindFirstArgs<ExtArgs>>
    ): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Conversation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationFindFirstOrThrowArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ConversationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ConversationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Conversations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Conversations
     * const conversations = await prisma.conversation.findMany()
     * 
     * // Get first 10 Conversations
     * const conversations = await prisma.conversation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const conversationWithIdOnly = await prisma.conversation.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ConversationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ConversationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Conversation.
     * @param {ConversationCreateArgs} args - Arguments to create a Conversation.
     * @example
     * // Create one Conversation
     * const Conversation = await prisma.conversation.create({
     *   data: {
     *     // ... data to create a Conversation
     *   }
     * })
     * 
    **/
    create<T extends ConversationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ConversationCreateArgs<ExtArgs>>
    ): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Conversations.
     *     @param {ConversationCreateManyArgs} args - Arguments to create many Conversations.
     *     @example
     *     // Create many Conversations
     *     const conversation = await prisma.conversation.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ConversationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ConversationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Conversation.
     * @param {ConversationDeleteArgs} args - Arguments to delete one Conversation.
     * @example
     * // Delete one Conversation
     * const Conversation = await prisma.conversation.delete({
     *   where: {
     *     // ... filter to delete one Conversation
     *   }
     * })
     * 
    **/
    delete<T extends ConversationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ConversationDeleteArgs<ExtArgs>>
    ): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Conversation.
     * @param {ConversationUpdateArgs} args - Arguments to update one Conversation.
     * @example
     * // Update one Conversation
     * const conversation = await prisma.conversation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ConversationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ConversationUpdateArgs<ExtArgs>>
    ): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Conversations.
     * @param {ConversationDeleteManyArgs} args - Arguments to filter Conversations to delete.
     * @example
     * // Delete a few Conversations
     * const { count } = await prisma.conversation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ConversationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ConversationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Conversations
     * const conversation = await prisma.conversation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ConversationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ConversationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Conversation.
     * @param {ConversationUpsertArgs} args - Arguments to update or create a Conversation.
     * @example
     * // Update or create a Conversation
     * const conversation = await prisma.conversation.upsert({
     *   create: {
     *     // ... data to create a Conversation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Conversation we want to update
     *   }
     * })
    **/
    upsert<T extends ConversationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ConversationUpsertArgs<ExtArgs>>
    ): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationCountArgs} args - Arguments to filter Conversations to count.
     * @example
     * // Count the number of Conversations
     * const count = await prisma.conversation.count({
     *   where: {
     *     // ... the filter for the Conversations we want to count
     *   }
     * })
    **/
    count<T extends ConversationCountArgs>(
      args?: Subset<T, ConversationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConversationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Conversation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConversationAggregateArgs>(args: Subset<T, ConversationAggregateArgs>): Prisma.PrismaPromise<GetConversationAggregateType<T>>

    /**
     * Group by Conversation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConversationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConversationGroupByArgs['orderBy'] }
        : { orderBy?: ConversationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConversationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConversationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Conversation model
   */
  readonly fields: ConversationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Conversation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConversationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    users<T extends Conversation$usersArgs<ExtArgs> = {}>(args?: Subset<T, Conversation$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'> | Null>;

    messages<T extends Conversation$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Conversation$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Conversation model
   */ 
  interface ConversationFieldRefs {
    readonly id: FieldRef<"Conversation", 'String'>
    readonly name: FieldRef<"Conversation", 'String'>
    readonly senderId: FieldRef<"Conversation", 'String'>
    readonly receiverId: FieldRef<"Conversation", 'String'>
    readonly createdAt: FieldRef<"Conversation", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Conversation findUnique
   */
  export type ConversationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where: ConversationWhereUniqueInput
  }


  /**
   * Conversation findUniqueOrThrow
   */
  export type ConversationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where: ConversationWhereUniqueInput
  }


  /**
   * Conversation findFirst
   */
  export type ConversationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conversations.
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conversations.
     */
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }


  /**
   * Conversation findFirstOrThrow
   */
  export type ConversationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conversations.
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conversations.
     */
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }


  /**
   * Conversation findMany
   */
  export type ConversationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversations to fetch.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Conversations.
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }


  /**
   * Conversation create
   */
  export type ConversationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * The data needed to create a Conversation.
     */
    data: XOR<ConversationCreateInput, ConversationUncheckedCreateInput>
  }


  /**
   * Conversation createMany
   */
  export type ConversationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Conversations.
     */
    data: ConversationCreateManyInput | ConversationCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Conversation update
   */
  export type ConversationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * The data needed to update a Conversation.
     */
    data: XOR<ConversationUpdateInput, ConversationUncheckedUpdateInput>
    /**
     * Choose, which Conversation to update.
     */
    where: ConversationWhereUniqueInput
  }


  /**
   * Conversation updateMany
   */
  export type ConversationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Conversations.
     */
    data: XOR<ConversationUpdateManyMutationInput, ConversationUncheckedUpdateManyInput>
    /**
     * Filter which Conversations to update
     */
    where?: ConversationWhereInput
  }


  /**
   * Conversation upsert
   */
  export type ConversationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * The filter to search for the Conversation to update in case it exists.
     */
    where: ConversationWhereUniqueInput
    /**
     * In case the Conversation found by the `where` argument doesn't exist, create a new Conversation with this data.
     */
    create: XOR<ConversationCreateInput, ConversationUncheckedCreateInput>
    /**
     * In case the Conversation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConversationUpdateInput, ConversationUncheckedUpdateInput>
  }


  /**
   * Conversation delete
   */
  export type ConversationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter which Conversation to delete.
     */
    where: ConversationWhereUniqueInput
  }


  /**
   * Conversation deleteMany
   */
  export type ConversationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conversations to delete
     */
    where?: ConversationWhereInput
  }


  /**
   * Conversation.users
   */
  export type Conversation$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * Conversation.messages
   */
  export type Conversation$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }


  /**
   * Conversation without action
   */
  export type ConversationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationInclude<ExtArgs> | null
  }



  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageMinAggregateOutputType = {
    id: string | null
    text: string | null
    image: string | null
    senderId: string | null
    receiverId: string | null
    conversationId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MessageMaxAggregateOutputType = {
    id: string | null
    text: string | null
    image: string | null
    senderId: string | null
    receiverId: string | null
    conversationId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    text: number
    image: number
    senderId: number
    receiverId: number
    conversationId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MessageMinAggregateInputType = {
    id?: true
    text?: true
    image?: true
    senderId?: true
    receiverId?: true
    conversationId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    text?: true
    image?: true
    senderId?: true
    receiverId?: true
    conversationId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    text?: true
    image?: true
    senderId?: true
    receiverId?: true
    conversationId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: string
    text: string | null
    image: string | null
    senderId: string
    receiverId: string
    conversationId: string
    createdAt: Date
    updatedAt: Date
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    image?: boolean
    senderId?: boolean
    receiverId?: boolean
    conversationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    text?: boolean
    image?: boolean
    senderId?: boolean
    receiverId?: boolean
    conversationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
  }


  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      sender: Prisma.$UserPayload<ExtArgs>
      receiver: Prisma.$UserPayload<ExtArgs>
      conversation: Prisma.$ConversationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      text: string | null
      image: string | null
      senderId: string
      receiverId: string
      conversationId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["message"]>
    composites: {}
  }


  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MessageFindManyArgs, 'select' | 'include'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MessageFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>
    ): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Message that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MessageFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>
    ): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MessageFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
    **/
    create<T extends MessageCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MessageCreateArgs<ExtArgs>>
    ): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Messages.
     *     @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     *     @example
     *     // Create many Messages
     *     const message = await prisma.message.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MessageCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
    **/
    delete<T extends MessageDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>
    ): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MessageUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>
    ): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MessageDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MessageUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
    **/
    upsert<T extends MessageUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>
    ): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    receiver<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    conversation<T extends ConversationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConversationDefaultArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Message model
   */ 
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'String'>
    readonly text: FieldRef<"Message", 'String'>
    readonly image: FieldRef<"Message", 'String'>
    readonly senderId: FieldRef<"Message", 'String'>
    readonly receiverId: FieldRef<"Message", 'String'>
    readonly conversationId: FieldRef<"Message", 'String'>
    readonly createdAt: FieldRef<"Message", 'DateTime'>
    readonly updatedAt: FieldRef<"Message", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }


  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }


  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }


  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }


  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }


  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }


  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }


  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
  }


  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }


  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }


  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
  }


  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    hashedPassword: 'hashedPassword',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userType: 'userType',
    favoriteIds: 'favoriteIds'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    sessionToken: 'sessionToken',
    accessToken: 'accessToken',
    expires: 'expires',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const VerificationRequestScalarFieldEnum: {
    id: 'id',
    identifier: 'identifier',
    token: 'token',
    expires: 'expires',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VerificationRequestScalarFieldEnum = (typeof VerificationRequestScalarFieldEnum)[keyof typeof VerificationRequestScalarFieldEnum]


  export const BoardScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    category: 'category',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    likes: 'likes',
    dislikes: 'dislikes',
    views: 'views'
  };

  export type BoardScalarFieldEnum = (typeof BoardScalarFieldEnum)[keyof typeof BoardScalarFieldEnum]


  export const BoardLikeDisLikeScalarFieldEnum: {
    id: 'id',
    type: 'type',
    createdAt: 'createdAt',
    userId: 'userId',
    boardId: 'boardId'
  };

  export type BoardLikeDisLikeScalarFieldEnum = (typeof BoardLikeDisLikeScalarFieldEnum)[keyof typeof BoardLikeDisLikeScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    imageSrc: 'imageSrc',
    userId: 'userId',
    price: 'price',
    latitude: 'latitude',
    longitude: 'longitude',
    address: 'address',
    addressDetail: 'addressDetail',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    sold: 'sold',
    views: 'views',
    delivery: 'delivery',
    faceToFace: 'faceToFace',
    categories: 'categories'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const ViewdBoardStoreScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    boardId: 'boardId',
    viewedAt: 'viewedAt'
  };

  export type ViewdBoardStoreScalarFieldEnum = (typeof ViewdBoardStoreScalarFieldEnum)[keyof typeof ViewdBoardStoreScalarFieldEnum]


  export const ViewdProductStoreScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    productId: 'productId',
    viewedAt: 'viewedAt'
  };

  export type ViewdProductStoreScalarFieldEnum = (typeof ViewdProductStoreScalarFieldEnum)[keyof typeof ViewdProductStoreScalarFieldEnum]


  export const ConversationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    senderId: 'senderId',
    receiverId: 'receiverId',
    createdAt: 'createdAt'
  };

  export type ConversationScalarFieldEnum = (typeof ConversationScalarFieldEnum)[keyof typeof ConversationScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    text: 'text',
    image: 'image',
    senderId: 'senderId',
    receiverId: 'receiverId',
    conversationId: 'conversationId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'UserType'
   */
  export type EnumUserTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserType'>
    


  /**
   * Reference to a field of type 'UserType[]'
   */
  export type ListEnumUserTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    hashedPassword?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    userType?: EnumUserTypeFilter<"User"> | $Enums.UserType
    favoriteIds?: StringNullableListFilter<"User">
    sessions?: SessionListRelationFilter
    Product?: ProductListRelationFilter
    Board?: BoardListRelationFilter
    ViewdBoardStore?: ViewdBoardStoreListRelationFilter
    ViewdProductStore?: ViewdProductStoreListRelationFilter
    BoardLikeDisLike?: BoardLikeDisLikeListRelationFilter
    accounts?: AccountListRelationFilter
    conversations?: ConversationListRelationFilter
    sendMessages?: MessageListRelationFilter
    receivedMessages?: MessageListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    hashedPassword?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userType?: SortOrder
    favoriteIds?: SortOrder
    sessions?: SessionOrderByRelationAggregateInput
    Product?: ProductOrderByRelationAggregateInput
    Board?: BoardOrderByRelationAggregateInput
    ViewdBoardStore?: ViewdBoardStoreOrderByRelationAggregateInput
    ViewdProductStore?: ViewdProductStoreOrderByRelationAggregateInput
    BoardLikeDisLike?: BoardLikeDisLikeOrderByRelationAggregateInput
    accounts?: AccountOrderByRelationAggregateInput
    conversations?: ConversationOrderByRelationAggregateInput
    sendMessages?: MessageOrderByRelationAggregateInput
    receivedMessages?: MessageOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    hashedPassword?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    userType?: EnumUserTypeFilter<"User"> | $Enums.UserType
    favoriteIds?: StringNullableListFilter<"User">
    sessions?: SessionListRelationFilter
    Product?: ProductListRelationFilter
    Board?: BoardListRelationFilter
    ViewdBoardStore?: ViewdBoardStoreListRelationFilter
    ViewdProductStore?: ViewdProductStoreListRelationFilter
    BoardLikeDisLike?: BoardLikeDisLikeListRelationFilter
    accounts?: AccountListRelationFilter
    conversations?: ConversationListRelationFilter
    sendMessages?: MessageListRelationFilter
    receivedMessages?: MessageListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    hashedPassword?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userType?: SortOrder
    favoriteIds?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    hashedPassword?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    userType?: EnumUserTypeWithAggregatesFilter<"User"> | $Enums.UserType
    favoriteIds?: StringNullableListFilter<"User">
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: StringNullableFilter<"Session"> | string | null
    sessionToken?: StringFilter<"Session"> | string
    accessToken?: StringNullableFilter<"Session"> | string | null
    expires?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    sessionToken?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringNullableFilter<"Session"> | string | null
    accessToken?: StringNullableFilter<"Session"> | string | null
    expires?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    sessionToken?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringNullableWithAggregatesFilter<"Session"> | string | null
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    accessToken?: StringNullableWithAggregatesFilter<"Session"> | string | null
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type VerificationRequestWhereInput = {
    AND?: VerificationRequestWhereInput | VerificationRequestWhereInput[]
    OR?: VerificationRequestWhereInput[]
    NOT?: VerificationRequestWhereInput | VerificationRequestWhereInput[]
    id?: StringFilter<"VerificationRequest"> | string
    identifier?: StringFilter<"VerificationRequest"> | string
    token?: StringFilter<"VerificationRequest"> | string
    expires?: DateTimeFilter<"VerificationRequest"> | Date | string
    createdAt?: DateTimeFilter<"VerificationRequest"> | Date | string
    updatedAt?: DateTimeFilter<"VerificationRequest"> | Date | string
  }

  export type VerificationRequestOrderByWithRelationInput = {
    id?: SortOrder
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    identifier_token?: VerificationRequestIdentifierTokenCompoundUniqueInput
    AND?: VerificationRequestWhereInput | VerificationRequestWhereInput[]
    OR?: VerificationRequestWhereInput[]
    NOT?: VerificationRequestWhereInput | VerificationRequestWhereInput[]
    identifier?: StringFilter<"VerificationRequest"> | string
    expires?: DateTimeFilter<"VerificationRequest"> | Date | string
    createdAt?: DateTimeFilter<"VerificationRequest"> | Date | string
    updatedAt?: DateTimeFilter<"VerificationRequest"> | Date | string
  }, "id" | "token" | "identifier_token">

  export type VerificationRequestOrderByWithAggregationInput = {
    id?: SortOrder
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VerificationRequestCountOrderByAggregateInput
    _max?: VerificationRequestMaxOrderByAggregateInput
    _min?: VerificationRequestMinOrderByAggregateInput
  }

  export type VerificationRequestScalarWhereWithAggregatesInput = {
    AND?: VerificationRequestScalarWhereWithAggregatesInput | VerificationRequestScalarWhereWithAggregatesInput[]
    OR?: VerificationRequestScalarWhereWithAggregatesInput[]
    NOT?: VerificationRequestScalarWhereWithAggregatesInput | VerificationRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VerificationRequest"> | string
    identifier?: StringWithAggregatesFilter<"VerificationRequest"> | string
    token?: StringWithAggregatesFilter<"VerificationRequest"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationRequest"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"VerificationRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"VerificationRequest"> | Date | string
  }

  export type BoardWhereInput = {
    AND?: BoardWhereInput | BoardWhereInput[]
    OR?: BoardWhereInput[]
    NOT?: BoardWhereInput | BoardWhereInput[]
    id?: StringFilter<"Board"> | string
    title?: StringFilter<"Board"> | string
    description?: StringFilter<"Board"> | string
    category?: StringFilter<"Board"> | string
    userId?: StringFilter<"Board"> | string
    createdAt?: DateTimeFilter<"Board"> | Date | string
    updatedAt?: DateTimeFilter<"Board"> | Date | string
    likes?: IntFilter<"Board"> | number
    dislikes?: IntFilter<"Board"> | number
    views?: IntFilter<"Board"> | number
    ViewdBoardStore?: ViewdBoardStoreListRelationFilter
    BoardLikeDisLike?: BoardLikeDisLikeListRelationFilter
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type BoardOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    likes?: SortOrder
    dislikes?: SortOrder
    views?: SortOrder
    ViewdBoardStore?: ViewdBoardStoreOrderByRelationAggregateInput
    BoardLikeDisLike?: BoardLikeDisLikeOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type BoardWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BoardWhereInput | BoardWhereInput[]
    OR?: BoardWhereInput[]
    NOT?: BoardWhereInput | BoardWhereInput[]
    title?: StringFilter<"Board"> | string
    description?: StringFilter<"Board"> | string
    category?: StringFilter<"Board"> | string
    userId?: StringFilter<"Board"> | string
    createdAt?: DateTimeFilter<"Board"> | Date | string
    updatedAt?: DateTimeFilter<"Board"> | Date | string
    likes?: IntFilter<"Board"> | number
    dislikes?: IntFilter<"Board"> | number
    views?: IntFilter<"Board"> | number
    ViewdBoardStore?: ViewdBoardStoreListRelationFilter
    BoardLikeDisLike?: BoardLikeDisLikeListRelationFilter
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type BoardOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    likes?: SortOrder
    dislikes?: SortOrder
    views?: SortOrder
    _count?: BoardCountOrderByAggregateInput
    _avg?: BoardAvgOrderByAggregateInput
    _max?: BoardMaxOrderByAggregateInput
    _min?: BoardMinOrderByAggregateInput
    _sum?: BoardSumOrderByAggregateInput
  }

  export type BoardScalarWhereWithAggregatesInput = {
    AND?: BoardScalarWhereWithAggregatesInput | BoardScalarWhereWithAggregatesInput[]
    OR?: BoardScalarWhereWithAggregatesInput[]
    NOT?: BoardScalarWhereWithAggregatesInput | BoardScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Board"> | string
    title?: StringWithAggregatesFilter<"Board"> | string
    description?: StringWithAggregatesFilter<"Board"> | string
    category?: StringWithAggregatesFilter<"Board"> | string
    userId?: StringWithAggregatesFilter<"Board"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Board"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Board"> | Date | string
    likes?: IntWithAggregatesFilter<"Board"> | number
    dislikes?: IntWithAggregatesFilter<"Board"> | number
    views?: IntWithAggregatesFilter<"Board"> | number
  }

  export type BoardLikeDisLikeWhereInput = {
    AND?: BoardLikeDisLikeWhereInput | BoardLikeDisLikeWhereInput[]
    OR?: BoardLikeDisLikeWhereInput[]
    NOT?: BoardLikeDisLikeWhereInput | BoardLikeDisLikeWhereInput[]
    id?: IntFilter<"BoardLikeDisLike"> | number
    type?: StringFilter<"BoardLikeDisLike"> | string
    createdAt?: DateTimeFilter<"BoardLikeDisLike"> | Date | string
    userId?: StringFilter<"BoardLikeDisLike"> | string
    boardId?: StringFilter<"BoardLikeDisLike"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    board?: XOR<BoardRelationFilter, BoardWhereInput>
  }

  export type BoardLikeDisLikeOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    boardId?: SortOrder
    user?: UserOrderByWithRelationInput
    board?: BoardOrderByWithRelationInput
  }

  export type BoardLikeDisLikeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BoardLikeDisLikeWhereInput | BoardLikeDisLikeWhereInput[]
    OR?: BoardLikeDisLikeWhereInput[]
    NOT?: BoardLikeDisLikeWhereInput | BoardLikeDisLikeWhereInput[]
    type?: StringFilter<"BoardLikeDisLike"> | string
    createdAt?: DateTimeFilter<"BoardLikeDisLike"> | Date | string
    userId?: StringFilter<"BoardLikeDisLike"> | string
    boardId?: StringFilter<"BoardLikeDisLike"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    board?: XOR<BoardRelationFilter, BoardWhereInput>
  }, "id">

  export type BoardLikeDisLikeOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    boardId?: SortOrder
    _count?: BoardLikeDisLikeCountOrderByAggregateInput
    _avg?: BoardLikeDisLikeAvgOrderByAggregateInput
    _max?: BoardLikeDisLikeMaxOrderByAggregateInput
    _min?: BoardLikeDisLikeMinOrderByAggregateInput
    _sum?: BoardLikeDisLikeSumOrderByAggregateInput
  }

  export type BoardLikeDisLikeScalarWhereWithAggregatesInput = {
    AND?: BoardLikeDisLikeScalarWhereWithAggregatesInput | BoardLikeDisLikeScalarWhereWithAggregatesInput[]
    OR?: BoardLikeDisLikeScalarWhereWithAggregatesInput[]
    NOT?: BoardLikeDisLikeScalarWhereWithAggregatesInput | BoardLikeDisLikeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BoardLikeDisLike"> | number
    type?: StringWithAggregatesFilter<"BoardLikeDisLike"> | string
    createdAt?: DateTimeWithAggregatesFilter<"BoardLikeDisLike"> | Date | string
    userId?: StringWithAggregatesFilter<"BoardLikeDisLike"> | string
    boardId?: StringWithAggregatesFilter<"BoardLikeDisLike"> | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: StringFilter<"Product"> | string
    title?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    imageSrc?: StringNullableListFilter<"Product">
    userId?: StringFilter<"Product"> | string
    price?: IntFilter<"Product"> | number
    latitude?: FloatNullableFilter<"Product"> | number | null
    longitude?: FloatNullableFilter<"Product"> | number | null
    address?: StringNullableFilter<"Product"> | string | null
    addressDetail?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    sold?: BoolFilter<"Product"> | boolean
    views?: IntFilter<"Product"> | number
    delivery?: BoolFilter<"Product"> | boolean
    faceToFace?: BoolFilter<"Product"> | boolean
    categories?: StringNullableListFilter<"Product">
    user?: XOR<UserRelationFilter, UserWhereInput>
    ViewdProductStore?: ViewdProductStoreListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageSrc?: SortOrder
    userId?: SortOrder
    price?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    addressDetail?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sold?: SortOrder
    views?: SortOrder
    delivery?: SortOrder
    faceToFace?: SortOrder
    categories?: SortOrder
    user?: UserOrderByWithRelationInput
    ViewdProductStore?: ViewdProductStoreOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    title?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    imageSrc?: StringNullableListFilter<"Product">
    userId?: StringFilter<"Product"> | string
    price?: IntFilter<"Product"> | number
    latitude?: FloatNullableFilter<"Product"> | number | null
    longitude?: FloatNullableFilter<"Product"> | number | null
    address?: StringNullableFilter<"Product"> | string | null
    addressDetail?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    sold?: BoolFilter<"Product"> | boolean
    views?: IntFilter<"Product"> | number
    delivery?: BoolFilter<"Product"> | boolean
    faceToFace?: BoolFilter<"Product"> | boolean
    categories?: StringNullableListFilter<"Product">
    user?: XOR<UserRelationFilter, UserWhereInput>
    ViewdProductStore?: ViewdProductStoreListRelationFilter
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageSrc?: SortOrder
    userId?: SortOrder
    price?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    addressDetail?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sold?: SortOrder
    views?: SortOrder
    delivery?: SortOrder
    faceToFace?: SortOrder
    categories?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Product"> | string
    title?: StringWithAggregatesFilter<"Product"> | string
    description?: StringWithAggregatesFilter<"Product"> | string
    imageSrc?: StringNullableListFilter<"Product">
    userId?: StringWithAggregatesFilter<"Product"> | string
    price?: IntWithAggregatesFilter<"Product"> | number
    latitude?: FloatNullableWithAggregatesFilter<"Product"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"Product"> | number | null
    address?: StringNullableWithAggregatesFilter<"Product"> | string | null
    addressDetail?: StringNullableWithAggregatesFilter<"Product"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    sold?: BoolWithAggregatesFilter<"Product"> | boolean
    views?: IntWithAggregatesFilter<"Product"> | number
    delivery?: BoolWithAggregatesFilter<"Product"> | boolean
    faceToFace?: BoolWithAggregatesFilter<"Product"> | boolean
    categories?: StringNullableListFilter<"Product">
  }

  export type ViewdBoardStoreWhereInput = {
    AND?: ViewdBoardStoreWhereInput | ViewdBoardStoreWhereInput[]
    OR?: ViewdBoardStoreWhereInput[]
    NOT?: ViewdBoardStoreWhereInput | ViewdBoardStoreWhereInput[]
    id?: StringFilter<"ViewdBoardStore"> | string
    userId?: StringFilter<"ViewdBoardStore"> | string
    boardId?: StringFilter<"ViewdBoardStore"> | string
    viewedAt?: DateTimeFilter<"ViewdBoardStore"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    board?: XOR<BoardRelationFilter, BoardWhereInput>
  }

  export type ViewdBoardStoreOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    boardId?: SortOrder
    viewedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    board?: BoardOrderByWithRelationInput
  }

  export type ViewdBoardStoreWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ViewdBoardStoreWhereInput | ViewdBoardStoreWhereInput[]
    OR?: ViewdBoardStoreWhereInput[]
    NOT?: ViewdBoardStoreWhereInput | ViewdBoardStoreWhereInput[]
    userId?: StringFilter<"ViewdBoardStore"> | string
    boardId?: StringFilter<"ViewdBoardStore"> | string
    viewedAt?: DateTimeFilter<"ViewdBoardStore"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    board?: XOR<BoardRelationFilter, BoardWhereInput>
  }, "id">

  export type ViewdBoardStoreOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    boardId?: SortOrder
    viewedAt?: SortOrder
    _count?: ViewdBoardStoreCountOrderByAggregateInput
    _max?: ViewdBoardStoreMaxOrderByAggregateInput
    _min?: ViewdBoardStoreMinOrderByAggregateInput
  }

  export type ViewdBoardStoreScalarWhereWithAggregatesInput = {
    AND?: ViewdBoardStoreScalarWhereWithAggregatesInput | ViewdBoardStoreScalarWhereWithAggregatesInput[]
    OR?: ViewdBoardStoreScalarWhereWithAggregatesInput[]
    NOT?: ViewdBoardStoreScalarWhereWithAggregatesInput | ViewdBoardStoreScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ViewdBoardStore"> | string
    userId?: StringWithAggregatesFilter<"ViewdBoardStore"> | string
    boardId?: StringWithAggregatesFilter<"ViewdBoardStore"> | string
    viewedAt?: DateTimeWithAggregatesFilter<"ViewdBoardStore"> | Date | string
  }

  export type ViewdProductStoreWhereInput = {
    AND?: ViewdProductStoreWhereInput | ViewdProductStoreWhereInput[]
    OR?: ViewdProductStoreWhereInput[]
    NOT?: ViewdProductStoreWhereInput | ViewdProductStoreWhereInput[]
    id?: StringFilter<"ViewdProductStore"> | string
    userId?: StringFilter<"ViewdProductStore"> | string
    productId?: StringFilter<"ViewdProductStore"> | string
    viewedAt?: DateTimeFilter<"ViewdProductStore"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }

  export type ViewdProductStoreOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    viewedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type ViewdProductStoreWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ViewdProductStoreWhereInput | ViewdProductStoreWhereInput[]
    OR?: ViewdProductStoreWhereInput[]
    NOT?: ViewdProductStoreWhereInput | ViewdProductStoreWhereInput[]
    userId?: StringFilter<"ViewdProductStore"> | string
    productId?: StringFilter<"ViewdProductStore"> | string
    viewedAt?: DateTimeFilter<"ViewdProductStore"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }, "id">

  export type ViewdProductStoreOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    viewedAt?: SortOrder
    _count?: ViewdProductStoreCountOrderByAggregateInput
    _max?: ViewdProductStoreMaxOrderByAggregateInput
    _min?: ViewdProductStoreMinOrderByAggregateInput
  }

  export type ViewdProductStoreScalarWhereWithAggregatesInput = {
    AND?: ViewdProductStoreScalarWhereWithAggregatesInput | ViewdProductStoreScalarWhereWithAggregatesInput[]
    OR?: ViewdProductStoreScalarWhereWithAggregatesInput[]
    NOT?: ViewdProductStoreScalarWhereWithAggregatesInput | ViewdProductStoreScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ViewdProductStore"> | string
    userId?: StringWithAggregatesFilter<"ViewdProductStore"> | string
    productId?: StringWithAggregatesFilter<"ViewdProductStore"> | string
    viewedAt?: DateTimeWithAggregatesFilter<"ViewdProductStore"> | Date | string
  }

  export type ConversationWhereInput = {
    AND?: ConversationWhereInput | ConversationWhereInput[]
    OR?: ConversationWhereInput[]
    NOT?: ConversationWhereInput | ConversationWhereInput[]
    id?: StringFilter<"Conversation"> | string
    name?: StringNullableFilter<"Conversation"> | string | null
    senderId?: StringFilter<"Conversation"> | string
    receiverId?: StringFilter<"Conversation"> | string
    createdAt?: DateTimeFilter<"Conversation"> | Date | string
    users?: UserListRelationFilter
    messages?: MessageListRelationFilter
  }

  export type ConversationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    createdAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
    messages?: MessageOrderByRelationAggregateInput
  }

  export type ConversationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ConversationWhereInput | ConversationWhereInput[]
    OR?: ConversationWhereInput[]
    NOT?: ConversationWhereInput | ConversationWhereInput[]
    name?: StringNullableFilter<"Conversation"> | string | null
    senderId?: StringFilter<"Conversation"> | string
    receiverId?: StringFilter<"Conversation"> | string
    createdAt?: DateTimeFilter<"Conversation"> | Date | string
    users?: UserListRelationFilter
    messages?: MessageListRelationFilter
  }, "id">

  export type ConversationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    createdAt?: SortOrder
    _count?: ConversationCountOrderByAggregateInput
    _max?: ConversationMaxOrderByAggregateInput
    _min?: ConversationMinOrderByAggregateInput
  }

  export type ConversationScalarWhereWithAggregatesInput = {
    AND?: ConversationScalarWhereWithAggregatesInput | ConversationScalarWhereWithAggregatesInput[]
    OR?: ConversationScalarWhereWithAggregatesInput[]
    NOT?: ConversationScalarWhereWithAggregatesInput | ConversationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Conversation"> | string
    name?: StringNullableWithAggregatesFilter<"Conversation"> | string | null
    senderId?: StringWithAggregatesFilter<"Conversation"> | string
    receiverId?: StringWithAggregatesFilter<"Conversation"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Conversation"> | Date | string
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: StringFilter<"Message"> | string
    text?: StringNullableFilter<"Message"> | string | null
    image?: StringNullableFilter<"Message"> | string | null
    senderId?: StringFilter<"Message"> | string
    receiverId?: StringFilter<"Message"> | string
    conversationId?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
    updatedAt?: DateTimeFilter<"Message"> | Date | string
    sender?: XOR<UserRelationFilter, UserWhereInput>
    receiver?: XOR<UserRelationFilter, UserWhereInput>
    conversation?: XOR<ConversationRelationFilter, ConversationWhereInput>
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    conversationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sender?: UserOrderByWithRelationInput
    receiver?: UserOrderByWithRelationInput
    conversation?: ConversationOrderByWithRelationInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    text?: StringNullableFilter<"Message"> | string | null
    image?: StringNullableFilter<"Message"> | string | null
    senderId?: StringFilter<"Message"> | string
    receiverId?: StringFilter<"Message"> | string
    conversationId?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
    updatedAt?: DateTimeFilter<"Message"> | Date | string
    sender?: XOR<UserRelationFilter, UserWhereInput>
    receiver?: XOR<UserRelationFilter, UserWhereInput>
    conversation?: XOR<ConversationRelationFilter, ConversationWhereInput>
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    conversationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Message"> | string
    text?: StringNullableWithAggregatesFilter<"Message"> | string | null
    image?: StringNullableWithAggregatesFilter<"Message"> | string | null
    senderId?: StringWithAggregatesFilter<"Message"> | string
    receiverId?: StringWithAggregatesFilter<"Message"> | string
    conversationId?: StringWithAggregatesFilter<"Message"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    hashedPassword?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userType?: $Enums.UserType
    favoriteIds?: UserCreatefavoriteIdsInput | string[]
    sessions?: SessionCreateNestedManyWithoutUserInput
    Product?: ProductCreateNestedManyWithoutUserInput
    Board?: BoardCreateNestedManyWithoutUserInput
    ViewdBoardStore?: ViewdBoardStoreCreateNestedManyWithoutUserInput
    ViewdProductStore?: ViewdProductStoreCreateNestedManyWithoutUserInput
    BoardLikeDisLike?: BoardLikeDisLikeCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    conversations?: ConversationCreateNestedManyWithoutUsersInput
    sendMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    hashedPassword?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userType?: $Enums.UserType
    favoriteIds?: UserCreatefavoriteIdsInput | string[]
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    Product?: ProductUncheckedCreateNestedManyWithoutUserInput
    Board?: BoardUncheckedCreateNestedManyWithoutUserInput
    ViewdBoardStore?: ViewdBoardStoreUncheckedCreateNestedManyWithoutUserInput
    ViewdProductStore?: ViewdProductStoreUncheckedCreateNestedManyWithoutUserInput
    BoardLikeDisLike?: BoardLikeDisLikeUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    conversations?: ConversationUncheckedCreateNestedManyWithoutUsersInput
    sendMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    favoriteIds?: UserUpdatefavoriteIdsInput | string[]
    sessions?: SessionUpdateManyWithoutUserNestedInput
    Product?: ProductUpdateManyWithoutUserNestedInput
    Board?: BoardUpdateManyWithoutUserNestedInput
    ViewdBoardStore?: ViewdBoardStoreUpdateManyWithoutUserNestedInput
    ViewdProductStore?: ViewdProductStoreUpdateManyWithoutUserNestedInput
    BoardLikeDisLike?: BoardLikeDisLikeUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    conversations?: ConversationUpdateManyWithoutUsersNestedInput
    sendMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    favoriteIds?: UserUpdatefavoriteIdsInput | string[]
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Product?: ProductUncheckedUpdateManyWithoutUserNestedInput
    Board?: BoardUncheckedUpdateManyWithoutUserNestedInput
    ViewdBoardStore?: ViewdBoardStoreUncheckedUpdateManyWithoutUserNestedInput
    ViewdProductStore?: ViewdProductStoreUncheckedUpdateManyWithoutUserNestedInput
    BoardLikeDisLike?: BoardLikeDisLikeUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    conversations?: ConversationUncheckedUpdateManyWithoutUsersNestedInput
    sendMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    hashedPassword?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userType?: $Enums.UserType
    favoriteIds?: UserCreatefavoriteIdsInput | string[]
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    favoriteIds?: UserUpdatefavoriteIdsInput | string[]
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    favoriteIds?: UserUpdatefavoriteIdsInput | string[]
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    accessToken?: string | null
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    userId?: string | null
    sessionToken: string
    accessToken?: string | null
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    sessionToken?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    userId?: string | null
    sessionToken: string
    accessToken?: string | null
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    sessionToken?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationRequestCreateInput = {
    id?: string
    identifier: string
    token: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationRequestUncheckedCreateInput = {
    id?: string
    identifier: string
    token: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationRequestCreateManyInput = {
    id?: string
    identifier: string
    token: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoardCreateInput = {
    id?: string
    title: string
    description: string
    category?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: number
    dislikes?: number
    views?: number
    ViewdBoardStore?: ViewdBoardStoreCreateNestedManyWithoutBoardInput
    BoardLikeDisLike?: BoardLikeDisLikeCreateNestedManyWithoutBoardInput
    user: UserCreateNestedOneWithoutBoardInput
  }

  export type BoardUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    category?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: number
    dislikes?: number
    views?: number
    ViewdBoardStore?: ViewdBoardStoreUncheckedCreateNestedManyWithoutBoardInput
    BoardLikeDisLike?: BoardLikeDisLikeUncheckedCreateNestedManyWithoutBoardInput
  }

  export type BoardUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: IntFieldUpdateOperationsInput | number
    dislikes?: IntFieldUpdateOperationsInput | number
    views?: IntFieldUpdateOperationsInput | number
    ViewdBoardStore?: ViewdBoardStoreUpdateManyWithoutBoardNestedInput
    BoardLikeDisLike?: BoardLikeDisLikeUpdateManyWithoutBoardNestedInput
    user?: UserUpdateOneRequiredWithoutBoardNestedInput
  }

  export type BoardUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: IntFieldUpdateOperationsInput | number
    dislikes?: IntFieldUpdateOperationsInput | number
    views?: IntFieldUpdateOperationsInput | number
    ViewdBoardStore?: ViewdBoardStoreUncheckedUpdateManyWithoutBoardNestedInput
    BoardLikeDisLike?: BoardLikeDisLikeUncheckedUpdateManyWithoutBoardNestedInput
  }

  export type BoardCreateManyInput = {
    id?: string
    title: string
    description: string
    category?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: number
    dislikes?: number
    views?: number
  }

  export type BoardUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: IntFieldUpdateOperationsInput | number
    dislikes?: IntFieldUpdateOperationsInput | number
    views?: IntFieldUpdateOperationsInput | number
  }

  export type BoardUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: IntFieldUpdateOperationsInput | number
    dislikes?: IntFieldUpdateOperationsInput | number
    views?: IntFieldUpdateOperationsInput | number
  }

  export type BoardLikeDisLikeCreateInput = {
    type: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutBoardLikeDisLikeInput
    board: BoardCreateNestedOneWithoutBoardLikeDisLikeInput
  }

  export type BoardLikeDisLikeUncheckedCreateInput = {
    id?: number
    type: string
    createdAt?: Date | string
    userId: string
    boardId: string
  }

  export type BoardLikeDisLikeUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBoardLikeDisLikeNestedInput
    board?: BoardUpdateOneRequiredWithoutBoardLikeDisLikeNestedInput
  }

  export type BoardLikeDisLikeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    boardId?: StringFieldUpdateOperationsInput | string
  }

  export type BoardLikeDisLikeCreateManyInput = {
    id?: number
    type: string
    createdAt?: Date | string
    userId: string
    boardId: string
  }

  export type BoardLikeDisLikeUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoardLikeDisLikeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    boardId?: StringFieldUpdateOperationsInput | string
  }

  export type ProductCreateInput = {
    id?: string
    title: string
    description: string
    imageSrc?: ProductCreateimageSrcInput | string[]
    price: number
    latitude?: number | null
    longitude?: number | null
    address?: string | null
    addressDetail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sold?: boolean
    views?: number
    delivery?: boolean
    faceToFace?: boolean
    categories?: ProductCreatecategoriesInput | string[]
    user: UserCreateNestedOneWithoutProductInput
    ViewdProductStore?: ViewdProductStoreCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    imageSrc?: ProductCreateimageSrcInput | string[]
    userId: string
    price: number
    latitude?: number | null
    longitude?: number | null
    address?: string | null
    addressDetail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sold?: boolean
    views?: number
    delivery?: boolean
    faceToFace?: boolean
    categories?: ProductCreatecategoriesInput | string[]
    ViewdProductStore?: ViewdProductStoreUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageSrc?: ProductUpdateimageSrcInput | string[]
    price?: IntFieldUpdateOperationsInput | number
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    addressDetail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sold?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    delivery?: BoolFieldUpdateOperationsInput | boolean
    faceToFace?: BoolFieldUpdateOperationsInput | boolean
    categories?: ProductUpdatecategoriesInput | string[]
    user?: UserUpdateOneRequiredWithoutProductNestedInput
    ViewdProductStore?: ViewdProductStoreUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageSrc?: ProductUpdateimageSrcInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    addressDetail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sold?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    delivery?: BoolFieldUpdateOperationsInput | boolean
    faceToFace?: BoolFieldUpdateOperationsInput | boolean
    categories?: ProductUpdatecategoriesInput | string[]
    ViewdProductStore?: ViewdProductStoreUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: string
    title: string
    description: string
    imageSrc?: ProductCreateimageSrcInput | string[]
    userId: string
    price: number
    latitude?: number | null
    longitude?: number | null
    address?: string | null
    addressDetail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sold?: boolean
    views?: number
    delivery?: boolean
    faceToFace?: boolean
    categories?: ProductCreatecategoriesInput | string[]
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageSrc?: ProductUpdateimageSrcInput | string[]
    price?: IntFieldUpdateOperationsInput | number
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    addressDetail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sold?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    delivery?: BoolFieldUpdateOperationsInput | boolean
    faceToFace?: BoolFieldUpdateOperationsInput | boolean
    categories?: ProductUpdatecategoriesInput | string[]
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageSrc?: ProductUpdateimageSrcInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    addressDetail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sold?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    delivery?: BoolFieldUpdateOperationsInput | boolean
    faceToFace?: BoolFieldUpdateOperationsInput | boolean
    categories?: ProductUpdatecategoriesInput | string[]
  }

  export type ViewdBoardStoreCreateInput = {
    id?: string
    viewedAt?: Date | string
    user: UserCreateNestedOneWithoutViewdBoardStoreInput
    board: BoardCreateNestedOneWithoutViewdBoardStoreInput
  }

  export type ViewdBoardStoreUncheckedCreateInput = {
    id?: string
    userId: string
    boardId: string
    viewedAt?: Date | string
  }

  export type ViewdBoardStoreUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutViewdBoardStoreNestedInput
    board?: BoardUpdateOneRequiredWithoutViewdBoardStoreNestedInput
  }

  export type ViewdBoardStoreUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    boardId?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViewdBoardStoreCreateManyInput = {
    id?: string
    userId: string
    boardId: string
    viewedAt?: Date | string
  }

  export type ViewdBoardStoreUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViewdBoardStoreUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    boardId?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViewdProductStoreCreateInput = {
    id?: string
    viewedAt?: Date | string
    user: UserCreateNestedOneWithoutViewdProductStoreInput
    product: ProductCreateNestedOneWithoutViewdProductStoreInput
  }

  export type ViewdProductStoreUncheckedCreateInput = {
    id?: string
    userId: string
    productId: string
    viewedAt?: Date | string
  }

  export type ViewdProductStoreUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutViewdProductStoreNestedInput
    product?: ProductUpdateOneRequiredWithoutViewdProductStoreNestedInput
  }

  export type ViewdProductStoreUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViewdProductStoreCreateManyInput = {
    id?: string
    userId: string
    productId: string
    viewedAt?: Date | string
  }

  export type ViewdProductStoreUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViewdProductStoreUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationCreateInput = {
    id?: string
    name?: string | null
    senderId: string
    receiverId: string
    createdAt?: Date | string
    users?: UserCreateNestedManyWithoutConversationsInput
    messages?: MessageCreateNestedManyWithoutConversationInput
  }

  export type ConversationUncheckedCreateInput = {
    id?: string
    name?: string | null
    senderId: string
    receiverId: string
    createdAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutConversationsInput
    messages?: MessageUncheckedCreateNestedManyWithoutConversationInput
  }

  export type ConversationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutConversationsNestedInput
    messages?: MessageUpdateManyWithoutConversationNestedInput
  }

  export type ConversationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutConversationsNestedInput
    messages?: MessageUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type ConversationCreateManyInput = {
    id?: string
    name?: string | null
    senderId: string
    receiverId: string
    createdAt?: Date | string
  }

  export type ConversationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateInput = {
    id?: string
    text?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sender: UserCreateNestedOneWithoutSendMessagesInput
    receiver: UserCreateNestedOneWithoutReceivedMessagesInput
    conversation: ConversationCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateInput = {
    id?: string
    text?: string | null
    image?: string | null
    senderId: string
    receiverId: string
    conversationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSendMessagesNestedInput
    receiver?: UserUpdateOneRequiredWithoutReceivedMessagesNestedInput
    conversation?: ConversationUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyInput = {
    id?: string
    text?: string | null
    image?: string | null
    senderId: string
    receiverId: string
    conversationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumUserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeFilter<$PrismaModel> | $Enums.UserType
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type BoardListRelationFilter = {
    every?: BoardWhereInput
    some?: BoardWhereInput
    none?: BoardWhereInput
  }

  export type ViewdBoardStoreListRelationFilter = {
    every?: ViewdBoardStoreWhereInput
    some?: ViewdBoardStoreWhereInput
    none?: ViewdBoardStoreWhereInput
  }

  export type ViewdProductStoreListRelationFilter = {
    every?: ViewdProductStoreWhereInput
    some?: ViewdProductStoreWhereInput
    none?: ViewdProductStoreWhereInput
  }

  export type BoardLikeDisLikeListRelationFilter = {
    every?: BoardLikeDisLikeWhereInput
    some?: BoardLikeDisLikeWhereInput
    none?: BoardLikeDisLikeWhereInput
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type ConversationListRelationFilter = {
    every?: ConversationWhereInput
    some?: ConversationWhereInput
    none?: ConversationWhereInput
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BoardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ViewdBoardStoreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ViewdProductStoreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BoardLikeDisLikeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConversationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    hashedPassword?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userType?: SortOrder
    favoriteIds?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    hashedPassword?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userType?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    hashedPassword?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userType?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumUserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTypeFilter<$PrismaModel>
    _max?: NestedEnumUserTypeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionToken?: SortOrder
    accessToken?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionToken?: SortOrder
    accessToken?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionToken?: SortOrder
    accessToken?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationRequestIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationRequestCountOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationRequestMinOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoardCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    likes?: SortOrder
    dislikes?: SortOrder
    views?: SortOrder
  }

  export type BoardAvgOrderByAggregateInput = {
    likes?: SortOrder
    dislikes?: SortOrder
    views?: SortOrder
  }

  export type BoardMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    likes?: SortOrder
    dislikes?: SortOrder
    views?: SortOrder
  }

  export type BoardMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    likes?: SortOrder
    dislikes?: SortOrder
    views?: SortOrder
  }

  export type BoardSumOrderByAggregateInput = {
    likes?: SortOrder
    dislikes?: SortOrder
    views?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoardRelationFilter = {
    is?: BoardWhereInput
    isNot?: BoardWhereInput
  }

  export type BoardLikeDisLikeCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    boardId?: SortOrder
  }

  export type BoardLikeDisLikeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoardLikeDisLikeMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    boardId?: SortOrder
  }

  export type BoardLikeDisLikeMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    boardId?: SortOrder
  }

  export type BoardLikeDisLikeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageSrc?: SortOrder
    userId?: SortOrder
    price?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    address?: SortOrder
    addressDetail?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sold?: SortOrder
    views?: SortOrder
    delivery?: SortOrder
    faceToFace?: SortOrder
    categories?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    price?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    views?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    price?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    address?: SortOrder
    addressDetail?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sold?: SortOrder
    views?: SortOrder
    delivery?: SortOrder
    faceToFace?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    price?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    address?: SortOrder
    addressDetail?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sold?: SortOrder
    views?: SortOrder
    delivery?: SortOrder
    faceToFace?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    price?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    views?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ViewdBoardStoreCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    boardId?: SortOrder
    viewedAt?: SortOrder
  }

  export type ViewdBoardStoreMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    boardId?: SortOrder
    viewedAt?: SortOrder
  }

  export type ViewdBoardStoreMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    boardId?: SortOrder
    viewedAt?: SortOrder
  }

  export type ProductRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type ViewdProductStoreCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    viewedAt?: SortOrder
  }

  export type ViewdProductStoreMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    viewedAt?: SortOrder
  }

  export type ViewdProductStoreMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    viewedAt?: SortOrder
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConversationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    createdAt?: SortOrder
  }

  export type ConversationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    createdAt?: SortOrder
  }

  export type ConversationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    createdAt?: SortOrder
  }

  export type ConversationRelationFilter = {
    is?: ConversationWhereInput
    isNot?: ConversationWhereInput
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    image?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    conversationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    image?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    conversationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    image?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    conversationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserCreatefavoriteIdsInput = {
    set: string[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type ProductCreateNestedManyWithoutUserInput = {
    create?: XOR<ProductCreateWithoutUserInput, ProductUncheckedCreateWithoutUserInput> | ProductCreateWithoutUserInput[] | ProductUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutUserInput | ProductCreateOrConnectWithoutUserInput[]
    createMany?: ProductCreateManyUserInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type BoardCreateNestedManyWithoutUserInput = {
    create?: XOR<BoardCreateWithoutUserInput, BoardUncheckedCreateWithoutUserInput> | BoardCreateWithoutUserInput[] | BoardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BoardCreateOrConnectWithoutUserInput | BoardCreateOrConnectWithoutUserInput[]
    createMany?: BoardCreateManyUserInputEnvelope
    connect?: BoardWhereUniqueInput | BoardWhereUniqueInput[]
  }

  export type ViewdBoardStoreCreateNestedManyWithoutUserInput = {
    create?: XOR<ViewdBoardStoreCreateWithoutUserInput, ViewdBoardStoreUncheckedCreateWithoutUserInput> | ViewdBoardStoreCreateWithoutUserInput[] | ViewdBoardStoreUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ViewdBoardStoreCreateOrConnectWithoutUserInput | ViewdBoardStoreCreateOrConnectWithoutUserInput[]
    createMany?: ViewdBoardStoreCreateManyUserInputEnvelope
    connect?: ViewdBoardStoreWhereUniqueInput | ViewdBoardStoreWhereUniqueInput[]
  }

  export type ViewdProductStoreCreateNestedManyWithoutUserInput = {
    create?: XOR<ViewdProductStoreCreateWithoutUserInput, ViewdProductStoreUncheckedCreateWithoutUserInput> | ViewdProductStoreCreateWithoutUserInput[] | ViewdProductStoreUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ViewdProductStoreCreateOrConnectWithoutUserInput | ViewdProductStoreCreateOrConnectWithoutUserInput[]
    createMany?: ViewdProductStoreCreateManyUserInputEnvelope
    connect?: ViewdProductStoreWhereUniqueInput | ViewdProductStoreWhereUniqueInput[]
  }

  export type BoardLikeDisLikeCreateNestedManyWithoutUserInput = {
    create?: XOR<BoardLikeDisLikeCreateWithoutUserInput, BoardLikeDisLikeUncheckedCreateWithoutUserInput> | BoardLikeDisLikeCreateWithoutUserInput[] | BoardLikeDisLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BoardLikeDisLikeCreateOrConnectWithoutUserInput | BoardLikeDisLikeCreateOrConnectWithoutUserInput[]
    createMany?: BoardLikeDisLikeCreateManyUserInputEnvelope
    connect?: BoardLikeDisLikeWhereUniqueInput | BoardLikeDisLikeWhereUniqueInput[]
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type ConversationCreateNestedManyWithoutUsersInput = {
    create?: XOR<ConversationCreateWithoutUsersInput, ConversationUncheckedCreateWithoutUsersInput> | ConversationCreateWithoutUsersInput[] | ConversationUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutUsersInput | ConversationCreateOrConnectWithoutUsersInput[]
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutReceiverInput = {
    create?: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput> | MessageCreateWithoutReceiverInput[] | MessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReceiverInput | MessageCreateOrConnectWithoutReceiverInput[]
    createMany?: MessageCreateManyReceiverInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProductCreateWithoutUserInput, ProductUncheckedCreateWithoutUserInput> | ProductCreateWithoutUserInput[] | ProductUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutUserInput | ProductCreateOrConnectWithoutUserInput[]
    createMany?: ProductCreateManyUserInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type BoardUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BoardCreateWithoutUserInput, BoardUncheckedCreateWithoutUserInput> | BoardCreateWithoutUserInput[] | BoardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BoardCreateOrConnectWithoutUserInput | BoardCreateOrConnectWithoutUserInput[]
    createMany?: BoardCreateManyUserInputEnvelope
    connect?: BoardWhereUniqueInput | BoardWhereUniqueInput[]
  }

  export type ViewdBoardStoreUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ViewdBoardStoreCreateWithoutUserInput, ViewdBoardStoreUncheckedCreateWithoutUserInput> | ViewdBoardStoreCreateWithoutUserInput[] | ViewdBoardStoreUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ViewdBoardStoreCreateOrConnectWithoutUserInput | ViewdBoardStoreCreateOrConnectWithoutUserInput[]
    createMany?: ViewdBoardStoreCreateManyUserInputEnvelope
    connect?: ViewdBoardStoreWhereUniqueInput | ViewdBoardStoreWhereUniqueInput[]
  }

  export type ViewdProductStoreUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ViewdProductStoreCreateWithoutUserInput, ViewdProductStoreUncheckedCreateWithoutUserInput> | ViewdProductStoreCreateWithoutUserInput[] | ViewdProductStoreUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ViewdProductStoreCreateOrConnectWithoutUserInput | ViewdProductStoreCreateOrConnectWithoutUserInput[]
    createMany?: ViewdProductStoreCreateManyUserInputEnvelope
    connect?: ViewdProductStoreWhereUniqueInput | ViewdProductStoreWhereUniqueInput[]
  }

  export type BoardLikeDisLikeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BoardLikeDisLikeCreateWithoutUserInput, BoardLikeDisLikeUncheckedCreateWithoutUserInput> | BoardLikeDisLikeCreateWithoutUserInput[] | BoardLikeDisLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BoardLikeDisLikeCreateOrConnectWithoutUserInput | BoardLikeDisLikeCreateOrConnectWithoutUserInput[]
    createMany?: BoardLikeDisLikeCreateManyUserInputEnvelope
    connect?: BoardLikeDisLikeWhereUniqueInput | BoardLikeDisLikeWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type ConversationUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<ConversationCreateWithoutUsersInput, ConversationUncheckedCreateWithoutUsersInput> | ConversationCreateWithoutUsersInput[] | ConversationUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutUsersInput | ConversationCreateOrConnectWithoutUsersInput[]
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput> | MessageCreateWithoutReceiverInput[] | MessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReceiverInput | MessageCreateOrConnectWithoutReceiverInput[]
    createMany?: MessageCreateManyReceiverInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumUserTypeFieldUpdateOperationsInput = {
    set?: $Enums.UserType
  }

  export type UserUpdatefavoriteIdsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type ProductUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProductCreateWithoutUserInput, ProductUncheckedCreateWithoutUserInput> | ProductCreateWithoutUserInput[] | ProductUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutUserInput | ProductCreateOrConnectWithoutUserInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutUserInput | ProductUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProductCreateManyUserInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutUserInput | ProductUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutUserInput | ProductUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type BoardUpdateManyWithoutUserNestedInput = {
    create?: XOR<BoardCreateWithoutUserInput, BoardUncheckedCreateWithoutUserInput> | BoardCreateWithoutUserInput[] | BoardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BoardCreateOrConnectWithoutUserInput | BoardCreateOrConnectWithoutUserInput[]
    upsert?: BoardUpsertWithWhereUniqueWithoutUserInput | BoardUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BoardCreateManyUserInputEnvelope
    set?: BoardWhereUniqueInput | BoardWhereUniqueInput[]
    disconnect?: BoardWhereUniqueInput | BoardWhereUniqueInput[]
    delete?: BoardWhereUniqueInput | BoardWhereUniqueInput[]
    connect?: BoardWhereUniqueInput | BoardWhereUniqueInput[]
    update?: BoardUpdateWithWhereUniqueWithoutUserInput | BoardUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BoardUpdateManyWithWhereWithoutUserInput | BoardUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BoardScalarWhereInput | BoardScalarWhereInput[]
  }

  export type ViewdBoardStoreUpdateManyWithoutUserNestedInput = {
    create?: XOR<ViewdBoardStoreCreateWithoutUserInput, ViewdBoardStoreUncheckedCreateWithoutUserInput> | ViewdBoardStoreCreateWithoutUserInput[] | ViewdBoardStoreUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ViewdBoardStoreCreateOrConnectWithoutUserInput | ViewdBoardStoreCreateOrConnectWithoutUserInput[]
    upsert?: ViewdBoardStoreUpsertWithWhereUniqueWithoutUserInput | ViewdBoardStoreUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ViewdBoardStoreCreateManyUserInputEnvelope
    set?: ViewdBoardStoreWhereUniqueInput | ViewdBoardStoreWhereUniqueInput[]
    disconnect?: ViewdBoardStoreWhereUniqueInput | ViewdBoardStoreWhereUniqueInput[]
    delete?: ViewdBoardStoreWhereUniqueInput | ViewdBoardStoreWhereUniqueInput[]
    connect?: ViewdBoardStoreWhereUniqueInput | ViewdBoardStoreWhereUniqueInput[]
    update?: ViewdBoardStoreUpdateWithWhereUniqueWithoutUserInput | ViewdBoardStoreUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ViewdBoardStoreUpdateManyWithWhereWithoutUserInput | ViewdBoardStoreUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ViewdBoardStoreScalarWhereInput | ViewdBoardStoreScalarWhereInput[]
  }

  export type ViewdProductStoreUpdateManyWithoutUserNestedInput = {
    create?: XOR<ViewdProductStoreCreateWithoutUserInput, ViewdProductStoreUncheckedCreateWithoutUserInput> | ViewdProductStoreCreateWithoutUserInput[] | ViewdProductStoreUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ViewdProductStoreCreateOrConnectWithoutUserInput | ViewdProductStoreCreateOrConnectWithoutUserInput[]
    upsert?: ViewdProductStoreUpsertWithWhereUniqueWithoutUserInput | ViewdProductStoreUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ViewdProductStoreCreateManyUserInputEnvelope
    set?: ViewdProductStoreWhereUniqueInput | ViewdProductStoreWhereUniqueInput[]
    disconnect?: ViewdProductStoreWhereUniqueInput | ViewdProductStoreWhereUniqueInput[]
    delete?: ViewdProductStoreWhereUniqueInput | ViewdProductStoreWhereUniqueInput[]
    connect?: ViewdProductStoreWhereUniqueInput | ViewdProductStoreWhereUniqueInput[]
    update?: ViewdProductStoreUpdateWithWhereUniqueWithoutUserInput | ViewdProductStoreUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ViewdProductStoreUpdateManyWithWhereWithoutUserInput | ViewdProductStoreUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ViewdProductStoreScalarWhereInput | ViewdProductStoreScalarWhereInput[]
  }

  export type BoardLikeDisLikeUpdateManyWithoutUserNestedInput = {
    create?: XOR<BoardLikeDisLikeCreateWithoutUserInput, BoardLikeDisLikeUncheckedCreateWithoutUserInput> | BoardLikeDisLikeCreateWithoutUserInput[] | BoardLikeDisLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BoardLikeDisLikeCreateOrConnectWithoutUserInput | BoardLikeDisLikeCreateOrConnectWithoutUserInput[]
    upsert?: BoardLikeDisLikeUpsertWithWhereUniqueWithoutUserInput | BoardLikeDisLikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BoardLikeDisLikeCreateManyUserInputEnvelope
    set?: BoardLikeDisLikeWhereUniqueInput | BoardLikeDisLikeWhereUniqueInput[]
    disconnect?: BoardLikeDisLikeWhereUniqueInput | BoardLikeDisLikeWhereUniqueInput[]
    delete?: BoardLikeDisLikeWhereUniqueInput | BoardLikeDisLikeWhereUniqueInput[]
    connect?: BoardLikeDisLikeWhereUniqueInput | BoardLikeDisLikeWhereUniqueInput[]
    update?: BoardLikeDisLikeUpdateWithWhereUniqueWithoutUserInput | BoardLikeDisLikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BoardLikeDisLikeUpdateManyWithWhereWithoutUserInput | BoardLikeDisLikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BoardLikeDisLikeScalarWhereInput | BoardLikeDisLikeScalarWhereInput[]
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type ConversationUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ConversationCreateWithoutUsersInput, ConversationUncheckedCreateWithoutUsersInput> | ConversationCreateWithoutUsersInput[] | ConversationUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutUsersInput | ConversationCreateOrConnectWithoutUsersInput[]
    upsert?: ConversationUpsertWithWhereUniqueWithoutUsersInput | ConversationUpsertWithWhereUniqueWithoutUsersInput[]
    set?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    disconnect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    delete?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    update?: ConversationUpdateWithWhereUniqueWithoutUsersInput | ConversationUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ConversationUpdateManyWithWhereWithoutUsersInput | ConversationUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput> | MessageCreateWithoutReceiverInput[] | MessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReceiverInput | MessageCreateOrConnectWithoutReceiverInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutReceiverInput | MessageUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: MessageCreateManyReceiverInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutReceiverInput | MessageUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutReceiverInput | MessageUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProductCreateWithoutUserInput, ProductUncheckedCreateWithoutUserInput> | ProductCreateWithoutUserInput[] | ProductUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutUserInput | ProductCreateOrConnectWithoutUserInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutUserInput | ProductUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProductCreateManyUserInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutUserInput | ProductUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutUserInput | ProductUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type BoardUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BoardCreateWithoutUserInput, BoardUncheckedCreateWithoutUserInput> | BoardCreateWithoutUserInput[] | BoardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BoardCreateOrConnectWithoutUserInput | BoardCreateOrConnectWithoutUserInput[]
    upsert?: BoardUpsertWithWhereUniqueWithoutUserInput | BoardUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BoardCreateManyUserInputEnvelope
    set?: BoardWhereUniqueInput | BoardWhereUniqueInput[]
    disconnect?: BoardWhereUniqueInput | BoardWhereUniqueInput[]
    delete?: BoardWhereUniqueInput | BoardWhereUniqueInput[]
    connect?: BoardWhereUniqueInput | BoardWhereUniqueInput[]
    update?: BoardUpdateWithWhereUniqueWithoutUserInput | BoardUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BoardUpdateManyWithWhereWithoutUserInput | BoardUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BoardScalarWhereInput | BoardScalarWhereInput[]
  }

  export type ViewdBoardStoreUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ViewdBoardStoreCreateWithoutUserInput, ViewdBoardStoreUncheckedCreateWithoutUserInput> | ViewdBoardStoreCreateWithoutUserInput[] | ViewdBoardStoreUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ViewdBoardStoreCreateOrConnectWithoutUserInput | ViewdBoardStoreCreateOrConnectWithoutUserInput[]
    upsert?: ViewdBoardStoreUpsertWithWhereUniqueWithoutUserInput | ViewdBoardStoreUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ViewdBoardStoreCreateManyUserInputEnvelope
    set?: ViewdBoardStoreWhereUniqueInput | ViewdBoardStoreWhereUniqueInput[]
    disconnect?: ViewdBoardStoreWhereUniqueInput | ViewdBoardStoreWhereUniqueInput[]
    delete?: ViewdBoardStoreWhereUniqueInput | ViewdBoardStoreWhereUniqueInput[]
    connect?: ViewdBoardStoreWhereUniqueInput | ViewdBoardStoreWhereUniqueInput[]
    update?: ViewdBoardStoreUpdateWithWhereUniqueWithoutUserInput | ViewdBoardStoreUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ViewdBoardStoreUpdateManyWithWhereWithoutUserInput | ViewdBoardStoreUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ViewdBoardStoreScalarWhereInput | ViewdBoardStoreScalarWhereInput[]
  }

  export type ViewdProductStoreUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ViewdProductStoreCreateWithoutUserInput, ViewdProductStoreUncheckedCreateWithoutUserInput> | ViewdProductStoreCreateWithoutUserInput[] | ViewdProductStoreUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ViewdProductStoreCreateOrConnectWithoutUserInput | ViewdProductStoreCreateOrConnectWithoutUserInput[]
    upsert?: ViewdProductStoreUpsertWithWhereUniqueWithoutUserInput | ViewdProductStoreUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ViewdProductStoreCreateManyUserInputEnvelope
    set?: ViewdProductStoreWhereUniqueInput | ViewdProductStoreWhereUniqueInput[]
    disconnect?: ViewdProductStoreWhereUniqueInput | ViewdProductStoreWhereUniqueInput[]
    delete?: ViewdProductStoreWhereUniqueInput | ViewdProductStoreWhereUniqueInput[]
    connect?: ViewdProductStoreWhereUniqueInput | ViewdProductStoreWhereUniqueInput[]
    update?: ViewdProductStoreUpdateWithWhereUniqueWithoutUserInput | ViewdProductStoreUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ViewdProductStoreUpdateManyWithWhereWithoutUserInput | ViewdProductStoreUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ViewdProductStoreScalarWhereInput | ViewdProductStoreScalarWhereInput[]
  }

  export type BoardLikeDisLikeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BoardLikeDisLikeCreateWithoutUserInput, BoardLikeDisLikeUncheckedCreateWithoutUserInput> | BoardLikeDisLikeCreateWithoutUserInput[] | BoardLikeDisLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BoardLikeDisLikeCreateOrConnectWithoutUserInput | BoardLikeDisLikeCreateOrConnectWithoutUserInput[]
    upsert?: BoardLikeDisLikeUpsertWithWhereUniqueWithoutUserInput | BoardLikeDisLikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BoardLikeDisLikeCreateManyUserInputEnvelope
    set?: BoardLikeDisLikeWhereUniqueInput | BoardLikeDisLikeWhereUniqueInput[]
    disconnect?: BoardLikeDisLikeWhereUniqueInput | BoardLikeDisLikeWhereUniqueInput[]
    delete?: BoardLikeDisLikeWhereUniqueInput | BoardLikeDisLikeWhereUniqueInput[]
    connect?: BoardLikeDisLikeWhereUniqueInput | BoardLikeDisLikeWhereUniqueInput[]
    update?: BoardLikeDisLikeUpdateWithWhereUniqueWithoutUserInput | BoardLikeDisLikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BoardLikeDisLikeUpdateManyWithWhereWithoutUserInput | BoardLikeDisLikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BoardLikeDisLikeScalarWhereInput | BoardLikeDisLikeScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type ConversationUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ConversationCreateWithoutUsersInput, ConversationUncheckedCreateWithoutUsersInput> | ConversationCreateWithoutUsersInput[] | ConversationUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutUsersInput | ConversationCreateOrConnectWithoutUsersInput[]
    upsert?: ConversationUpsertWithWhereUniqueWithoutUsersInput | ConversationUpsertWithWhereUniqueWithoutUsersInput[]
    set?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    disconnect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    delete?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    update?: ConversationUpdateWithWhereUniqueWithoutUsersInput | ConversationUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ConversationUpdateManyWithWhereWithoutUsersInput | ConversationUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput> | MessageCreateWithoutReceiverInput[] | MessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReceiverInput | MessageCreateOrConnectWithoutReceiverInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutReceiverInput | MessageUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: MessageCreateManyReceiverInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutReceiverInput | MessageUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutReceiverInput | MessageUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type ViewdBoardStoreCreateNestedManyWithoutBoardInput = {
    create?: XOR<ViewdBoardStoreCreateWithoutBoardInput, ViewdBoardStoreUncheckedCreateWithoutBoardInput> | ViewdBoardStoreCreateWithoutBoardInput[] | ViewdBoardStoreUncheckedCreateWithoutBoardInput[]
    connectOrCreate?: ViewdBoardStoreCreateOrConnectWithoutBoardInput | ViewdBoardStoreCreateOrConnectWithoutBoardInput[]
    createMany?: ViewdBoardStoreCreateManyBoardInputEnvelope
    connect?: ViewdBoardStoreWhereUniqueInput | ViewdBoardStoreWhereUniqueInput[]
  }

  export type BoardLikeDisLikeCreateNestedManyWithoutBoardInput = {
    create?: XOR<BoardLikeDisLikeCreateWithoutBoardInput, BoardLikeDisLikeUncheckedCreateWithoutBoardInput> | BoardLikeDisLikeCreateWithoutBoardInput[] | BoardLikeDisLikeUncheckedCreateWithoutBoardInput[]
    connectOrCreate?: BoardLikeDisLikeCreateOrConnectWithoutBoardInput | BoardLikeDisLikeCreateOrConnectWithoutBoardInput[]
    createMany?: BoardLikeDisLikeCreateManyBoardInputEnvelope
    connect?: BoardLikeDisLikeWhereUniqueInput | BoardLikeDisLikeWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutBoardInput = {
    create?: XOR<UserCreateWithoutBoardInput, UserUncheckedCreateWithoutBoardInput>
    connectOrCreate?: UserCreateOrConnectWithoutBoardInput
    connect?: UserWhereUniqueInput
  }

  export type ViewdBoardStoreUncheckedCreateNestedManyWithoutBoardInput = {
    create?: XOR<ViewdBoardStoreCreateWithoutBoardInput, ViewdBoardStoreUncheckedCreateWithoutBoardInput> | ViewdBoardStoreCreateWithoutBoardInput[] | ViewdBoardStoreUncheckedCreateWithoutBoardInput[]
    connectOrCreate?: ViewdBoardStoreCreateOrConnectWithoutBoardInput | ViewdBoardStoreCreateOrConnectWithoutBoardInput[]
    createMany?: ViewdBoardStoreCreateManyBoardInputEnvelope
    connect?: ViewdBoardStoreWhereUniqueInput | ViewdBoardStoreWhereUniqueInput[]
  }

  export type BoardLikeDisLikeUncheckedCreateNestedManyWithoutBoardInput = {
    create?: XOR<BoardLikeDisLikeCreateWithoutBoardInput, BoardLikeDisLikeUncheckedCreateWithoutBoardInput> | BoardLikeDisLikeCreateWithoutBoardInput[] | BoardLikeDisLikeUncheckedCreateWithoutBoardInput[]
    connectOrCreate?: BoardLikeDisLikeCreateOrConnectWithoutBoardInput | BoardLikeDisLikeCreateOrConnectWithoutBoardInput[]
    createMany?: BoardLikeDisLikeCreateManyBoardInputEnvelope
    connect?: BoardLikeDisLikeWhereUniqueInput | BoardLikeDisLikeWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ViewdBoardStoreUpdateManyWithoutBoardNestedInput = {
    create?: XOR<ViewdBoardStoreCreateWithoutBoardInput, ViewdBoardStoreUncheckedCreateWithoutBoardInput> | ViewdBoardStoreCreateWithoutBoardInput[] | ViewdBoardStoreUncheckedCreateWithoutBoardInput[]
    connectOrCreate?: ViewdBoardStoreCreateOrConnectWithoutBoardInput | ViewdBoardStoreCreateOrConnectWithoutBoardInput[]
    upsert?: ViewdBoardStoreUpsertWithWhereUniqueWithoutBoardInput | ViewdBoardStoreUpsertWithWhereUniqueWithoutBoardInput[]
    createMany?: ViewdBoardStoreCreateManyBoardInputEnvelope
    set?: ViewdBoardStoreWhereUniqueInput | ViewdBoardStoreWhereUniqueInput[]
    disconnect?: ViewdBoardStoreWhereUniqueInput | ViewdBoardStoreWhereUniqueInput[]
    delete?: ViewdBoardStoreWhereUniqueInput | ViewdBoardStoreWhereUniqueInput[]
    connect?: ViewdBoardStoreWhereUniqueInput | ViewdBoardStoreWhereUniqueInput[]
    update?: ViewdBoardStoreUpdateWithWhereUniqueWithoutBoardInput | ViewdBoardStoreUpdateWithWhereUniqueWithoutBoardInput[]
    updateMany?: ViewdBoardStoreUpdateManyWithWhereWithoutBoardInput | ViewdBoardStoreUpdateManyWithWhereWithoutBoardInput[]
    deleteMany?: ViewdBoardStoreScalarWhereInput | ViewdBoardStoreScalarWhereInput[]
  }

  export type BoardLikeDisLikeUpdateManyWithoutBoardNestedInput = {
    create?: XOR<BoardLikeDisLikeCreateWithoutBoardInput, BoardLikeDisLikeUncheckedCreateWithoutBoardInput> | BoardLikeDisLikeCreateWithoutBoardInput[] | BoardLikeDisLikeUncheckedCreateWithoutBoardInput[]
    connectOrCreate?: BoardLikeDisLikeCreateOrConnectWithoutBoardInput | BoardLikeDisLikeCreateOrConnectWithoutBoardInput[]
    upsert?: BoardLikeDisLikeUpsertWithWhereUniqueWithoutBoardInput | BoardLikeDisLikeUpsertWithWhereUniqueWithoutBoardInput[]
    createMany?: BoardLikeDisLikeCreateManyBoardInputEnvelope
    set?: BoardLikeDisLikeWhereUniqueInput | BoardLikeDisLikeWhereUniqueInput[]
    disconnect?: BoardLikeDisLikeWhereUniqueInput | BoardLikeDisLikeWhereUniqueInput[]
    delete?: BoardLikeDisLikeWhereUniqueInput | BoardLikeDisLikeWhereUniqueInput[]
    connect?: BoardLikeDisLikeWhereUniqueInput | BoardLikeDisLikeWhereUniqueInput[]
    update?: BoardLikeDisLikeUpdateWithWhereUniqueWithoutBoardInput | BoardLikeDisLikeUpdateWithWhereUniqueWithoutBoardInput[]
    updateMany?: BoardLikeDisLikeUpdateManyWithWhereWithoutBoardInput | BoardLikeDisLikeUpdateManyWithWhereWithoutBoardInput[]
    deleteMany?: BoardLikeDisLikeScalarWhereInput | BoardLikeDisLikeScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutBoardNestedInput = {
    create?: XOR<UserCreateWithoutBoardInput, UserUncheckedCreateWithoutBoardInput>
    connectOrCreate?: UserCreateOrConnectWithoutBoardInput
    upsert?: UserUpsertWithoutBoardInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBoardInput, UserUpdateWithoutBoardInput>, UserUncheckedUpdateWithoutBoardInput>
  }

  export type ViewdBoardStoreUncheckedUpdateManyWithoutBoardNestedInput = {
    create?: XOR<ViewdBoardStoreCreateWithoutBoardInput, ViewdBoardStoreUncheckedCreateWithoutBoardInput> | ViewdBoardStoreCreateWithoutBoardInput[] | ViewdBoardStoreUncheckedCreateWithoutBoardInput[]
    connectOrCreate?: ViewdBoardStoreCreateOrConnectWithoutBoardInput | ViewdBoardStoreCreateOrConnectWithoutBoardInput[]
    upsert?: ViewdBoardStoreUpsertWithWhereUniqueWithoutBoardInput | ViewdBoardStoreUpsertWithWhereUniqueWithoutBoardInput[]
    createMany?: ViewdBoardStoreCreateManyBoardInputEnvelope
    set?: ViewdBoardStoreWhereUniqueInput | ViewdBoardStoreWhereUniqueInput[]
    disconnect?: ViewdBoardStoreWhereUniqueInput | ViewdBoardStoreWhereUniqueInput[]
    delete?: ViewdBoardStoreWhereUniqueInput | ViewdBoardStoreWhereUniqueInput[]
    connect?: ViewdBoardStoreWhereUniqueInput | ViewdBoardStoreWhereUniqueInput[]
    update?: ViewdBoardStoreUpdateWithWhereUniqueWithoutBoardInput | ViewdBoardStoreUpdateWithWhereUniqueWithoutBoardInput[]
    updateMany?: ViewdBoardStoreUpdateManyWithWhereWithoutBoardInput | ViewdBoardStoreUpdateManyWithWhereWithoutBoardInput[]
    deleteMany?: ViewdBoardStoreScalarWhereInput | ViewdBoardStoreScalarWhereInput[]
  }

  export type BoardLikeDisLikeUncheckedUpdateManyWithoutBoardNestedInput = {
    create?: XOR<BoardLikeDisLikeCreateWithoutBoardInput, BoardLikeDisLikeUncheckedCreateWithoutBoardInput> | BoardLikeDisLikeCreateWithoutBoardInput[] | BoardLikeDisLikeUncheckedCreateWithoutBoardInput[]
    connectOrCreate?: BoardLikeDisLikeCreateOrConnectWithoutBoardInput | BoardLikeDisLikeCreateOrConnectWithoutBoardInput[]
    upsert?: BoardLikeDisLikeUpsertWithWhereUniqueWithoutBoardInput | BoardLikeDisLikeUpsertWithWhereUniqueWithoutBoardInput[]
    createMany?: BoardLikeDisLikeCreateManyBoardInputEnvelope
    set?: BoardLikeDisLikeWhereUniqueInput | BoardLikeDisLikeWhereUniqueInput[]
    disconnect?: BoardLikeDisLikeWhereUniqueInput | BoardLikeDisLikeWhereUniqueInput[]
    delete?: BoardLikeDisLikeWhereUniqueInput | BoardLikeDisLikeWhereUniqueInput[]
    connect?: BoardLikeDisLikeWhereUniqueInput | BoardLikeDisLikeWhereUniqueInput[]
    update?: BoardLikeDisLikeUpdateWithWhereUniqueWithoutBoardInput | BoardLikeDisLikeUpdateWithWhereUniqueWithoutBoardInput[]
    updateMany?: BoardLikeDisLikeUpdateManyWithWhereWithoutBoardInput | BoardLikeDisLikeUpdateManyWithWhereWithoutBoardInput[]
    deleteMany?: BoardLikeDisLikeScalarWhereInput | BoardLikeDisLikeScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBoardLikeDisLikeInput = {
    create?: XOR<UserCreateWithoutBoardLikeDisLikeInput, UserUncheckedCreateWithoutBoardLikeDisLikeInput>
    connectOrCreate?: UserCreateOrConnectWithoutBoardLikeDisLikeInput
    connect?: UserWhereUniqueInput
  }

  export type BoardCreateNestedOneWithoutBoardLikeDisLikeInput = {
    create?: XOR<BoardCreateWithoutBoardLikeDisLikeInput, BoardUncheckedCreateWithoutBoardLikeDisLikeInput>
    connectOrCreate?: BoardCreateOrConnectWithoutBoardLikeDisLikeInput
    connect?: BoardWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutBoardLikeDisLikeNestedInput = {
    create?: XOR<UserCreateWithoutBoardLikeDisLikeInput, UserUncheckedCreateWithoutBoardLikeDisLikeInput>
    connectOrCreate?: UserCreateOrConnectWithoutBoardLikeDisLikeInput
    upsert?: UserUpsertWithoutBoardLikeDisLikeInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBoardLikeDisLikeInput, UserUpdateWithoutBoardLikeDisLikeInput>, UserUncheckedUpdateWithoutBoardLikeDisLikeInput>
  }

  export type BoardUpdateOneRequiredWithoutBoardLikeDisLikeNestedInput = {
    create?: XOR<BoardCreateWithoutBoardLikeDisLikeInput, BoardUncheckedCreateWithoutBoardLikeDisLikeInput>
    connectOrCreate?: BoardCreateOrConnectWithoutBoardLikeDisLikeInput
    upsert?: BoardUpsertWithoutBoardLikeDisLikeInput
    connect?: BoardWhereUniqueInput
    update?: XOR<XOR<BoardUpdateToOneWithWhereWithoutBoardLikeDisLikeInput, BoardUpdateWithoutBoardLikeDisLikeInput>, BoardUncheckedUpdateWithoutBoardLikeDisLikeInput>
  }

  export type ProductCreateimageSrcInput = {
    set: string[]
  }

  export type ProductCreatecategoriesInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutProductInput = {
    create?: XOR<UserCreateWithoutProductInput, UserUncheckedCreateWithoutProductInput>
    connectOrCreate?: UserCreateOrConnectWithoutProductInput
    connect?: UserWhereUniqueInput
  }

  export type ViewdProductStoreCreateNestedManyWithoutProductInput = {
    create?: XOR<ViewdProductStoreCreateWithoutProductInput, ViewdProductStoreUncheckedCreateWithoutProductInput> | ViewdProductStoreCreateWithoutProductInput[] | ViewdProductStoreUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ViewdProductStoreCreateOrConnectWithoutProductInput | ViewdProductStoreCreateOrConnectWithoutProductInput[]
    createMany?: ViewdProductStoreCreateManyProductInputEnvelope
    connect?: ViewdProductStoreWhereUniqueInput | ViewdProductStoreWhereUniqueInput[]
  }

  export type ViewdProductStoreUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ViewdProductStoreCreateWithoutProductInput, ViewdProductStoreUncheckedCreateWithoutProductInput> | ViewdProductStoreCreateWithoutProductInput[] | ViewdProductStoreUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ViewdProductStoreCreateOrConnectWithoutProductInput | ViewdProductStoreCreateOrConnectWithoutProductInput[]
    createMany?: ViewdProductStoreCreateManyProductInputEnvelope
    connect?: ViewdProductStoreWhereUniqueInput | ViewdProductStoreWhereUniqueInput[]
  }

  export type ProductUpdateimageSrcInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ProductUpdatecategoriesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutProductNestedInput = {
    create?: XOR<UserCreateWithoutProductInput, UserUncheckedCreateWithoutProductInput>
    connectOrCreate?: UserCreateOrConnectWithoutProductInput
    upsert?: UserUpsertWithoutProductInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProductInput, UserUpdateWithoutProductInput>, UserUncheckedUpdateWithoutProductInput>
  }

  export type ViewdProductStoreUpdateManyWithoutProductNestedInput = {
    create?: XOR<ViewdProductStoreCreateWithoutProductInput, ViewdProductStoreUncheckedCreateWithoutProductInput> | ViewdProductStoreCreateWithoutProductInput[] | ViewdProductStoreUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ViewdProductStoreCreateOrConnectWithoutProductInput | ViewdProductStoreCreateOrConnectWithoutProductInput[]
    upsert?: ViewdProductStoreUpsertWithWhereUniqueWithoutProductInput | ViewdProductStoreUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ViewdProductStoreCreateManyProductInputEnvelope
    set?: ViewdProductStoreWhereUniqueInput | ViewdProductStoreWhereUniqueInput[]
    disconnect?: ViewdProductStoreWhereUniqueInput | ViewdProductStoreWhereUniqueInput[]
    delete?: ViewdProductStoreWhereUniqueInput | ViewdProductStoreWhereUniqueInput[]
    connect?: ViewdProductStoreWhereUniqueInput | ViewdProductStoreWhereUniqueInput[]
    update?: ViewdProductStoreUpdateWithWhereUniqueWithoutProductInput | ViewdProductStoreUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ViewdProductStoreUpdateManyWithWhereWithoutProductInput | ViewdProductStoreUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ViewdProductStoreScalarWhereInput | ViewdProductStoreScalarWhereInput[]
  }

  export type ViewdProductStoreUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ViewdProductStoreCreateWithoutProductInput, ViewdProductStoreUncheckedCreateWithoutProductInput> | ViewdProductStoreCreateWithoutProductInput[] | ViewdProductStoreUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ViewdProductStoreCreateOrConnectWithoutProductInput | ViewdProductStoreCreateOrConnectWithoutProductInput[]
    upsert?: ViewdProductStoreUpsertWithWhereUniqueWithoutProductInput | ViewdProductStoreUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ViewdProductStoreCreateManyProductInputEnvelope
    set?: ViewdProductStoreWhereUniqueInput | ViewdProductStoreWhereUniqueInput[]
    disconnect?: ViewdProductStoreWhereUniqueInput | ViewdProductStoreWhereUniqueInput[]
    delete?: ViewdProductStoreWhereUniqueInput | ViewdProductStoreWhereUniqueInput[]
    connect?: ViewdProductStoreWhereUniqueInput | ViewdProductStoreWhereUniqueInput[]
    update?: ViewdProductStoreUpdateWithWhereUniqueWithoutProductInput | ViewdProductStoreUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ViewdProductStoreUpdateManyWithWhereWithoutProductInput | ViewdProductStoreUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ViewdProductStoreScalarWhereInput | ViewdProductStoreScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutViewdBoardStoreInput = {
    create?: XOR<UserCreateWithoutViewdBoardStoreInput, UserUncheckedCreateWithoutViewdBoardStoreInput>
    connectOrCreate?: UserCreateOrConnectWithoutViewdBoardStoreInput
    connect?: UserWhereUniqueInput
  }

  export type BoardCreateNestedOneWithoutViewdBoardStoreInput = {
    create?: XOR<BoardCreateWithoutViewdBoardStoreInput, BoardUncheckedCreateWithoutViewdBoardStoreInput>
    connectOrCreate?: BoardCreateOrConnectWithoutViewdBoardStoreInput
    connect?: BoardWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutViewdBoardStoreNestedInput = {
    create?: XOR<UserCreateWithoutViewdBoardStoreInput, UserUncheckedCreateWithoutViewdBoardStoreInput>
    connectOrCreate?: UserCreateOrConnectWithoutViewdBoardStoreInput
    upsert?: UserUpsertWithoutViewdBoardStoreInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutViewdBoardStoreInput, UserUpdateWithoutViewdBoardStoreInput>, UserUncheckedUpdateWithoutViewdBoardStoreInput>
  }

  export type BoardUpdateOneRequiredWithoutViewdBoardStoreNestedInput = {
    create?: XOR<BoardCreateWithoutViewdBoardStoreInput, BoardUncheckedCreateWithoutViewdBoardStoreInput>
    connectOrCreate?: BoardCreateOrConnectWithoutViewdBoardStoreInput
    upsert?: BoardUpsertWithoutViewdBoardStoreInput
    connect?: BoardWhereUniqueInput
    update?: XOR<XOR<BoardUpdateToOneWithWhereWithoutViewdBoardStoreInput, BoardUpdateWithoutViewdBoardStoreInput>, BoardUncheckedUpdateWithoutViewdBoardStoreInput>
  }

  export type UserCreateNestedOneWithoutViewdProductStoreInput = {
    create?: XOR<UserCreateWithoutViewdProductStoreInput, UserUncheckedCreateWithoutViewdProductStoreInput>
    connectOrCreate?: UserCreateOrConnectWithoutViewdProductStoreInput
    connect?: UserWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutViewdProductStoreInput = {
    create?: XOR<ProductCreateWithoutViewdProductStoreInput, ProductUncheckedCreateWithoutViewdProductStoreInput>
    connectOrCreate?: ProductCreateOrConnectWithoutViewdProductStoreInput
    connect?: ProductWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutViewdProductStoreNestedInput = {
    create?: XOR<UserCreateWithoutViewdProductStoreInput, UserUncheckedCreateWithoutViewdProductStoreInput>
    connectOrCreate?: UserCreateOrConnectWithoutViewdProductStoreInput
    upsert?: UserUpsertWithoutViewdProductStoreInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutViewdProductStoreInput, UserUpdateWithoutViewdProductStoreInput>, UserUncheckedUpdateWithoutViewdProductStoreInput>
  }

  export type ProductUpdateOneRequiredWithoutViewdProductStoreNestedInput = {
    create?: XOR<ProductCreateWithoutViewdProductStoreInput, ProductUncheckedCreateWithoutViewdProductStoreInput>
    connectOrCreate?: ProductCreateOrConnectWithoutViewdProductStoreInput
    upsert?: ProductUpsertWithoutViewdProductStoreInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutViewdProductStoreInput, ProductUpdateWithoutViewdProductStoreInput>, ProductUncheckedUpdateWithoutViewdProductStoreInput>
  }

  export type UserCreateNestedManyWithoutConversationsInput = {
    create?: XOR<UserCreateWithoutConversationsInput, UserUncheckedCreateWithoutConversationsInput> | UserCreateWithoutConversationsInput[] | UserUncheckedCreateWithoutConversationsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutConversationsInput | UserCreateOrConnectWithoutConversationsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutConversationInput = {
    create?: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput> | MessageCreateWithoutConversationInput[] | MessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutConversationInput | MessageCreateOrConnectWithoutConversationInput[]
    createMany?: MessageCreateManyConversationInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutConversationsInput = {
    create?: XOR<UserCreateWithoutConversationsInput, UserUncheckedCreateWithoutConversationsInput> | UserCreateWithoutConversationsInput[] | UserUncheckedCreateWithoutConversationsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutConversationsInput | UserCreateOrConnectWithoutConversationsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutConversationInput = {
    create?: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput> | MessageCreateWithoutConversationInput[] | MessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutConversationInput | MessageCreateOrConnectWithoutConversationInput[]
    createMany?: MessageCreateManyConversationInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutConversationsNestedInput = {
    create?: XOR<UserCreateWithoutConversationsInput, UserUncheckedCreateWithoutConversationsInput> | UserCreateWithoutConversationsInput[] | UserUncheckedCreateWithoutConversationsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutConversationsInput | UserCreateOrConnectWithoutConversationsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutConversationsInput | UserUpsertWithWhereUniqueWithoutConversationsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutConversationsInput | UserUpdateWithWhereUniqueWithoutConversationsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutConversationsInput | UserUpdateManyWithWhereWithoutConversationsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutConversationNestedInput = {
    create?: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput> | MessageCreateWithoutConversationInput[] | MessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutConversationInput | MessageCreateOrConnectWithoutConversationInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutConversationInput | MessageUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: MessageCreateManyConversationInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutConversationInput | MessageUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutConversationInput | MessageUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutConversationsNestedInput = {
    create?: XOR<UserCreateWithoutConversationsInput, UserUncheckedCreateWithoutConversationsInput> | UserCreateWithoutConversationsInput[] | UserUncheckedCreateWithoutConversationsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutConversationsInput | UserCreateOrConnectWithoutConversationsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutConversationsInput | UserUpsertWithWhereUniqueWithoutConversationsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutConversationsInput | UserUpdateWithWhereUniqueWithoutConversationsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutConversationsInput | UserUpdateManyWithWhereWithoutConversationsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutConversationNestedInput = {
    create?: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput> | MessageCreateWithoutConversationInput[] | MessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutConversationInput | MessageCreateOrConnectWithoutConversationInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutConversationInput | MessageUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: MessageCreateManyConversationInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutConversationInput | MessageUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutConversationInput | MessageUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSendMessagesInput = {
    create?: XOR<UserCreateWithoutSendMessagesInput, UserUncheckedCreateWithoutSendMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSendMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceivedMessagesInput = {
    create?: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type ConversationCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ConversationCreateWithoutMessagesInput, ConversationUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ConversationCreateOrConnectWithoutMessagesInput
    connect?: ConversationWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSendMessagesNestedInput = {
    create?: XOR<UserCreateWithoutSendMessagesInput, UserUncheckedCreateWithoutSendMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSendMessagesInput
    upsert?: UserUpsertWithoutSendMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSendMessagesInput, UserUpdateWithoutSendMessagesInput>, UserUncheckedUpdateWithoutSendMessagesInput>
  }

  export type UserUpdateOneRequiredWithoutReceivedMessagesNestedInput = {
    create?: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedMessagesInput
    upsert?: UserUpsertWithoutReceivedMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceivedMessagesInput, UserUpdateWithoutReceivedMessagesInput>, UserUncheckedUpdateWithoutReceivedMessagesInput>
  }

  export type ConversationUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<ConversationCreateWithoutMessagesInput, ConversationUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ConversationCreateOrConnectWithoutMessagesInput
    upsert?: ConversationUpsertWithoutMessagesInput
    connect?: ConversationWhereUniqueInput
    update?: XOR<XOR<ConversationUpdateToOneWithWhereWithoutMessagesInput, ConversationUpdateWithoutMessagesInput>, ConversationUncheckedUpdateWithoutMessagesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumUserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeFilter<$PrismaModel> | $Enums.UserType
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumUserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTypeFilter<$PrismaModel>
    _max?: NestedEnumUserTypeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    accessToken?: string | null
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    accessToken?: string | null
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProductCreateWithoutUserInput = {
    id?: string
    title: string
    description: string
    imageSrc?: ProductCreateimageSrcInput | string[]
    price: number
    latitude?: number | null
    longitude?: number | null
    address?: string | null
    addressDetail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sold?: boolean
    views?: number
    delivery?: boolean
    faceToFace?: boolean
    categories?: ProductCreatecategoriesInput | string[]
    ViewdProductStore?: ViewdProductStoreCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    description: string
    imageSrc?: ProductCreateimageSrcInput | string[]
    price: number
    latitude?: number | null
    longitude?: number | null
    address?: string | null
    addressDetail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sold?: boolean
    views?: number
    delivery?: boolean
    faceToFace?: boolean
    categories?: ProductCreatecategoriesInput | string[]
    ViewdProductStore?: ViewdProductStoreUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutUserInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutUserInput, ProductUncheckedCreateWithoutUserInput>
  }

  export type ProductCreateManyUserInputEnvelope = {
    data: ProductCreateManyUserInput | ProductCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BoardCreateWithoutUserInput = {
    id?: string
    title: string
    description: string
    category?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: number
    dislikes?: number
    views?: number
    ViewdBoardStore?: ViewdBoardStoreCreateNestedManyWithoutBoardInput
    BoardLikeDisLike?: BoardLikeDisLikeCreateNestedManyWithoutBoardInput
  }

  export type BoardUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    description: string
    category?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: number
    dislikes?: number
    views?: number
    ViewdBoardStore?: ViewdBoardStoreUncheckedCreateNestedManyWithoutBoardInput
    BoardLikeDisLike?: BoardLikeDisLikeUncheckedCreateNestedManyWithoutBoardInput
  }

  export type BoardCreateOrConnectWithoutUserInput = {
    where: BoardWhereUniqueInput
    create: XOR<BoardCreateWithoutUserInput, BoardUncheckedCreateWithoutUserInput>
  }

  export type BoardCreateManyUserInputEnvelope = {
    data: BoardCreateManyUserInput | BoardCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ViewdBoardStoreCreateWithoutUserInput = {
    id?: string
    viewedAt?: Date | string
    board: BoardCreateNestedOneWithoutViewdBoardStoreInput
  }

  export type ViewdBoardStoreUncheckedCreateWithoutUserInput = {
    id?: string
    boardId: string
    viewedAt?: Date | string
  }

  export type ViewdBoardStoreCreateOrConnectWithoutUserInput = {
    where: ViewdBoardStoreWhereUniqueInput
    create: XOR<ViewdBoardStoreCreateWithoutUserInput, ViewdBoardStoreUncheckedCreateWithoutUserInput>
  }

  export type ViewdBoardStoreCreateManyUserInputEnvelope = {
    data: ViewdBoardStoreCreateManyUserInput | ViewdBoardStoreCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ViewdProductStoreCreateWithoutUserInput = {
    id?: string
    viewedAt?: Date | string
    product: ProductCreateNestedOneWithoutViewdProductStoreInput
  }

  export type ViewdProductStoreUncheckedCreateWithoutUserInput = {
    id?: string
    productId: string
    viewedAt?: Date | string
  }

  export type ViewdProductStoreCreateOrConnectWithoutUserInput = {
    where: ViewdProductStoreWhereUniqueInput
    create: XOR<ViewdProductStoreCreateWithoutUserInput, ViewdProductStoreUncheckedCreateWithoutUserInput>
  }

  export type ViewdProductStoreCreateManyUserInputEnvelope = {
    data: ViewdProductStoreCreateManyUserInput | ViewdProductStoreCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BoardLikeDisLikeCreateWithoutUserInput = {
    type: string
    createdAt?: Date | string
    board: BoardCreateNestedOneWithoutBoardLikeDisLikeInput
  }

  export type BoardLikeDisLikeUncheckedCreateWithoutUserInput = {
    id?: number
    type: string
    createdAt?: Date | string
    boardId: string
  }

  export type BoardLikeDisLikeCreateOrConnectWithoutUserInput = {
    where: BoardLikeDisLikeWhereUniqueInput
    create: XOR<BoardLikeDisLikeCreateWithoutUserInput, BoardLikeDisLikeUncheckedCreateWithoutUserInput>
  }

  export type BoardLikeDisLikeCreateManyUserInputEnvelope = {
    data: BoardLikeDisLikeCreateManyUserInput | BoardLikeDisLikeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ConversationCreateWithoutUsersInput = {
    id?: string
    name?: string | null
    senderId: string
    receiverId: string
    createdAt?: Date | string
    messages?: MessageCreateNestedManyWithoutConversationInput
  }

  export type ConversationUncheckedCreateWithoutUsersInput = {
    id?: string
    name?: string | null
    senderId: string
    receiverId: string
    createdAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutConversationInput
  }

  export type ConversationCreateOrConnectWithoutUsersInput = {
    where: ConversationWhereUniqueInput
    create: XOR<ConversationCreateWithoutUsersInput, ConversationUncheckedCreateWithoutUsersInput>
  }

  export type MessageCreateWithoutSenderInput = {
    id?: string
    text?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    receiver: UserCreateNestedOneWithoutReceivedMessagesInput
    conversation: ConversationCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutSenderInput = {
    id?: string
    text?: string | null
    image?: string | null
    receiverId: string
    conversationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageCreateOrConnectWithoutSenderInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageCreateManySenderInputEnvelope = {
    data: MessageCreateManySenderInput | MessageCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutReceiverInput = {
    id?: string
    text?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sender: UserCreateNestedOneWithoutSendMessagesInput
    conversation: ConversationCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutReceiverInput = {
    id?: string
    text?: string | null
    image?: string | null
    senderId: string
    conversationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageCreateOrConnectWithoutReceiverInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput>
  }

  export type MessageCreateManyReceiverInputEnvelope = {
    data: MessageCreateManyReceiverInput | MessageCreateManyReceiverInput[]
    skipDuplicates?: boolean
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: StringNullableFilter<"Session"> | string | null
    sessionToken?: StringFilter<"Session"> | string
    accessToken?: StringNullableFilter<"Session"> | string | null
    expires?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type ProductUpsertWithWhereUniqueWithoutUserInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutUserInput, ProductUncheckedUpdateWithoutUserInput>
    create: XOR<ProductCreateWithoutUserInput, ProductUncheckedCreateWithoutUserInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutUserInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutUserInput, ProductUncheckedUpdateWithoutUserInput>
  }

  export type ProductUpdateManyWithWhereWithoutUserInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutUserInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: StringFilter<"Product"> | string
    title?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    imageSrc?: StringNullableListFilter<"Product">
    userId?: StringFilter<"Product"> | string
    price?: IntFilter<"Product"> | number
    latitude?: FloatNullableFilter<"Product"> | number | null
    longitude?: FloatNullableFilter<"Product"> | number | null
    address?: StringNullableFilter<"Product"> | string | null
    addressDetail?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    sold?: BoolFilter<"Product"> | boolean
    views?: IntFilter<"Product"> | number
    delivery?: BoolFilter<"Product"> | boolean
    faceToFace?: BoolFilter<"Product"> | boolean
    categories?: StringNullableListFilter<"Product">
  }

  export type BoardUpsertWithWhereUniqueWithoutUserInput = {
    where: BoardWhereUniqueInput
    update: XOR<BoardUpdateWithoutUserInput, BoardUncheckedUpdateWithoutUserInput>
    create: XOR<BoardCreateWithoutUserInput, BoardUncheckedCreateWithoutUserInput>
  }

  export type BoardUpdateWithWhereUniqueWithoutUserInput = {
    where: BoardWhereUniqueInput
    data: XOR<BoardUpdateWithoutUserInput, BoardUncheckedUpdateWithoutUserInput>
  }

  export type BoardUpdateManyWithWhereWithoutUserInput = {
    where: BoardScalarWhereInput
    data: XOR<BoardUpdateManyMutationInput, BoardUncheckedUpdateManyWithoutUserInput>
  }

  export type BoardScalarWhereInput = {
    AND?: BoardScalarWhereInput | BoardScalarWhereInput[]
    OR?: BoardScalarWhereInput[]
    NOT?: BoardScalarWhereInput | BoardScalarWhereInput[]
    id?: StringFilter<"Board"> | string
    title?: StringFilter<"Board"> | string
    description?: StringFilter<"Board"> | string
    category?: StringFilter<"Board"> | string
    userId?: StringFilter<"Board"> | string
    createdAt?: DateTimeFilter<"Board"> | Date | string
    updatedAt?: DateTimeFilter<"Board"> | Date | string
    likes?: IntFilter<"Board"> | number
    dislikes?: IntFilter<"Board"> | number
    views?: IntFilter<"Board"> | number
  }

  export type ViewdBoardStoreUpsertWithWhereUniqueWithoutUserInput = {
    where: ViewdBoardStoreWhereUniqueInput
    update: XOR<ViewdBoardStoreUpdateWithoutUserInput, ViewdBoardStoreUncheckedUpdateWithoutUserInput>
    create: XOR<ViewdBoardStoreCreateWithoutUserInput, ViewdBoardStoreUncheckedCreateWithoutUserInput>
  }

  export type ViewdBoardStoreUpdateWithWhereUniqueWithoutUserInput = {
    where: ViewdBoardStoreWhereUniqueInput
    data: XOR<ViewdBoardStoreUpdateWithoutUserInput, ViewdBoardStoreUncheckedUpdateWithoutUserInput>
  }

  export type ViewdBoardStoreUpdateManyWithWhereWithoutUserInput = {
    where: ViewdBoardStoreScalarWhereInput
    data: XOR<ViewdBoardStoreUpdateManyMutationInput, ViewdBoardStoreUncheckedUpdateManyWithoutUserInput>
  }

  export type ViewdBoardStoreScalarWhereInput = {
    AND?: ViewdBoardStoreScalarWhereInput | ViewdBoardStoreScalarWhereInput[]
    OR?: ViewdBoardStoreScalarWhereInput[]
    NOT?: ViewdBoardStoreScalarWhereInput | ViewdBoardStoreScalarWhereInput[]
    id?: StringFilter<"ViewdBoardStore"> | string
    userId?: StringFilter<"ViewdBoardStore"> | string
    boardId?: StringFilter<"ViewdBoardStore"> | string
    viewedAt?: DateTimeFilter<"ViewdBoardStore"> | Date | string
  }

  export type ViewdProductStoreUpsertWithWhereUniqueWithoutUserInput = {
    where: ViewdProductStoreWhereUniqueInput
    update: XOR<ViewdProductStoreUpdateWithoutUserInput, ViewdProductStoreUncheckedUpdateWithoutUserInput>
    create: XOR<ViewdProductStoreCreateWithoutUserInput, ViewdProductStoreUncheckedCreateWithoutUserInput>
  }

  export type ViewdProductStoreUpdateWithWhereUniqueWithoutUserInput = {
    where: ViewdProductStoreWhereUniqueInput
    data: XOR<ViewdProductStoreUpdateWithoutUserInput, ViewdProductStoreUncheckedUpdateWithoutUserInput>
  }

  export type ViewdProductStoreUpdateManyWithWhereWithoutUserInput = {
    where: ViewdProductStoreScalarWhereInput
    data: XOR<ViewdProductStoreUpdateManyMutationInput, ViewdProductStoreUncheckedUpdateManyWithoutUserInput>
  }

  export type ViewdProductStoreScalarWhereInput = {
    AND?: ViewdProductStoreScalarWhereInput | ViewdProductStoreScalarWhereInput[]
    OR?: ViewdProductStoreScalarWhereInput[]
    NOT?: ViewdProductStoreScalarWhereInput | ViewdProductStoreScalarWhereInput[]
    id?: StringFilter<"ViewdProductStore"> | string
    userId?: StringFilter<"ViewdProductStore"> | string
    productId?: StringFilter<"ViewdProductStore"> | string
    viewedAt?: DateTimeFilter<"ViewdProductStore"> | Date | string
  }

  export type BoardLikeDisLikeUpsertWithWhereUniqueWithoutUserInput = {
    where: BoardLikeDisLikeWhereUniqueInput
    update: XOR<BoardLikeDisLikeUpdateWithoutUserInput, BoardLikeDisLikeUncheckedUpdateWithoutUserInput>
    create: XOR<BoardLikeDisLikeCreateWithoutUserInput, BoardLikeDisLikeUncheckedCreateWithoutUserInput>
  }

  export type BoardLikeDisLikeUpdateWithWhereUniqueWithoutUserInput = {
    where: BoardLikeDisLikeWhereUniqueInput
    data: XOR<BoardLikeDisLikeUpdateWithoutUserInput, BoardLikeDisLikeUncheckedUpdateWithoutUserInput>
  }

  export type BoardLikeDisLikeUpdateManyWithWhereWithoutUserInput = {
    where: BoardLikeDisLikeScalarWhereInput
    data: XOR<BoardLikeDisLikeUpdateManyMutationInput, BoardLikeDisLikeUncheckedUpdateManyWithoutUserInput>
  }

  export type BoardLikeDisLikeScalarWhereInput = {
    AND?: BoardLikeDisLikeScalarWhereInput | BoardLikeDisLikeScalarWhereInput[]
    OR?: BoardLikeDisLikeScalarWhereInput[]
    NOT?: BoardLikeDisLikeScalarWhereInput | BoardLikeDisLikeScalarWhereInput[]
    id?: IntFilter<"BoardLikeDisLike"> | number
    type?: StringFilter<"BoardLikeDisLike"> | string
    createdAt?: DateTimeFilter<"BoardLikeDisLike"> | Date | string
    userId?: StringFilter<"BoardLikeDisLike"> | string
    boardId?: StringFilter<"BoardLikeDisLike"> | string
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
  }

  export type ConversationUpsertWithWhereUniqueWithoutUsersInput = {
    where: ConversationWhereUniqueInput
    update: XOR<ConversationUpdateWithoutUsersInput, ConversationUncheckedUpdateWithoutUsersInput>
    create: XOR<ConversationCreateWithoutUsersInput, ConversationUncheckedCreateWithoutUsersInput>
  }

  export type ConversationUpdateWithWhereUniqueWithoutUsersInput = {
    where: ConversationWhereUniqueInput
    data: XOR<ConversationUpdateWithoutUsersInput, ConversationUncheckedUpdateWithoutUsersInput>
  }

  export type ConversationUpdateManyWithWhereWithoutUsersInput = {
    where: ConversationScalarWhereInput
    data: XOR<ConversationUpdateManyMutationInput, ConversationUncheckedUpdateManyWithoutUsersInput>
  }

  export type ConversationScalarWhereInput = {
    AND?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
    OR?: ConversationScalarWhereInput[]
    NOT?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
    id?: StringFilter<"Conversation"> | string
    name?: StringNullableFilter<"Conversation"> | string | null
    senderId?: StringFilter<"Conversation"> | string
    receiverId?: StringFilter<"Conversation"> | string
    createdAt?: DateTimeFilter<"Conversation"> | Date | string
  }

  export type MessageUpsertWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
  }

  export type MessageUpdateManyWithWhereWithoutSenderInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutSenderInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: StringFilter<"Message"> | string
    text?: StringNullableFilter<"Message"> | string | null
    image?: StringNullableFilter<"Message"> | string | null
    senderId?: StringFilter<"Message"> | string
    receiverId?: StringFilter<"Message"> | string
    conversationId?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
    updatedAt?: DateTimeFilter<"Message"> | Date | string
  }

  export type MessageUpsertWithWhereUniqueWithoutReceiverInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutReceiverInput, MessageUncheckedUpdateWithoutReceiverInput>
    create: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutReceiverInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutReceiverInput, MessageUncheckedUpdateWithoutReceiverInput>
  }

  export type MessageUpdateManyWithWhereWithoutReceiverInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutReceiverInput>
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    hashedPassword?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userType?: $Enums.UserType
    favoriteIds?: UserCreatefavoriteIdsInput | string[]
    sessions?: SessionCreateNestedManyWithoutUserInput
    Product?: ProductCreateNestedManyWithoutUserInput
    Board?: BoardCreateNestedManyWithoutUserInput
    ViewdBoardStore?: ViewdBoardStoreCreateNestedManyWithoutUserInput
    ViewdProductStore?: ViewdProductStoreCreateNestedManyWithoutUserInput
    BoardLikeDisLike?: BoardLikeDisLikeCreateNestedManyWithoutUserInput
    conversations?: ConversationCreateNestedManyWithoutUsersInput
    sendMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    hashedPassword?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userType?: $Enums.UserType
    favoriteIds?: UserCreatefavoriteIdsInput | string[]
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    Product?: ProductUncheckedCreateNestedManyWithoutUserInput
    Board?: BoardUncheckedCreateNestedManyWithoutUserInput
    ViewdBoardStore?: ViewdBoardStoreUncheckedCreateNestedManyWithoutUserInput
    ViewdProductStore?: ViewdProductStoreUncheckedCreateNestedManyWithoutUserInput
    BoardLikeDisLike?: BoardLikeDisLikeUncheckedCreateNestedManyWithoutUserInput
    conversations?: ConversationUncheckedCreateNestedManyWithoutUsersInput
    sendMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    favoriteIds?: UserUpdatefavoriteIdsInput | string[]
    sessions?: SessionUpdateManyWithoutUserNestedInput
    Product?: ProductUpdateManyWithoutUserNestedInput
    Board?: BoardUpdateManyWithoutUserNestedInput
    ViewdBoardStore?: ViewdBoardStoreUpdateManyWithoutUserNestedInput
    ViewdProductStore?: ViewdProductStoreUpdateManyWithoutUserNestedInput
    BoardLikeDisLike?: BoardLikeDisLikeUpdateManyWithoutUserNestedInput
    conversations?: ConversationUpdateManyWithoutUsersNestedInput
    sendMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    favoriteIds?: UserUpdatefavoriteIdsInput | string[]
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Product?: ProductUncheckedUpdateManyWithoutUserNestedInput
    Board?: BoardUncheckedUpdateManyWithoutUserNestedInput
    ViewdBoardStore?: ViewdBoardStoreUncheckedUpdateManyWithoutUserNestedInput
    ViewdProductStore?: ViewdProductStoreUncheckedUpdateManyWithoutUserNestedInput
    BoardLikeDisLike?: BoardLikeDisLikeUncheckedUpdateManyWithoutUserNestedInput
    conversations?: ConversationUncheckedUpdateManyWithoutUsersNestedInput
    sendMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    hashedPassword?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userType?: $Enums.UserType
    favoriteIds?: UserCreatefavoriteIdsInput | string[]
    Product?: ProductCreateNestedManyWithoutUserInput
    Board?: BoardCreateNestedManyWithoutUserInput
    ViewdBoardStore?: ViewdBoardStoreCreateNestedManyWithoutUserInput
    ViewdProductStore?: ViewdProductStoreCreateNestedManyWithoutUserInput
    BoardLikeDisLike?: BoardLikeDisLikeCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    conversations?: ConversationCreateNestedManyWithoutUsersInput
    sendMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    hashedPassword?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userType?: $Enums.UserType
    favoriteIds?: UserCreatefavoriteIdsInput | string[]
    Product?: ProductUncheckedCreateNestedManyWithoutUserInput
    Board?: BoardUncheckedCreateNestedManyWithoutUserInput
    ViewdBoardStore?: ViewdBoardStoreUncheckedCreateNestedManyWithoutUserInput
    ViewdProductStore?: ViewdProductStoreUncheckedCreateNestedManyWithoutUserInput
    BoardLikeDisLike?: BoardLikeDisLikeUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    conversations?: ConversationUncheckedCreateNestedManyWithoutUsersInput
    sendMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    favoriteIds?: UserUpdatefavoriteIdsInput | string[]
    Product?: ProductUpdateManyWithoutUserNestedInput
    Board?: BoardUpdateManyWithoutUserNestedInput
    ViewdBoardStore?: ViewdBoardStoreUpdateManyWithoutUserNestedInput
    ViewdProductStore?: ViewdProductStoreUpdateManyWithoutUserNestedInput
    BoardLikeDisLike?: BoardLikeDisLikeUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    conversations?: ConversationUpdateManyWithoutUsersNestedInput
    sendMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    favoriteIds?: UserUpdatefavoriteIdsInput | string[]
    Product?: ProductUncheckedUpdateManyWithoutUserNestedInput
    Board?: BoardUncheckedUpdateManyWithoutUserNestedInput
    ViewdBoardStore?: ViewdBoardStoreUncheckedUpdateManyWithoutUserNestedInput
    ViewdProductStore?: ViewdProductStoreUncheckedUpdateManyWithoutUserNestedInput
    BoardLikeDisLike?: BoardLikeDisLikeUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    conversations?: ConversationUncheckedUpdateManyWithoutUsersNestedInput
    sendMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type ViewdBoardStoreCreateWithoutBoardInput = {
    id?: string
    viewedAt?: Date | string
    user: UserCreateNestedOneWithoutViewdBoardStoreInput
  }

  export type ViewdBoardStoreUncheckedCreateWithoutBoardInput = {
    id?: string
    userId: string
    viewedAt?: Date | string
  }

  export type ViewdBoardStoreCreateOrConnectWithoutBoardInput = {
    where: ViewdBoardStoreWhereUniqueInput
    create: XOR<ViewdBoardStoreCreateWithoutBoardInput, ViewdBoardStoreUncheckedCreateWithoutBoardInput>
  }

  export type ViewdBoardStoreCreateManyBoardInputEnvelope = {
    data: ViewdBoardStoreCreateManyBoardInput | ViewdBoardStoreCreateManyBoardInput[]
    skipDuplicates?: boolean
  }

  export type BoardLikeDisLikeCreateWithoutBoardInput = {
    type: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutBoardLikeDisLikeInput
  }

  export type BoardLikeDisLikeUncheckedCreateWithoutBoardInput = {
    id?: number
    type: string
    createdAt?: Date | string
    userId: string
  }

  export type BoardLikeDisLikeCreateOrConnectWithoutBoardInput = {
    where: BoardLikeDisLikeWhereUniqueInput
    create: XOR<BoardLikeDisLikeCreateWithoutBoardInput, BoardLikeDisLikeUncheckedCreateWithoutBoardInput>
  }

  export type BoardLikeDisLikeCreateManyBoardInputEnvelope = {
    data: BoardLikeDisLikeCreateManyBoardInput | BoardLikeDisLikeCreateManyBoardInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutBoardInput = {
    id?: string
    name?: string | null
    hashedPassword?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userType?: $Enums.UserType
    favoriteIds?: UserCreatefavoriteIdsInput | string[]
    sessions?: SessionCreateNestedManyWithoutUserInput
    Product?: ProductCreateNestedManyWithoutUserInput
    ViewdBoardStore?: ViewdBoardStoreCreateNestedManyWithoutUserInput
    ViewdProductStore?: ViewdProductStoreCreateNestedManyWithoutUserInput
    BoardLikeDisLike?: BoardLikeDisLikeCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    conversations?: ConversationCreateNestedManyWithoutUsersInput
    sendMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutBoardInput = {
    id?: string
    name?: string | null
    hashedPassword?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userType?: $Enums.UserType
    favoriteIds?: UserCreatefavoriteIdsInput | string[]
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    Product?: ProductUncheckedCreateNestedManyWithoutUserInput
    ViewdBoardStore?: ViewdBoardStoreUncheckedCreateNestedManyWithoutUserInput
    ViewdProductStore?: ViewdProductStoreUncheckedCreateNestedManyWithoutUserInput
    BoardLikeDisLike?: BoardLikeDisLikeUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    conversations?: ConversationUncheckedCreateNestedManyWithoutUsersInput
    sendMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutBoardInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBoardInput, UserUncheckedCreateWithoutBoardInput>
  }

  export type ViewdBoardStoreUpsertWithWhereUniqueWithoutBoardInput = {
    where: ViewdBoardStoreWhereUniqueInput
    update: XOR<ViewdBoardStoreUpdateWithoutBoardInput, ViewdBoardStoreUncheckedUpdateWithoutBoardInput>
    create: XOR<ViewdBoardStoreCreateWithoutBoardInput, ViewdBoardStoreUncheckedCreateWithoutBoardInput>
  }

  export type ViewdBoardStoreUpdateWithWhereUniqueWithoutBoardInput = {
    where: ViewdBoardStoreWhereUniqueInput
    data: XOR<ViewdBoardStoreUpdateWithoutBoardInput, ViewdBoardStoreUncheckedUpdateWithoutBoardInput>
  }

  export type ViewdBoardStoreUpdateManyWithWhereWithoutBoardInput = {
    where: ViewdBoardStoreScalarWhereInput
    data: XOR<ViewdBoardStoreUpdateManyMutationInput, ViewdBoardStoreUncheckedUpdateManyWithoutBoardInput>
  }

  export type BoardLikeDisLikeUpsertWithWhereUniqueWithoutBoardInput = {
    where: BoardLikeDisLikeWhereUniqueInput
    update: XOR<BoardLikeDisLikeUpdateWithoutBoardInput, BoardLikeDisLikeUncheckedUpdateWithoutBoardInput>
    create: XOR<BoardLikeDisLikeCreateWithoutBoardInput, BoardLikeDisLikeUncheckedCreateWithoutBoardInput>
  }

  export type BoardLikeDisLikeUpdateWithWhereUniqueWithoutBoardInput = {
    where: BoardLikeDisLikeWhereUniqueInput
    data: XOR<BoardLikeDisLikeUpdateWithoutBoardInput, BoardLikeDisLikeUncheckedUpdateWithoutBoardInput>
  }

  export type BoardLikeDisLikeUpdateManyWithWhereWithoutBoardInput = {
    where: BoardLikeDisLikeScalarWhereInput
    data: XOR<BoardLikeDisLikeUpdateManyMutationInput, BoardLikeDisLikeUncheckedUpdateManyWithoutBoardInput>
  }

  export type UserUpsertWithoutBoardInput = {
    update: XOR<UserUpdateWithoutBoardInput, UserUncheckedUpdateWithoutBoardInput>
    create: XOR<UserCreateWithoutBoardInput, UserUncheckedCreateWithoutBoardInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBoardInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBoardInput, UserUncheckedUpdateWithoutBoardInput>
  }

  export type UserUpdateWithoutBoardInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    favoriteIds?: UserUpdatefavoriteIdsInput | string[]
    sessions?: SessionUpdateManyWithoutUserNestedInput
    Product?: ProductUpdateManyWithoutUserNestedInput
    ViewdBoardStore?: ViewdBoardStoreUpdateManyWithoutUserNestedInput
    ViewdProductStore?: ViewdProductStoreUpdateManyWithoutUserNestedInput
    BoardLikeDisLike?: BoardLikeDisLikeUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    conversations?: ConversationUpdateManyWithoutUsersNestedInput
    sendMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutBoardInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    favoriteIds?: UserUpdatefavoriteIdsInput | string[]
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Product?: ProductUncheckedUpdateManyWithoutUserNestedInput
    ViewdBoardStore?: ViewdBoardStoreUncheckedUpdateManyWithoutUserNestedInput
    ViewdProductStore?: ViewdProductStoreUncheckedUpdateManyWithoutUserNestedInput
    BoardLikeDisLike?: BoardLikeDisLikeUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    conversations?: ConversationUncheckedUpdateManyWithoutUsersNestedInput
    sendMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserCreateWithoutBoardLikeDisLikeInput = {
    id?: string
    name?: string | null
    hashedPassword?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userType?: $Enums.UserType
    favoriteIds?: UserCreatefavoriteIdsInput | string[]
    sessions?: SessionCreateNestedManyWithoutUserInput
    Product?: ProductCreateNestedManyWithoutUserInput
    Board?: BoardCreateNestedManyWithoutUserInput
    ViewdBoardStore?: ViewdBoardStoreCreateNestedManyWithoutUserInput
    ViewdProductStore?: ViewdProductStoreCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    conversations?: ConversationCreateNestedManyWithoutUsersInput
    sendMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutBoardLikeDisLikeInput = {
    id?: string
    name?: string | null
    hashedPassword?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userType?: $Enums.UserType
    favoriteIds?: UserCreatefavoriteIdsInput | string[]
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    Product?: ProductUncheckedCreateNestedManyWithoutUserInput
    Board?: BoardUncheckedCreateNestedManyWithoutUserInput
    ViewdBoardStore?: ViewdBoardStoreUncheckedCreateNestedManyWithoutUserInput
    ViewdProductStore?: ViewdProductStoreUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    conversations?: ConversationUncheckedCreateNestedManyWithoutUsersInput
    sendMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutBoardLikeDisLikeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBoardLikeDisLikeInput, UserUncheckedCreateWithoutBoardLikeDisLikeInput>
  }

  export type BoardCreateWithoutBoardLikeDisLikeInput = {
    id?: string
    title: string
    description: string
    category?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: number
    dislikes?: number
    views?: number
    ViewdBoardStore?: ViewdBoardStoreCreateNestedManyWithoutBoardInput
    user: UserCreateNestedOneWithoutBoardInput
  }

  export type BoardUncheckedCreateWithoutBoardLikeDisLikeInput = {
    id?: string
    title: string
    description: string
    category?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: number
    dislikes?: number
    views?: number
    ViewdBoardStore?: ViewdBoardStoreUncheckedCreateNestedManyWithoutBoardInput
  }

  export type BoardCreateOrConnectWithoutBoardLikeDisLikeInput = {
    where: BoardWhereUniqueInput
    create: XOR<BoardCreateWithoutBoardLikeDisLikeInput, BoardUncheckedCreateWithoutBoardLikeDisLikeInput>
  }

  export type UserUpsertWithoutBoardLikeDisLikeInput = {
    update: XOR<UserUpdateWithoutBoardLikeDisLikeInput, UserUncheckedUpdateWithoutBoardLikeDisLikeInput>
    create: XOR<UserCreateWithoutBoardLikeDisLikeInput, UserUncheckedCreateWithoutBoardLikeDisLikeInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBoardLikeDisLikeInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBoardLikeDisLikeInput, UserUncheckedUpdateWithoutBoardLikeDisLikeInput>
  }

  export type UserUpdateWithoutBoardLikeDisLikeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    favoriteIds?: UserUpdatefavoriteIdsInput | string[]
    sessions?: SessionUpdateManyWithoutUserNestedInput
    Product?: ProductUpdateManyWithoutUserNestedInput
    Board?: BoardUpdateManyWithoutUserNestedInput
    ViewdBoardStore?: ViewdBoardStoreUpdateManyWithoutUserNestedInput
    ViewdProductStore?: ViewdProductStoreUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    conversations?: ConversationUpdateManyWithoutUsersNestedInput
    sendMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutBoardLikeDisLikeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    favoriteIds?: UserUpdatefavoriteIdsInput | string[]
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Product?: ProductUncheckedUpdateManyWithoutUserNestedInput
    Board?: BoardUncheckedUpdateManyWithoutUserNestedInput
    ViewdBoardStore?: ViewdBoardStoreUncheckedUpdateManyWithoutUserNestedInput
    ViewdProductStore?: ViewdProductStoreUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    conversations?: ConversationUncheckedUpdateManyWithoutUsersNestedInput
    sendMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type BoardUpsertWithoutBoardLikeDisLikeInput = {
    update: XOR<BoardUpdateWithoutBoardLikeDisLikeInput, BoardUncheckedUpdateWithoutBoardLikeDisLikeInput>
    create: XOR<BoardCreateWithoutBoardLikeDisLikeInput, BoardUncheckedCreateWithoutBoardLikeDisLikeInput>
    where?: BoardWhereInput
  }

  export type BoardUpdateToOneWithWhereWithoutBoardLikeDisLikeInput = {
    where?: BoardWhereInput
    data: XOR<BoardUpdateWithoutBoardLikeDisLikeInput, BoardUncheckedUpdateWithoutBoardLikeDisLikeInput>
  }

  export type BoardUpdateWithoutBoardLikeDisLikeInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: IntFieldUpdateOperationsInput | number
    dislikes?: IntFieldUpdateOperationsInput | number
    views?: IntFieldUpdateOperationsInput | number
    ViewdBoardStore?: ViewdBoardStoreUpdateManyWithoutBoardNestedInput
    user?: UserUpdateOneRequiredWithoutBoardNestedInput
  }

  export type BoardUncheckedUpdateWithoutBoardLikeDisLikeInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: IntFieldUpdateOperationsInput | number
    dislikes?: IntFieldUpdateOperationsInput | number
    views?: IntFieldUpdateOperationsInput | number
    ViewdBoardStore?: ViewdBoardStoreUncheckedUpdateManyWithoutBoardNestedInput
  }

  export type UserCreateWithoutProductInput = {
    id?: string
    name?: string | null
    hashedPassword?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userType?: $Enums.UserType
    favoriteIds?: UserCreatefavoriteIdsInput | string[]
    sessions?: SessionCreateNestedManyWithoutUserInput
    Board?: BoardCreateNestedManyWithoutUserInput
    ViewdBoardStore?: ViewdBoardStoreCreateNestedManyWithoutUserInput
    ViewdProductStore?: ViewdProductStoreCreateNestedManyWithoutUserInput
    BoardLikeDisLike?: BoardLikeDisLikeCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    conversations?: ConversationCreateNestedManyWithoutUsersInput
    sendMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutProductInput = {
    id?: string
    name?: string | null
    hashedPassword?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userType?: $Enums.UserType
    favoriteIds?: UserCreatefavoriteIdsInput | string[]
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    Board?: BoardUncheckedCreateNestedManyWithoutUserInput
    ViewdBoardStore?: ViewdBoardStoreUncheckedCreateNestedManyWithoutUserInput
    ViewdProductStore?: ViewdProductStoreUncheckedCreateNestedManyWithoutUserInput
    BoardLikeDisLike?: BoardLikeDisLikeUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    conversations?: ConversationUncheckedCreateNestedManyWithoutUsersInput
    sendMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutProductInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProductInput, UserUncheckedCreateWithoutProductInput>
  }

  export type ViewdProductStoreCreateWithoutProductInput = {
    id?: string
    viewedAt?: Date | string
    user: UserCreateNestedOneWithoutViewdProductStoreInput
  }

  export type ViewdProductStoreUncheckedCreateWithoutProductInput = {
    id?: string
    userId: string
    viewedAt?: Date | string
  }

  export type ViewdProductStoreCreateOrConnectWithoutProductInput = {
    where: ViewdProductStoreWhereUniqueInput
    create: XOR<ViewdProductStoreCreateWithoutProductInput, ViewdProductStoreUncheckedCreateWithoutProductInput>
  }

  export type ViewdProductStoreCreateManyProductInputEnvelope = {
    data: ViewdProductStoreCreateManyProductInput | ViewdProductStoreCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutProductInput = {
    update: XOR<UserUpdateWithoutProductInput, UserUncheckedUpdateWithoutProductInput>
    create: XOR<UserCreateWithoutProductInput, UserUncheckedCreateWithoutProductInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProductInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProductInput, UserUncheckedUpdateWithoutProductInput>
  }

  export type UserUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    favoriteIds?: UserUpdatefavoriteIdsInput | string[]
    sessions?: SessionUpdateManyWithoutUserNestedInput
    Board?: BoardUpdateManyWithoutUserNestedInput
    ViewdBoardStore?: ViewdBoardStoreUpdateManyWithoutUserNestedInput
    ViewdProductStore?: ViewdProductStoreUpdateManyWithoutUserNestedInput
    BoardLikeDisLike?: BoardLikeDisLikeUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    conversations?: ConversationUpdateManyWithoutUsersNestedInput
    sendMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    favoriteIds?: UserUpdatefavoriteIdsInput | string[]
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Board?: BoardUncheckedUpdateManyWithoutUserNestedInput
    ViewdBoardStore?: ViewdBoardStoreUncheckedUpdateManyWithoutUserNestedInput
    ViewdProductStore?: ViewdProductStoreUncheckedUpdateManyWithoutUserNestedInput
    BoardLikeDisLike?: BoardLikeDisLikeUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    conversations?: ConversationUncheckedUpdateManyWithoutUsersNestedInput
    sendMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type ViewdProductStoreUpsertWithWhereUniqueWithoutProductInput = {
    where: ViewdProductStoreWhereUniqueInput
    update: XOR<ViewdProductStoreUpdateWithoutProductInput, ViewdProductStoreUncheckedUpdateWithoutProductInput>
    create: XOR<ViewdProductStoreCreateWithoutProductInput, ViewdProductStoreUncheckedCreateWithoutProductInput>
  }

  export type ViewdProductStoreUpdateWithWhereUniqueWithoutProductInput = {
    where: ViewdProductStoreWhereUniqueInput
    data: XOR<ViewdProductStoreUpdateWithoutProductInput, ViewdProductStoreUncheckedUpdateWithoutProductInput>
  }

  export type ViewdProductStoreUpdateManyWithWhereWithoutProductInput = {
    where: ViewdProductStoreScalarWhereInput
    data: XOR<ViewdProductStoreUpdateManyMutationInput, ViewdProductStoreUncheckedUpdateManyWithoutProductInput>
  }

  export type UserCreateWithoutViewdBoardStoreInput = {
    id?: string
    name?: string | null
    hashedPassword?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userType?: $Enums.UserType
    favoriteIds?: UserCreatefavoriteIdsInput | string[]
    sessions?: SessionCreateNestedManyWithoutUserInput
    Product?: ProductCreateNestedManyWithoutUserInput
    Board?: BoardCreateNestedManyWithoutUserInput
    ViewdProductStore?: ViewdProductStoreCreateNestedManyWithoutUserInput
    BoardLikeDisLike?: BoardLikeDisLikeCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    conversations?: ConversationCreateNestedManyWithoutUsersInput
    sendMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutViewdBoardStoreInput = {
    id?: string
    name?: string | null
    hashedPassword?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userType?: $Enums.UserType
    favoriteIds?: UserCreatefavoriteIdsInput | string[]
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    Product?: ProductUncheckedCreateNestedManyWithoutUserInput
    Board?: BoardUncheckedCreateNestedManyWithoutUserInput
    ViewdProductStore?: ViewdProductStoreUncheckedCreateNestedManyWithoutUserInput
    BoardLikeDisLike?: BoardLikeDisLikeUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    conversations?: ConversationUncheckedCreateNestedManyWithoutUsersInput
    sendMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutViewdBoardStoreInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutViewdBoardStoreInput, UserUncheckedCreateWithoutViewdBoardStoreInput>
  }

  export type BoardCreateWithoutViewdBoardStoreInput = {
    id?: string
    title: string
    description: string
    category?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: number
    dislikes?: number
    views?: number
    BoardLikeDisLike?: BoardLikeDisLikeCreateNestedManyWithoutBoardInput
    user: UserCreateNestedOneWithoutBoardInput
  }

  export type BoardUncheckedCreateWithoutViewdBoardStoreInput = {
    id?: string
    title: string
    description: string
    category?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: number
    dislikes?: number
    views?: number
    BoardLikeDisLike?: BoardLikeDisLikeUncheckedCreateNestedManyWithoutBoardInput
  }

  export type BoardCreateOrConnectWithoutViewdBoardStoreInput = {
    where: BoardWhereUniqueInput
    create: XOR<BoardCreateWithoutViewdBoardStoreInput, BoardUncheckedCreateWithoutViewdBoardStoreInput>
  }

  export type UserUpsertWithoutViewdBoardStoreInput = {
    update: XOR<UserUpdateWithoutViewdBoardStoreInput, UserUncheckedUpdateWithoutViewdBoardStoreInput>
    create: XOR<UserCreateWithoutViewdBoardStoreInput, UserUncheckedCreateWithoutViewdBoardStoreInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutViewdBoardStoreInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutViewdBoardStoreInput, UserUncheckedUpdateWithoutViewdBoardStoreInput>
  }

  export type UserUpdateWithoutViewdBoardStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    favoriteIds?: UserUpdatefavoriteIdsInput | string[]
    sessions?: SessionUpdateManyWithoutUserNestedInput
    Product?: ProductUpdateManyWithoutUserNestedInput
    Board?: BoardUpdateManyWithoutUserNestedInput
    ViewdProductStore?: ViewdProductStoreUpdateManyWithoutUserNestedInput
    BoardLikeDisLike?: BoardLikeDisLikeUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    conversations?: ConversationUpdateManyWithoutUsersNestedInput
    sendMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutViewdBoardStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    favoriteIds?: UserUpdatefavoriteIdsInput | string[]
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Product?: ProductUncheckedUpdateManyWithoutUserNestedInput
    Board?: BoardUncheckedUpdateManyWithoutUserNestedInput
    ViewdProductStore?: ViewdProductStoreUncheckedUpdateManyWithoutUserNestedInput
    BoardLikeDisLike?: BoardLikeDisLikeUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    conversations?: ConversationUncheckedUpdateManyWithoutUsersNestedInput
    sendMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type BoardUpsertWithoutViewdBoardStoreInput = {
    update: XOR<BoardUpdateWithoutViewdBoardStoreInput, BoardUncheckedUpdateWithoutViewdBoardStoreInput>
    create: XOR<BoardCreateWithoutViewdBoardStoreInput, BoardUncheckedCreateWithoutViewdBoardStoreInput>
    where?: BoardWhereInput
  }

  export type BoardUpdateToOneWithWhereWithoutViewdBoardStoreInput = {
    where?: BoardWhereInput
    data: XOR<BoardUpdateWithoutViewdBoardStoreInput, BoardUncheckedUpdateWithoutViewdBoardStoreInput>
  }

  export type BoardUpdateWithoutViewdBoardStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: IntFieldUpdateOperationsInput | number
    dislikes?: IntFieldUpdateOperationsInput | number
    views?: IntFieldUpdateOperationsInput | number
    BoardLikeDisLike?: BoardLikeDisLikeUpdateManyWithoutBoardNestedInput
    user?: UserUpdateOneRequiredWithoutBoardNestedInput
  }

  export type BoardUncheckedUpdateWithoutViewdBoardStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: IntFieldUpdateOperationsInput | number
    dislikes?: IntFieldUpdateOperationsInput | number
    views?: IntFieldUpdateOperationsInput | number
    BoardLikeDisLike?: BoardLikeDisLikeUncheckedUpdateManyWithoutBoardNestedInput
  }

  export type UserCreateWithoutViewdProductStoreInput = {
    id?: string
    name?: string | null
    hashedPassword?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userType?: $Enums.UserType
    favoriteIds?: UserCreatefavoriteIdsInput | string[]
    sessions?: SessionCreateNestedManyWithoutUserInput
    Product?: ProductCreateNestedManyWithoutUserInput
    Board?: BoardCreateNestedManyWithoutUserInput
    ViewdBoardStore?: ViewdBoardStoreCreateNestedManyWithoutUserInput
    BoardLikeDisLike?: BoardLikeDisLikeCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    conversations?: ConversationCreateNestedManyWithoutUsersInput
    sendMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutViewdProductStoreInput = {
    id?: string
    name?: string | null
    hashedPassword?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userType?: $Enums.UserType
    favoriteIds?: UserCreatefavoriteIdsInput | string[]
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    Product?: ProductUncheckedCreateNestedManyWithoutUserInput
    Board?: BoardUncheckedCreateNestedManyWithoutUserInput
    ViewdBoardStore?: ViewdBoardStoreUncheckedCreateNestedManyWithoutUserInput
    BoardLikeDisLike?: BoardLikeDisLikeUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    conversations?: ConversationUncheckedCreateNestedManyWithoutUsersInput
    sendMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutViewdProductStoreInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutViewdProductStoreInput, UserUncheckedCreateWithoutViewdProductStoreInput>
  }

  export type ProductCreateWithoutViewdProductStoreInput = {
    id?: string
    title: string
    description: string
    imageSrc?: ProductCreateimageSrcInput | string[]
    price: number
    latitude?: number | null
    longitude?: number | null
    address?: string | null
    addressDetail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sold?: boolean
    views?: number
    delivery?: boolean
    faceToFace?: boolean
    categories?: ProductCreatecategoriesInput | string[]
    user: UserCreateNestedOneWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutViewdProductStoreInput = {
    id?: string
    title: string
    description: string
    imageSrc?: ProductCreateimageSrcInput | string[]
    userId: string
    price: number
    latitude?: number | null
    longitude?: number | null
    address?: string | null
    addressDetail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sold?: boolean
    views?: number
    delivery?: boolean
    faceToFace?: boolean
    categories?: ProductCreatecategoriesInput | string[]
  }

  export type ProductCreateOrConnectWithoutViewdProductStoreInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutViewdProductStoreInput, ProductUncheckedCreateWithoutViewdProductStoreInput>
  }

  export type UserUpsertWithoutViewdProductStoreInput = {
    update: XOR<UserUpdateWithoutViewdProductStoreInput, UserUncheckedUpdateWithoutViewdProductStoreInput>
    create: XOR<UserCreateWithoutViewdProductStoreInput, UserUncheckedCreateWithoutViewdProductStoreInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutViewdProductStoreInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutViewdProductStoreInput, UserUncheckedUpdateWithoutViewdProductStoreInput>
  }

  export type UserUpdateWithoutViewdProductStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    favoriteIds?: UserUpdatefavoriteIdsInput | string[]
    sessions?: SessionUpdateManyWithoutUserNestedInput
    Product?: ProductUpdateManyWithoutUserNestedInput
    Board?: BoardUpdateManyWithoutUserNestedInput
    ViewdBoardStore?: ViewdBoardStoreUpdateManyWithoutUserNestedInput
    BoardLikeDisLike?: BoardLikeDisLikeUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    conversations?: ConversationUpdateManyWithoutUsersNestedInput
    sendMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutViewdProductStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    favoriteIds?: UserUpdatefavoriteIdsInput | string[]
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Product?: ProductUncheckedUpdateManyWithoutUserNestedInput
    Board?: BoardUncheckedUpdateManyWithoutUserNestedInput
    ViewdBoardStore?: ViewdBoardStoreUncheckedUpdateManyWithoutUserNestedInput
    BoardLikeDisLike?: BoardLikeDisLikeUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    conversations?: ConversationUncheckedUpdateManyWithoutUsersNestedInput
    sendMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type ProductUpsertWithoutViewdProductStoreInput = {
    update: XOR<ProductUpdateWithoutViewdProductStoreInput, ProductUncheckedUpdateWithoutViewdProductStoreInput>
    create: XOR<ProductCreateWithoutViewdProductStoreInput, ProductUncheckedCreateWithoutViewdProductStoreInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutViewdProductStoreInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutViewdProductStoreInput, ProductUncheckedUpdateWithoutViewdProductStoreInput>
  }

  export type ProductUpdateWithoutViewdProductStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageSrc?: ProductUpdateimageSrcInput | string[]
    price?: IntFieldUpdateOperationsInput | number
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    addressDetail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sold?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    delivery?: BoolFieldUpdateOperationsInput | boolean
    faceToFace?: BoolFieldUpdateOperationsInput | boolean
    categories?: ProductUpdatecategoriesInput | string[]
    user?: UserUpdateOneRequiredWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutViewdProductStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageSrc?: ProductUpdateimageSrcInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    addressDetail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sold?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    delivery?: BoolFieldUpdateOperationsInput | boolean
    faceToFace?: BoolFieldUpdateOperationsInput | boolean
    categories?: ProductUpdatecategoriesInput | string[]
  }

  export type UserCreateWithoutConversationsInput = {
    id?: string
    name?: string | null
    hashedPassword?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userType?: $Enums.UserType
    favoriteIds?: UserCreatefavoriteIdsInput | string[]
    sessions?: SessionCreateNestedManyWithoutUserInput
    Product?: ProductCreateNestedManyWithoutUserInput
    Board?: BoardCreateNestedManyWithoutUserInput
    ViewdBoardStore?: ViewdBoardStoreCreateNestedManyWithoutUserInput
    ViewdProductStore?: ViewdProductStoreCreateNestedManyWithoutUserInput
    BoardLikeDisLike?: BoardLikeDisLikeCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sendMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutConversationsInput = {
    id?: string
    name?: string | null
    hashedPassword?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userType?: $Enums.UserType
    favoriteIds?: UserCreatefavoriteIdsInput | string[]
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    Product?: ProductUncheckedCreateNestedManyWithoutUserInput
    Board?: BoardUncheckedCreateNestedManyWithoutUserInput
    ViewdBoardStore?: ViewdBoardStoreUncheckedCreateNestedManyWithoutUserInput
    ViewdProductStore?: ViewdProductStoreUncheckedCreateNestedManyWithoutUserInput
    BoardLikeDisLike?: BoardLikeDisLikeUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sendMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutConversationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutConversationsInput, UserUncheckedCreateWithoutConversationsInput>
  }

  export type MessageCreateWithoutConversationInput = {
    id?: string
    text?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sender: UserCreateNestedOneWithoutSendMessagesInput
    receiver: UserCreateNestedOneWithoutReceivedMessagesInput
  }

  export type MessageUncheckedCreateWithoutConversationInput = {
    id?: string
    text?: string | null
    image?: string | null
    senderId: string
    receiverId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageCreateOrConnectWithoutConversationInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput>
  }

  export type MessageCreateManyConversationInputEnvelope = {
    data: MessageCreateManyConversationInput | MessageCreateManyConversationInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutConversationsInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutConversationsInput, UserUncheckedUpdateWithoutConversationsInput>
    create: XOR<UserCreateWithoutConversationsInput, UserUncheckedCreateWithoutConversationsInput>
  }

  export type UserUpdateWithWhereUniqueWithoutConversationsInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutConversationsInput, UserUncheckedUpdateWithoutConversationsInput>
  }

  export type UserUpdateManyWithWhereWithoutConversationsInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutConversationsInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    hashedPassword?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    userType?: EnumUserTypeFilter<"User"> | $Enums.UserType
    favoriteIds?: StringNullableListFilter<"User">
  }

  export type MessageUpsertWithWhereUniqueWithoutConversationInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutConversationInput, MessageUncheckedUpdateWithoutConversationInput>
    create: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutConversationInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutConversationInput, MessageUncheckedUpdateWithoutConversationInput>
  }

  export type MessageUpdateManyWithWhereWithoutConversationInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutConversationInput>
  }

  export type UserCreateWithoutSendMessagesInput = {
    id?: string
    name?: string | null
    hashedPassword?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userType?: $Enums.UserType
    favoriteIds?: UserCreatefavoriteIdsInput | string[]
    sessions?: SessionCreateNestedManyWithoutUserInput
    Product?: ProductCreateNestedManyWithoutUserInput
    Board?: BoardCreateNestedManyWithoutUserInput
    ViewdBoardStore?: ViewdBoardStoreCreateNestedManyWithoutUserInput
    ViewdProductStore?: ViewdProductStoreCreateNestedManyWithoutUserInput
    BoardLikeDisLike?: BoardLikeDisLikeCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    conversations?: ConversationCreateNestedManyWithoutUsersInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutSendMessagesInput = {
    id?: string
    name?: string | null
    hashedPassword?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userType?: $Enums.UserType
    favoriteIds?: UserCreatefavoriteIdsInput | string[]
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    Product?: ProductUncheckedCreateNestedManyWithoutUserInput
    Board?: BoardUncheckedCreateNestedManyWithoutUserInput
    ViewdBoardStore?: ViewdBoardStoreUncheckedCreateNestedManyWithoutUserInput
    ViewdProductStore?: ViewdProductStoreUncheckedCreateNestedManyWithoutUserInput
    BoardLikeDisLike?: BoardLikeDisLikeUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    conversations?: ConversationUncheckedCreateNestedManyWithoutUsersInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutSendMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSendMessagesInput, UserUncheckedCreateWithoutSendMessagesInput>
  }

  export type UserCreateWithoutReceivedMessagesInput = {
    id?: string
    name?: string | null
    hashedPassword?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userType?: $Enums.UserType
    favoriteIds?: UserCreatefavoriteIdsInput | string[]
    sessions?: SessionCreateNestedManyWithoutUserInput
    Product?: ProductCreateNestedManyWithoutUserInput
    Board?: BoardCreateNestedManyWithoutUserInput
    ViewdBoardStore?: ViewdBoardStoreCreateNestedManyWithoutUserInput
    ViewdProductStore?: ViewdProductStoreCreateNestedManyWithoutUserInput
    BoardLikeDisLike?: BoardLikeDisLikeCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    conversations?: ConversationCreateNestedManyWithoutUsersInput
    sendMessages?: MessageCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutReceivedMessagesInput = {
    id?: string
    name?: string | null
    hashedPassword?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userType?: $Enums.UserType
    favoriteIds?: UserCreatefavoriteIdsInput | string[]
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    Product?: ProductUncheckedCreateNestedManyWithoutUserInput
    Board?: BoardUncheckedCreateNestedManyWithoutUserInput
    ViewdBoardStore?: ViewdBoardStoreUncheckedCreateNestedManyWithoutUserInput
    ViewdProductStore?: ViewdProductStoreUncheckedCreateNestedManyWithoutUserInput
    BoardLikeDisLike?: BoardLikeDisLikeUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    conversations?: ConversationUncheckedCreateNestedManyWithoutUsersInput
    sendMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutReceivedMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
  }

  export type ConversationCreateWithoutMessagesInput = {
    id?: string
    name?: string | null
    senderId: string
    receiverId: string
    createdAt?: Date | string
    users?: UserCreateNestedManyWithoutConversationsInput
  }

  export type ConversationUncheckedCreateWithoutMessagesInput = {
    id?: string
    name?: string | null
    senderId: string
    receiverId: string
    createdAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutConversationsInput
  }

  export type ConversationCreateOrConnectWithoutMessagesInput = {
    where: ConversationWhereUniqueInput
    create: XOR<ConversationCreateWithoutMessagesInput, ConversationUncheckedCreateWithoutMessagesInput>
  }

  export type UserUpsertWithoutSendMessagesInput = {
    update: XOR<UserUpdateWithoutSendMessagesInput, UserUncheckedUpdateWithoutSendMessagesInput>
    create: XOR<UserCreateWithoutSendMessagesInput, UserUncheckedCreateWithoutSendMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSendMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSendMessagesInput, UserUncheckedUpdateWithoutSendMessagesInput>
  }

  export type UserUpdateWithoutSendMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    favoriteIds?: UserUpdatefavoriteIdsInput | string[]
    sessions?: SessionUpdateManyWithoutUserNestedInput
    Product?: ProductUpdateManyWithoutUserNestedInput
    Board?: BoardUpdateManyWithoutUserNestedInput
    ViewdBoardStore?: ViewdBoardStoreUpdateManyWithoutUserNestedInput
    ViewdProductStore?: ViewdProductStoreUpdateManyWithoutUserNestedInput
    BoardLikeDisLike?: BoardLikeDisLikeUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    conversations?: ConversationUpdateManyWithoutUsersNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutSendMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    favoriteIds?: UserUpdatefavoriteIdsInput | string[]
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Product?: ProductUncheckedUpdateManyWithoutUserNestedInput
    Board?: BoardUncheckedUpdateManyWithoutUserNestedInput
    ViewdBoardStore?: ViewdBoardStoreUncheckedUpdateManyWithoutUserNestedInput
    ViewdProductStore?: ViewdProductStoreUncheckedUpdateManyWithoutUserNestedInput
    BoardLikeDisLike?: BoardLikeDisLikeUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    conversations?: ConversationUncheckedUpdateManyWithoutUsersNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserUpsertWithoutReceivedMessagesInput = {
    update: XOR<UserUpdateWithoutReceivedMessagesInput, UserUncheckedUpdateWithoutReceivedMessagesInput>
    create: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceivedMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceivedMessagesInput, UserUncheckedUpdateWithoutReceivedMessagesInput>
  }

  export type UserUpdateWithoutReceivedMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    favoriteIds?: UserUpdatefavoriteIdsInput | string[]
    sessions?: SessionUpdateManyWithoutUserNestedInput
    Product?: ProductUpdateManyWithoutUserNestedInput
    Board?: BoardUpdateManyWithoutUserNestedInput
    ViewdBoardStore?: ViewdBoardStoreUpdateManyWithoutUserNestedInput
    ViewdProductStore?: ViewdProductStoreUpdateManyWithoutUserNestedInput
    BoardLikeDisLike?: BoardLikeDisLikeUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    conversations?: ConversationUpdateManyWithoutUsersNestedInput
    sendMessages?: MessageUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    favoriteIds?: UserUpdatefavoriteIdsInput | string[]
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Product?: ProductUncheckedUpdateManyWithoutUserNestedInput
    Board?: BoardUncheckedUpdateManyWithoutUserNestedInput
    ViewdBoardStore?: ViewdBoardStoreUncheckedUpdateManyWithoutUserNestedInput
    ViewdProductStore?: ViewdProductStoreUncheckedUpdateManyWithoutUserNestedInput
    BoardLikeDisLike?: BoardLikeDisLikeUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    conversations?: ConversationUncheckedUpdateManyWithoutUsersNestedInput
    sendMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type ConversationUpsertWithoutMessagesInput = {
    update: XOR<ConversationUpdateWithoutMessagesInput, ConversationUncheckedUpdateWithoutMessagesInput>
    create: XOR<ConversationCreateWithoutMessagesInput, ConversationUncheckedCreateWithoutMessagesInput>
    where?: ConversationWhereInput
  }

  export type ConversationUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ConversationWhereInput
    data: XOR<ConversationUpdateWithoutMessagesInput, ConversationUncheckedUpdateWithoutMessagesInput>
  }

  export type ConversationUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutConversationsNestedInput
  }

  export type ConversationUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutConversationsNestedInput
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    accessToken?: string | null
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductCreateManyUserInput = {
    id?: string
    title: string
    description: string
    imageSrc?: ProductCreateimageSrcInput | string[]
    price: number
    latitude?: number | null
    longitude?: number | null
    address?: string | null
    addressDetail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sold?: boolean
    views?: number
    delivery?: boolean
    faceToFace?: boolean
    categories?: ProductCreatecategoriesInput | string[]
  }

  export type BoardCreateManyUserInput = {
    id?: string
    title: string
    description: string
    category?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: number
    dislikes?: number
    views?: number
  }

  export type ViewdBoardStoreCreateManyUserInput = {
    id?: string
    boardId: string
    viewedAt?: Date | string
  }

  export type ViewdProductStoreCreateManyUserInput = {
    id?: string
    productId: string
    viewedAt?: Date | string
  }

  export type BoardLikeDisLikeCreateManyUserInput = {
    id?: number
    type: string
    createdAt?: Date | string
    boardId: string
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type MessageCreateManySenderInput = {
    id?: string
    text?: string | null
    image?: string | null
    receiverId: string
    conversationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageCreateManyReceiverInput = {
    id?: string
    text?: string | null
    image?: string | null
    senderId: string
    conversationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageSrc?: ProductUpdateimageSrcInput | string[]
    price?: IntFieldUpdateOperationsInput | number
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    addressDetail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sold?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    delivery?: BoolFieldUpdateOperationsInput | boolean
    faceToFace?: BoolFieldUpdateOperationsInput | boolean
    categories?: ProductUpdatecategoriesInput | string[]
    ViewdProductStore?: ViewdProductStoreUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageSrc?: ProductUpdateimageSrcInput | string[]
    price?: IntFieldUpdateOperationsInput | number
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    addressDetail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sold?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    delivery?: BoolFieldUpdateOperationsInput | boolean
    faceToFace?: BoolFieldUpdateOperationsInput | boolean
    categories?: ProductUpdatecategoriesInput | string[]
    ViewdProductStore?: ViewdProductStoreUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageSrc?: ProductUpdateimageSrcInput | string[]
    price?: IntFieldUpdateOperationsInput | number
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    addressDetail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sold?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    delivery?: BoolFieldUpdateOperationsInput | boolean
    faceToFace?: BoolFieldUpdateOperationsInput | boolean
    categories?: ProductUpdatecategoriesInput | string[]
  }

  export type BoardUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: IntFieldUpdateOperationsInput | number
    dislikes?: IntFieldUpdateOperationsInput | number
    views?: IntFieldUpdateOperationsInput | number
    ViewdBoardStore?: ViewdBoardStoreUpdateManyWithoutBoardNestedInput
    BoardLikeDisLike?: BoardLikeDisLikeUpdateManyWithoutBoardNestedInput
  }

  export type BoardUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: IntFieldUpdateOperationsInput | number
    dislikes?: IntFieldUpdateOperationsInput | number
    views?: IntFieldUpdateOperationsInput | number
    ViewdBoardStore?: ViewdBoardStoreUncheckedUpdateManyWithoutBoardNestedInput
    BoardLikeDisLike?: BoardLikeDisLikeUncheckedUpdateManyWithoutBoardNestedInput
  }

  export type BoardUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: IntFieldUpdateOperationsInput | number
    dislikes?: IntFieldUpdateOperationsInput | number
    views?: IntFieldUpdateOperationsInput | number
  }

  export type ViewdBoardStoreUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    board?: BoardUpdateOneRequiredWithoutViewdBoardStoreNestedInput
  }

  export type ViewdBoardStoreUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    boardId?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViewdBoardStoreUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    boardId?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViewdProductStoreUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutViewdProductStoreNestedInput
  }

  export type ViewdProductStoreUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViewdProductStoreUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoardLikeDisLikeUpdateWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    board?: BoardUpdateOneRequiredWithoutBoardLikeDisLikeNestedInput
  }

  export type BoardLikeDisLikeUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    boardId?: StringFieldUpdateOperationsInput | string
  }

  export type BoardLikeDisLikeUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    boardId?: StringFieldUpdateOperationsInput | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ConversationUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUpdateManyWithoutConversationNestedInput
  }

  export type ConversationUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type ConversationUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiver?: UserUpdateOneRequiredWithoutReceivedMessagesNestedInput
    conversation?: ConversationUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    receiverId?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    receiverId?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSendMessagesNestedInput
    conversation?: ConversationUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    senderId?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    senderId?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViewdBoardStoreCreateManyBoardInput = {
    id?: string
    userId: string
    viewedAt?: Date | string
  }

  export type BoardLikeDisLikeCreateManyBoardInput = {
    id?: number
    type: string
    createdAt?: Date | string
    userId: string
  }

  export type ViewdBoardStoreUpdateWithoutBoardInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutViewdBoardStoreNestedInput
  }

  export type ViewdBoardStoreUncheckedUpdateWithoutBoardInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViewdBoardStoreUncheckedUpdateManyWithoutBoardInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoardLikeDisLikeUpdateWithoutBoardInput = {
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBoardLikeDisLikeNestedInput
  }

  export type BoardLikeDisLikeUncheckedUpdateWithoutBoardInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type BoardLikeDisLikeUncheckedUpdateManyWithoutBoardInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ViewdProductStoreCreateManyProductInput = {
    id?: string
    userId: string
    viewedAt?: Date | string
  }

  export type ViewdProductStoreUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutViewdProductStoreNestedInput
  }

  export type ViewdProductStoreUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViewdProductStoreUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyConversationInput = {
    id?: string
    text?: string | null
    image?: string | null
    senderId: string
    receiverId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutConversationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    favoriteIds?: UserUpdatefavoriteIdsInput | string[]
    sessions?: SessionUpdateManyWithoutUserNestedInput
    Product?: ProductUpdateManyWithoutUserNestedInput
    Board?: BoardUpdateManyWithoutUserNestedInput
    ViewdBoardStore?: ViewdBoardStoreUpdateManyWithoutUserNestedInput
    ViewdProductStore?: ViewdProductStoreUpdateManyWithoutUserNestedInput
    BoardLikeDisLike?: BoardLikeDisLikeUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sendMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutConversationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    favoriteIds?: UserUpdatefavoriteIdsInput | string[]
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Product?: ProductUncheckedUpdateManyWithoutUserNestedInput
    Board?: BoardUncheckedUpdateManyWithoutUserNestedInput
    ViewdBoardStore?: ViewdBoardStoreUncheckedUpdateManyWithoutUserNestedInput
    ViewdProductStore?: ViewdProductStoreUncheckedUpdateManyWithoutUserNestedInput
    BoardLikeDisLike?: BoardLikeDisLikeUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sendMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateManyWithoutConversationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    favoriteIds?: UserUpdatefavoriteIdsInput | string[]
  }

  export type MessageUpdateWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSendMessagesNestedInput
    receiver?: UserUpdateOneRequiredWithoutReceivedMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BoardCountOutputTypeDefaultArgs instead
     */
    export type BoardCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BoardCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductCountOutputTypeDefaultArgs instead
     */
    export type ProductCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ConversationCountOutputTypeDefaultArgs instead
     */
    export type ConversationCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ConversationCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AccountDefaultArgs instead
     */
    export type AccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AccountDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SessionDefaultArgs instead
     */
    export type SessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SessionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VerificationRequestDefaultArgs instead
     */
    export type VerificationRequestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VerificationRequestDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BoardDefaultArgs instead
     */
    export type BoardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BoardDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BoardLikeDisLikeDefaultArgs instead
     */
    export type BoardLikeDisLikeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BoardLikeDisLikeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductDefaultArgs instead
     */
    export type ProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ViewdBoardStoreDefaultArgs instead
     */
    export type ViewdBoardStoreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ViewdBoardStoreDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ViewdProductStoreDefaultArgs instead
     */
    export type ViewdProductStoreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ViewdProductStoreDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ConversationDefaultArgs instead
     */
    export type ConversationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ConversationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MessageDefaultArgs instead
     */
    export type MessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MessageDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}