
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
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
 * Model Challenge
 * 
 */
export type Challenge = $Result.DefaultSelection<Prisma.$ChallengePayload>
/**
 * Model Essay
 * 
 */
export type Essay = $Result.DefaultSelection<Prisma.$EssayPayload>
/**
 * Model ChallengeProgress
 * 
 */
export type ChallengeProgress = $Result.DefaultSelection<Prisma.$ChallengeProgressPayload>
/**
 * Model Dopamine
 * 
 */
export type Dopamine = $Result.DefaultSelection<Prisma.$DopaminePayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
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
 * // Fetch zero or more Accounts
 * const accounts = await prisma.account.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

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
   * `prisma.challenge`: Exposes CRUD operations for the **Challenge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Challenges
    * const challenges = await prisma.challenge.findMany()
    * ```
    */
  get challenge(): Prisma.ChallengeDelegate<ExtArgs>;

  /**
   * `prisma.essay`: Exposes CRUD operations for the **Essay** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Essays
    * const essays = await prisma.essay.findMany()
    * ```
    */
  get essay(): Prisma.EssayDelegate<ExtArgs>;

  /**
   * `prisma.challengeProgress`: Exposes CRUD operations for the **ChallengeProgress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChallengeProgresses
    * const challengeProgresses = await prisma.challengeProgress.findMany()
    * ```
    */
  get challengeProgress(): Prisma.ChallengeProgressDelegate<ExtArgs>;

  /**
   * `prisma.dopamine`: Exposes CRUD operations for the **Dopamine** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dopamines
    * const dopamines = await prisma.dopamine.findMany()
    * ```
    */
  get dopamine(): Prisma.DopamineDelegate<ExtArgs>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs>;

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
   * Prisma Client JS version: 5.3.1
   * Query Engine version: 61e140623197a131c2a6189271ffee05a7aa9a59
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
    Account: 'Account',
    Session: 'Session',
    User: 'User',
    Board: 'Board',
    BoardLikeDisLike: 'BoardLikeDisLike',
    Product: 'Product',
    ViewdBoardStore: 'ViewdBoardStore',
    Challenge: 'Challenge',
    Essay: 'Essay',
    ChallengeProgress: 'ChallengeProgress',
    Dopamine: 'Dopamine',
    VerificationToken: 'VerificationToken',
    Conversation: 'Conversation',
    Message: 'Message'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'account' | 'session' | 'user' | 'board' | 'boardLikeDisLike' | 'product' | 'viewdBoardStore' | 'challenge' | 'essay' | 'challengeProgress' | 'dopamine' | 'verificationToken' | 'conversation' | 'message'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
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
      Challenge: {
        payload: Prisma.$ChallengePayload<ExtArgs>
        fields: Prisma.ChallengeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChallengeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChallengeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>
          }
          findFirst: {
            args: Prisma.ChallengeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChallengeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>
          }
          findMany: {
            args: Prisma.ChallengeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>[]
          }
          create: {
            args: Prisma.ChallengeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>
          }
          createMany: {
            args: Prisma.ChallengeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ChallengeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>
          }
          update: {
            args: Prisma.ChallengeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>
          }
          deleteMany: {
            args: Prisma.ChallengeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ChallengeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ChallengeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>
          }
          aggregate: {
            args: Prisma.ChallengeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateChallenge>
          }
          groupBy: {
            args: Prisma.ChallengeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ChallengeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChallengeCountArgs<ExtArgs>,
            result: $Utils.Optional<ChallengeCountAggregateOutputType> | number
          }
        }
      }
      Essay: {
        payload: Prisma.$EssayPayload<ExtArgs>
        fields: Prisma.EssayFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EssayFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EssayPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EssayFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EssayPayload>
          }
          findFirst: {
            args: Prisma.EssayFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EssayPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EssayFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EssayPayload>
          }
          findMany: {
            args: Prisma.EssayFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EssayPayload>[]
          }
          create: {
            args: Prisma.EssayCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EssayPayload>
          }
          createMany: {
            args: Prisma.EssayCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.EssayDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EssayPayload>
          }
          update: {
            args: Prisma.EssayUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EssayPayload>
          }
          deleteMany: {
            args: Prisma.EssayDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.EssayUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.EssayUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EssayPayload>
          }
          aggregate: {
            args: Prisma.EssayAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateEssay>
          }
          groupBy: {
            args: Prisma.EssayGroupByArgs<ExtArgs>,
            result: $Utils.Optional<EssayGroupByOutputType>[]
          }
          count: {
            args: Prisma.EssayCountArgs<ExtArgs>,
            result: $Utils.Optional<EssayCountAggregateOutputType> | number
          }
        }
      }
      ChallengeProgress: {
        payload: Prisma.$ChallengeProgressPayload<ExtArgs>
        fields: Prisma.ChallengeProgressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChallengeProgressFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChallengeProgressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChallengeProgressFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChallengeProgressPayload>
          }
          findFirst: {
            args: Prisma.ChallengeProgressFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChallengeProgressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChallengeProgressFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChallengeProgressPayload>
          }
          findMany: {
            args: Prisma.ChallengeProgressFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChallengeProgressPayload>[]
          }
          create: {
            args: Prisma.ChallengeProgressCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChallengeProgressPayload>
          }
          createMany: {
            args: Prisma.ChallengeProgressCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ChallengeProgressDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChallengeProgressPayload>
          }
          update: {
            args: Prisma.ChallengeProgressUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChallengeProgressPayload>
          }
          deleteMany: {
            args: Prisma.ChallengeProgressDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ChallengeProgressUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ChallengeProgressUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChallengeProgressPayload>
          }
          aggregate: {
            args: Prisma.ChallengeProgressAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateChallengeProgress>
          }
          groupBy: {
            args: Prisma.ChallengeProgressGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ChallengeProgressGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChallengeProgressCountArgs<ExtArgs>,
            result: $Utils.Optional<ChallengeProgressCountAggregateOutputType> | number
          }
        }
      }
      Dopamine: {
        payload: Prisma.$DopaminePayload<ExtArgs>
        fields: Prisma.DopamineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DopamineFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DopaminePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DopamineFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DopaminePayload>
          }
          findFirst: {
            args: Prisma.DopamineFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DopaminePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DopamineFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DopaminePayload>
          }
          findMany: {
            args: Prisma.DopamineFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DopaminePayload>[]
          }
          create: {
            args: Prisma.DopamineCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DopaminePayload>
          }
          createMany: {
            args: Prisma.DopamineCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DopamineDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DopaminePayload>
          }
          update: {
            args: Prisma.DopamineUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DopaminePayload>
          }
          deleteMany: {
            args: Prisma.DopamineDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DopamineUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DopamineUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DopaminePayload>
          }
          aggregate: {
            args: Prisma.DopamineAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDopamine>
          }
          groupBy: {
            args: Prisma.DopamineGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DopamineGroupByOutputType>[]
          }
          count: {
            args: Prisma.DopamineCountArgs<ExtArgs>,
            result: $Utils.Optional<DopamineCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>,
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>,
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
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
    accounts: number
    sessions: number
    Product: number
    Board: number
    ViewdBoardStore: number
    BoardLikeDisLike: number
    challengeProgress: number
    conversations: number
    sendMessages: number
    receivedMessages: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    Product?: boolean | UserCountOutputTypeCountProductArgs
    Board?: boolean | UserCountOutputTypeCountBoardArgs
    ViewdBoardStore?: boolean | UserCountOutputTypeCountViewdBoardStoreArgs
    BoardLikeDisLike?: boolean | UserCountOutputTypeCountBoardLikeDisLikeArgs
    challengeProgress?: boolean | UserCountOutputTypeCountChallengeProgressArgs
    conversations?: boolean | UserCountOutputTypeCountConversationsArgs
    sendMessages?: boolean | UserCountOutputTypeCountSendMessagesArgs
    receivedMessages?: boolean | UserCountOutputTypeCountReceivedMessagesArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProductArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBoardArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: BoardWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountViewdBoardStoreArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ViewdBoardStoreWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBoardLikeDisLikeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: BoardLikeDisLikeWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChallengeProgressArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ChallengeProgressWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountConversationsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ConversationWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSendMessagesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedMessagesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }



  /**
   * Count Type BoardCountOutputType
   */

  export type BoardCountOutputType = {
    ViewdBoardStore: number
    BoardLikeDisLike: number
  }

  export type BoardCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    ViewdBoardStore?: boolean | BoardCountOutputTypeCountViewdBoardStoreArgs
    BoardLikeDisLike?: boolean | BoardCountOutputTypeCountBoardLikeDisLikeArgs
  }

  // Custom InputTypes

  /**
   * BoardCountOutputType without action
   */
  export type BoardCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoardCountOutputType
     */
    select?: BoardCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * BoardCountOutputType without action
   */
  export type BoardCountOutputTypeCountViewdBoardStoreArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ViewdBoardStoreWhereInput
  }


  /**
   * BoardCountOutputType without action
   */
  export type BoardCountOutputTypeCountBoardLikeDisLikeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: BoardLikeDisLikeWhereInput
  }



  /**
   * Count Type ChallengeCountOutputType
   */

  export type ChallengeCountOutputType = {
    essays: number
    challengeProgress: number
  }

  export type ChallengeCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    essays?: boolean | ChallengeCountOutputTypeCountEssaysArgs
    challengeProgress?: boolean | ChallengeCountOutputTypeCountChallengeProgressArgs
  }

  // Custom InputTypes

  /**
   * ChallengeCountOutputType without action
   */
  export type ChallengeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeCountOutputType
     */
    select?: ChallengeCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ChallengeCountOutputType without action
   */
  export type ChallengeCountOutputTypeCountEssaysArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: EssayWhereInput
  }


  /**
   * ChallengeCountOutputType without action
   */
  export type ChallengeCountOutputTypeCountChallengeProgressArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ChallengeProgressWhereInput
  }



  /**
   * Count Type ConversationCountOutputType
   */

  export type ConversationCountOutputType = {
    users: number
    messages: number
  }

  export type ConversationCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    users?: boolean | ConversationCountOutputTypeCountUsersArgs
    messages?: boolean | ConversationCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes

  /**
   * ConversationCountOutputType without action
   */
  export type ConversationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationCountOutputType
     */
    select?: ConversationCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ConversationCountOutputType without action
   */
  export type ConversationCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * ConversationCountOutputType without action
   */
  export type ConversationCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }



  /**
   * Models
   */

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

  export type AccountAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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




  export type AccountGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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


  export type AccountSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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

  export type AccountInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $AccountPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
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

  type AccountCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<AccountFindManyArgs, 'select' | 'include'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
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
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type AccountFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type AccountCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type AccountUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type AccountDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
  }


  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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




  export type SessionGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
    sessionToken: string
    userId: string
    expires: Date
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


  export type SessionSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $SessionPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }


  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<SessionFindManyArgs, 'select' | 'include'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
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
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Session model
   */ 
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type SessionFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type SessionCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type SessionUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type SessionDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
  }


  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    level: number | null
  }

  export type UserSumAggregateOutputType = {
    level: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    hashedPassword: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    level: number | null
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
    level: number | null
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
    level: number
    tier: number
    createdAt: number
    updatedAt: number
    userType: number
    favoriteIds: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    level?: true
  }

  export type UserSumAggregateInputType = {
    level?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    hashedPassword?: true
    email?: true
    emailVerified?: true
    image?: true
    level?: true
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
    level?: true
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
    level?: true
    tier?: true
    createdAt?: true
    updatedAt?: true
    userType?: true
    favoriteIds?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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




  export type UserGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
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
    level: number
    tier: string[]
    createdAt: Date
    updatedAt: Date
    userType: $Enums.UserType
    favoriteIds: string[]
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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


  export type UserSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    hashedPassword?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    level?: boolean
    tier?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userType?: boolean
    favoriteIds?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    Product?: boolean | User$ProductArgs<ExtArgs>
    Board?: boolean | User$BoardArgs<ExtArgs>
    ViewdBoardStore?: boolean | User$ViewdBoardStoreArgs<ExtArgs>
    BoardLikeDisLike?: boolean | User$BoardLikeDisLikeArgs<ExtArgs>
    challengeProgress?: boolean | User$challengeProgressArgs<ExtArgs>
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
    level?: boolean
    tier?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userType?: boolean
    favoriteIds?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    Product?: boolean | User$ProductArgs<ExtArgs>
    Board?: boolean | User$BoardArgs<ExtArgs>
    ViewdBoardStore?: boolean | User$ViewdBoardStoreArgs<ExtArgs>
    BoardLikeDisLike?: boolean | User$BoardLikeDisLikeArgs<ExtArgs>
    challengeProgress?: boolean | User$challengeProgressArgs<ExtArgs>
    conversations?: boolean | User$conversationsArgs<ExtArgs>
    sendMessages?: boolean | User$sendMessagesArgs<ExtArgs>
    receivedMessages?: boolean | User$receivedMessagesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      Product: Prisma.$ProductPayload<ExtArgs>[]
      Board: Prisma.$BoardPayload<ExtArgs>[]
      ViewdBoardStore: Prisma.$ViewdBoardStorePayload<ExtArgs>[]
      BoardLikeDisLike: Prisma.$BoardLikeDisLikePayload<ExtArgs>[]
      challengeProgress: Prisma.$ChallengeProgressPayload<ExtArgs>[]
      conversations: Prisma.$ConversationPayload<ExtArgs>[]
      sendMessages: Prisma.$MessagePayload<ExtArgs>[]
      receivedMessages: Prisma.$MessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: string
      name: string | null
      hashedPassword: string | null
      email: string | null
      emailVerified: Date | null
      image: string | null
      level: number
      tier: string[]
      createdAt: Date
      updatedAt: Date
      userType: $Enums.UserType
      favoriteIds: string[]
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findMany'> | Null>;

    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findMany'> | Null>;

    Product<T extends User$ProductArgs<ExtArgs> = {}>(args?: Subset<T, User$ProductArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findMany'> | Null>;

    Board<T extends User$BoardArgs<ExtArgs> = {}>(args?: Subset<T, User$BoardArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, 'findMany'> | Null>;

    ViewdBoardStore<T extends User$ViewdBoardStoreArgs<ExtArgs> = {}>(args?: Subset<T, User$ViewdBoardStoreArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewdBoardStorePayload<ExtArgs>, T, 'findMany'> | Null>;

    BoardLikeDisLike<T extends User$BoardLikeDisLikeArgs<ExtArgs> = {}>(args?: Subset<T, User$BoardLikeDisLikeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoardLikeDisLikePayload<ExtArgs>, T, 'findMany'> | Null>;

    challengeProgress<T extends User$challengeProgressArgs<ExtArgs> = {}>(args?: Subset<T, User$challengeProgressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengeProgressPayload<ExtArgs>, T, 'findMany'> | Null>;

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
    readonly level: FieldRef<"User", 'Int'>
    readonly tier: FieldRef<"User", 'String[]'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly userType: FieldRef<"User", 'UserType'>
    readonly favoriteIds: FieldRef<"User", 'String[]'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type UserFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type UserFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type UserCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type UserCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type UserUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type UserDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type User$ProductArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type User$BoardArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type User$ViewdBoardStoreArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
   * User.BoardLikeDisLike
   */
  export type User$BoardLikeDisLikeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
   * User.challengeProgress
   */
  export type User$challengeProgressArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeProgress
     */
    select?: ChallengeProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChallengeProgressInclude<ExtArgs> | null
    where?: ChallengeProgressWhereInput
    orderBy?: ChallengeProgressOrderByWithRelationInput | ChallengeProgressOrderByWithRelationInput[]
    cursor?: ChallengeProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChallengeProgressScalarFieldEnum | ChallengeProgressScalarFieldEnum[]
  }


  /**
   * User.conversations
   */
  export type User$conversationsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type User$sendMessagesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type User$receivedMessagesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type UserDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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

  export type BoardAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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




  export type BoardGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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


  export type BoardSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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

  export type BoardInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    ViewdBoardStore?: boolean | Board$ViewdBoardStoreArgs<ExtArgs>
    BoardLikeDisLike?: boolean | Board$BoardLikeDisLikeArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | BoardCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $BoardPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Board"
    objects: {
      ViewdBoardStore: Prisma.$ViewdBoardStorePayload<ExtArgs>[]
      BoardLikeDisLike: Prisma.$BoardLikeDisLikePayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
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

  type BoardCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<BoardFindManyArgs, 'select' | 'include'> & {
      select?: BoardCountAggregateInputType | true
    }

  export interface BoardDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
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
  export interface Prisma__BoardClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
  export type BoardFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type BoardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type BoardFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type BoardFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type BoardFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type BoardCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type BoardCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Boards.
     */
    data: BoardCreateManyInput | BoardCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Board update
   */
  export type BoardUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type BoardUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type BoardUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type BoardDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type BoardDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Boards to delete
     */
    where?: BoardWhereInput
  }


  /**
   * Board.ViewdBoardStore
   */
  export type Board$ViewdBoardStoreArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type Board$BoardLikeDisLikeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type BoardDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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

  export type BoardLikeDisLikeAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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




  export type BoardLikeDisLikeGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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


  export type BoardLikeDisLikeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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

  export type BoardLikeDisLikeInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    board?: boolean | BoardDefaultArgs<ExtArgs>
  }


  export type $BoardLikeDisLikePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "BoardLikeDisLike"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      board: Prisma.$BoardPayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      id: number
      type: string
      createdAt: Date
      userId: string
      boardId: string
    }, ExtArgs["result"]["boardLikeDisLike"]>
    composites: {}
  }


  type BoardLikeDisLikeGetPayload<S extends boolean | null | undefined | BoardLikeDisLikeDefaultArgs> = $Result.GetResult<Prisma.$BoardLikeDisLikePayload, S>

  type BoardLikeDisLikeCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<BoardLikeDisLikeFindManyArgs, 'select' | 'include'> & {
      select?: BoardLikeDisLikeCountAggregateInputType | true
    }

  export interface BoardLikeDisLikeDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
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
  export interface Prisma__BoardLikeDisLikeClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
  export type BoardLikeDisLikeFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type BoardLikeDisLikeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type BoardLikeDisLikeFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type BoardLikeDisLikeFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type BoardLikeDisLikeFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type BoardLikeDisLikeCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type BoardLikeDisLikeCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BoardLikeDisLikes.
     */
    data: BoardLikeDisLikeCreateManyInput | BoardLikeDisLikeCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * BoardLikeDisLike update
   */
  export type BoardLikeDisLikeUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type BoardLikeDisLikeUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type BoardLikeDisLikeUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type BoardLikeDisLikeDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type BoardLikeDisLikeDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which BoardLikeDisLikes to delete
     */
    where?: BoardLikeDisLikeWhereInput
  }


  /**
   * BoardLikeDisLike without action
   */
  export type BoardLikeDisLikeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  }

  export type ProductSumAggregateOutputType = {
    price: number | null
    latitude: number | null
    longitude: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    imageSrc: string | null
    category: string | null
    userId: string | null
    price: number | null
    latitude: number | null
    longitude: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    imageSrc: string | null
    category: string | null
    userId: string | null
    price: number | null
    latitude: number | null
    longitude: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    title: number
    description: number
    imageSrc: number
    category: number
    userId: number
    price: number
    latitude: number
    longitude: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    price?: true
    latitude?: true
    longitude?: true
  }

  export type ProductSumAggregateInputType = {
    price?: true
    latitude?: true
    longitude?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    imageSrc?: true
    category?: true
    userId?: true
    price?: true
    latitude?: true
    longitude?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    imageSrc?: true
    category?: true
    userId?: true
    price?: true
    latitude?: true
    longitude?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    imageSrc?: true
    category?: true
    userId?: true
    price?: true
    latitude?: true
    longitude?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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




  export type ProductGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
    imageSrc: string
    category: string
    userId: string
    price: number
    latitude: number
    longitude: number
    createdAt: Date
    updatedAt: Date
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


  export type ProductSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    imageSrc?: boolean
    category?: boolean
    userId?: boolean
    price?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    imageSrc?: boolean
    category?: boolean
    userId?: boolean
    price?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $ProductPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      id: string
      title: string
      description: string
      imageSrc: string
      category: string
      userId: string
      price: number
      latitude: number
      longitude: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }


  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ProductFindManyArgs, 'select' | 'include'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
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
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Product model
   */ 
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly title: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly imageSrc: FieldRef<"Product", 'String'>
    readonly category: FieldRef<"Product", 'String'>
    readonly userId: FieldRef<"Product", 'String'>
    readonly price: FieldRef<"Product", 'Int'>
    readonly latitude: FieldRef<"Product", 'Float'>
    readonly longitude: FieldRef<"Product", 'Float'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type ProductFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type ProductCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type ProductUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type ProductDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
  }


  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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

  export type ViewdBoardStoreAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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




  export type ViewdBoardStoreGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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


  export type ViewdBoardStoreSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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

  export type ViewdBoardStoreInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    board?: boolean | BoardDefaultArgs<ExtArgs>
  }


  export type $ViewdBoardStorePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "ViewdBoardStore"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      board: Prisma.$BoardPayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      id: string
      userId: string
      boardId: string
      viewedAt: Date
    }, ExtArgs["result"]["viewdBoardStore"]>
    composites: {}
  }


  type ViewdBoardStoreGetPayload<S extends boolean | null | undefined | ViewdBoardStoreDefaultArgs> = $Result.GetResult<Prisma.$ViewdBoardStorePayload, S>

  type ViewdBoardStoreCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ViewdBoardStoreFindManyArgs, 'select' | 'include'> & {
      select?: ViewdBoardStoreCountAggregateInputType | true
    }

  export interface ViewdBoardStoreDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
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
  export interface Prisma__ViewdBoardStoreClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
  export type ViewdBoardStoreFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type ViewdBoardStoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type ViewdBoardStoreFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type ViewdBoardStoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type ViewdBoardStoreFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type ViewdBoardStoreCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type ViewdBoardStoreCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ViewdBoardStores.
     */
    data: ViewdBoardStoreCreateManyInput | ViewdBoardStoreCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ViewdBoardStore update
   */
  export type ViewdBoardStoreUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type ViewdBoardStoreUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type ViewdBoardStoreUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type ViewdBoardStoreDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type ViewdBoardStoreDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which ViewdBoardStores to delete
     */
    where?: ViewdBoardStoreWhereInput
  }


  /**
   * ViewdBoardStore without action
   */
  export type ViewdBoardStoreDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
   * Model Challenge
   */

  export type AggregateChallenge = {
    _count: ChallengeCountAggregateOutputType | null
    _avg: ChallengeAvgAggregateOutputType | null
    _sum: ChallengeSumAggregateOutputType | null
    _min: ChallengeMinAggregateOutputType | null
    _max: ChallengeMaxAggregateOutputType | null
  }

  export type ChallengeAvgAggregateOutputType = {
    progress: number | null
    participants: number | null
  }

  export type ChallengeSumAggregateOutputType = {
    progress: number | null
    participants: number | null
  }

  export type ChallengeMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    imageSrc: string | null
    reward: string | null
    category: string | null
    period: string | null
    progress: number | null
    disabled: boolean | null
    participants: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChallengeMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    imageSrc: string | null
    reward: string | null
    category: string | null
    period: string | null
    progress: number | null
    disabled: boolean | null
    participants: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChallengeCountAggregateOutputType = {
    id: number
    title: number
    description: number
    imageSrc: number
    reward: number
    category: number
    period: number
    progress: number
    disabled: number
    participants: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChallengeAvgAggregateInputType = {
    progress?: true
    participants?: true
  }

  export type ChallengeSumAggregateInputType = {
    progress?: true
    participants?: true
  }

  export type ChallengeMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    imageSrc?: true
    reward?: true
    category?: true
    period?: true
    progress?: true
    disabled?: true
    participants?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChallengeMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    imageSrc?: true
    reward?: true
    category?: true
    period?: true
    progress?: true
    disabled?: true
    participants?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChallengeCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    imageSrc?: true
    reward?: true
    category?: true
    period?: true
    progress?: true
    disabled?: true
    participants?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChallengeAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Challenge to aggregate.
     */
    where?: ChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Challenges to fetch.
     */
    orderBy?: ChallengeOrderByWithRelationInput | ChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Challenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Challenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Challenges
    **/
    _count?: true | ChallengeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChallengeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChallengeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChallengeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChallengeMaxAggregateInputType
  }

  export type GetChallengeAggregateType<T extends ChallengeAggregateArgs> = {
        [P in keyof T & keyof AggregateChallenge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChallenge[P]>
      : GetScalarType<T[P], AggregateChallenge[P]>
  }




  export type ChallengeGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ChallengeWhereInput
    orderBy?: ChallengeOrderByWithAggregationInput | ChallengeOrderByWithAggregationInput[]
    by: ChallengeScalarFieldEnum[] | ChallengeScalarFieldEnum
    having?: ChallengeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChallengeCountAggregateInputType | true
    _avg?: ChallengeAvgAggregateInputType
    _sum?: ChallengeSumAggregateInputType
    _min?: ChallengeMinAggregateInputType
    _max?: ChallengeMaxAggregateInputType
  }

  export type ChallengeGroupByOutputType = {
    id: string
    title: string
    description: string
    imageSrc: string
    reward: string
    category: string
    period: string
    progress: number
    disabled: boolean
    participants: number
    createdAt: Date
    updatedAt: Date
    _count: ChallengeCountAggregateOutputType | null
    _avg: ChallengeAvgAggregateOutputType | null
    _sum: ChallengeSumAggregateOutputType | null
    _min: ChallengeMinAggregateOutputType | null
    _max: ChallengeMaxAggregateOutputType | null
  }

  type GetChallengeGroupByPayload<T extends ChallengeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChallengeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChallengeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChallengeGroupByOutputType[P]>
            : GetScalarType<T[P], ChallengeGroupByOutputType[P]>
        }
      >
    >


  export type ChallengeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    imageSrc?: boolean
    reward?: boolean
    category?: boolean
    period?: boolean
    progress?: boolean
    disabled?: boolean
    participants?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    essays?: boolean | Challenge$essaysArgs<ExtArgs>
    challengeProgress?: boolean | Challenge$challengeProgressArgs<ExtArgs>
    _count?: boolean | ChallengeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["challenge"]>

  export type ChallengeSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    imageSrc?: boolean
    reward?: boolean
    category?: boolean
    period?: boolean
    progress?: boolean
    disabled?: boolean
    participants?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChallengeInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    essays?: boolean | Challenge$essaysArgs<ExtArgs>
    challengeProgress?: boolean | Challenge$challengeProgressArgs<ExtArgs>
    _count?: boolean | ChallengeCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ChallengePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Challenge"
    objects: {
      essays: Prisma.$EssayPayload<ExtArgs>[]
      challengeProgress: Prisma.$ChallengeProgressPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: string
      title: string
      description: string
      imageSrc: string
      reward: string
      category: string
      period: string
      progress: number
      disabled: boolean
      participants: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["challenge"]>
    composites: {}
  }


  type ChallengeGetPayload<S extends boolean | null | undefined | ChallengeDefaultArgs> = $Result.GetResult<Prisma.$ChallengePayload, S>

  type ChallengeCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ChallengeFindManyArgs, 'select' | 'include'> & {
      select?: ChallengeCountAggregateInputType | true
    }

  export interface ChallengeDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Challenge'], meta: { name: 'Challenge' } }
    /**
     * Find zero or one Challenge that matches the filter.
     * @param {ChallengeFindUniqueArgs} args - Arguments to find a Challenge
     * @example
     * // Get one Challenge
     * const challenge = await prisma.challenge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ChallengeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ChallengeFindUniqueArgs<ExtArgs>>
    ): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Challenge that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ChallengeFindUniqueOrThrowArgs} args - Arguments to find a Challenge
     * @example
     * // Get one Challenge
     * const challenge = await prisma.challenge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ChallengeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ChallengeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Challenge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeFindFirstArgs} args - Arguments to find a Challenge
     * @example
     * // Get one Challenge
     * const challenge = await prisma.challenge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ChallengeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ChallengeFindFirstArgs<ExtArgs>>
    ): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Challenge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeFindFirstOrThrowArgs} args - Arguments to find a Challenge
     * @example
     * // Get one Challenge
     * const challenge = await prisma.challenge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ChallengeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ChallengeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Challenges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Challenges
     * const challenges = await prisma.challenge.findMany()
     * 
     * // Get first 10 Challenges
     * const challenges = await prisma.challenge.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const challengeWithIdOnly = await prisma.challenge.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ChallengeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChallengeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Challenge.
     * @param {ChallengeCreateArgs} args - Arguments to create a Challenge.
     * @example
     * // Create one Challenge
     * const Challenge = await prisma.challenge.create({
     *   data: {
     *     // ... data to create a Challenge
     *   }
     * })
     * 
    **/
    create<T extends ChallengeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ChallengeCreateArgs<ExtArgs>>
    ): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Challenges.
     *     @param {ChallengeCreateManyArgs} args - Arguments to create many Challenges.
     *     @example
     *     // Create many Challenges
     *     const challenge = await prisma.challenge.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ChallengeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChallengeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Challenge.
     * @param {ChallengeDeleteArgs} args - Arguments to delete one Challenge.
     * @example
     * // Delete one Challenge
     * const Challenge = await prisma.challenge.delete({
     *   where: {
     *     // ... filter to delete one Challenge
     *   }
     * })
     * 
    **/
    delete<T extends ChallengeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ChallengeDeleteArgs<ExtArgs>>
    ): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Challenge.
     * @param {ChallengeUpdateArgs} args - Arguments to update one Challenge.
     * @example
     * // Update one Challenge
     * const challenge = await prisma.challenge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ChallengeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ChallengeUpdateArgs<ExtArgs>>
    ): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Challenges.
     * @param {ChallengeDeleteManyArgs} args - Arguments to filter Challenges to delete.
     * @example
     * // Delete a few Challenges
     * const { count } = await prisma.challenge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ChallengeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChallengeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Challenges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Challenges
     * const challenge = await prisma.challenge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ChallengeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ChallengeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Challenge.
     * @param {ChallengeUpsertArgs} args - Arguments to update or create a Challenge.
     * @example
     * // Update or create a Challenge
     * const challenge = await prisma.challenge.upsert({
     *   create: {
     *     // ... data to create a Challenge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Challenge we want to update
     *   }
     * })
    **/
    upsert<T extends ChallengeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ChallengeUpsertArgs<ExtArgs>>
    ): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Challenges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeCountArgs} args - Arguments to filter Challenges to count.
     * @example
     * // Count the number of Challenges
     * const count = await prisma.challenge.count({
     *   where: {
     *     // ... the filter for the Challenges we want to count
     *   }
     * })
    **/
    count<T extends ChallengeCountArgs>(
      args?: Subset<T, ChallengeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChallengeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Challenge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChallengeAggregateArgs>(args: Subset<T, ChallengeAggregateArgs>): Prisma.PrismaPromise<GetChallengeAggregateType<T>>

    /**
     * Group by Challenge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeGroupByArgs} args - Group by arguments.
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
      T extends ChallengeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChallengeGroupByArgs['orderBy'] }
        : { orderBy?: ChallengeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChallengeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChallengeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Challenge model
   */
  readonly fields: ChallengeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Challenge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChallengeClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    essays<T extends Challenge$essaysArgs<ExtArgs> = {}>(args?: Subset<T, Challenge$essaysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EssayPayload<ExtArgs>, T, 'findMany'> | Null>;

    challengeProgress<T extends Challenge$challengeProgressArgs<ExtArgs> = {}>(args?: Subset<T, Challenge$challengeProgressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengeProgressPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the Challenge model
   */ 
  interface ChallengeFieldRefs {
    readonly id: FieldRef<"Challenge", 'String'>
    readonly title: FieldRef<"Challenge", 'String'>
    readonly description: FieldRef<"Challenge", 'String'>
    readonly imageSrc: FieldRef<"Challenge", 'String'>
    readonly reward: FieldRef<"Challenge", 'String'>
    readonly category: FieldRef<"Challenge", 'String'>
    readonly period: FieldRef<"Challenge", 'String'>
    readonly progress: FieldRef<"Challenge", 'Int'>
    readonly disabled: FieldRef<"Challenge", 'Boolean'>
    readonly participants: FieldRef<"Challenge", 'Int'>
    readonly createdAt: FieldRef<"Challenge", 'DateTime'>
    readonly updatedAt: FieldRef<"Challenge", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Challenge findUnique
   */
  export type ChallengeFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * Filter, which Challenge to fetch.
     */
    where: ChallengeWhereUniqueInput
  }


  /**
   * Challenge findUniqueOrThrow
   */
  export type ChallengeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * Filter, which Challenge to fetch.
     */
    where: ChallengeWhereUniqueInput
  }


  /**
   * Challenge findFirst
   */
  export type ChallengeFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * Filter, which Challenge to fetch.
     */
    where?: ChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Challenges to fetch.
     */
    orderBy?: ChallengeOrderByWithRelationInput | ChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Challenges.
     */
    cursor?: ChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Challenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Challenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Challenges.
     */
    distinct?: ChallengeScalarFieldEnum | ChallengeScalarFieldEnum[]
  }


  /**
   * Challenge findFirstOrThrow
   */
  export type ChallengeFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * Filter, which Challenge to fetch.
     */
    where?: ChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Challenges to fetch.
     */
    orderBy?: ChallengeOrderByWithRelationInput | ChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Challenges.
     */
    cursor?: ChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Challenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Challenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Challenges.
     */
    distinct?: ChallengeScalarFieldEnum | ChallengeScalarFieldEnum[]
  }


  /**
   * Challenge findMany
   */
  export type ChallengeFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * Filter, which Challenges to fetch.
     */
    where?: ChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Challenges to fetch.
     */
    orderBy?: ChallengeOrderByWithRelationInput | ChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Challenges.
     */
    cursor?: ChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Challenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Challenges.
     */
    skip?: number
    distinct?: ChallengeScalarFieldEnum | ChallengeScalarFieldEnum[]
  }


  /**
   * Challenge create
   */
  export type ChallengeCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * The data needed to create a Challenge.
     */
    data: XOR<ChallengeCreateInput, ChallengeUncheckedCreateInput>
  }


  /**
   * Challenge createMany
   */
  export type ChallengeCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Challenges.
     */
    data: ChallengeCreateManyInput | ChallengeCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Challenge update
   */
  export type ChallengeUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * The data needed to update a Challenge.
     */
    data: XOR<ChallengeUpdateInput, ChallengeUncheckedUpdateInput>
    /**
     * Choose, which Challenge to update.
     */
    where: ChallengeWhereUniqueInput
  }


  /**
   * Challenge updateMany
   */
  export type ChallengeUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Challenges.
     */
    data: XOR<ChallengeUpdateManyMutationInput, ChallengeUncheckedUpdateManyInput>
    /**
     * Filter which Challenges to update
     */
    where?: ChallengeWhereInput
  }


  /**
   * Challenge upsert
   */
  export type ChallengeUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * The filter to search for the Challenge to update in case it exists.
     */
    where: ChallengeWhereUniqueInput
    /**
     * In case the Challenge found by the `where` argument doesn't exist, create a new Challenge with this data.
     */
    create: XOR<ChallengeCreateInput, ChallengeUncheckedCreateInput>
    /**
     * In case the Challenge was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChallengeUpdateInput, ChallengeUncheckedUpdateInput>
  }


  /**
   * Challenge delete
   */
  export type ChallengeDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * Filter which Challenge to delete.
     */
    where: ChallengeWhereUniqueInput
  }


  /**
   * Challenge deleteMany
   */
  export type ChallengeDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Challenges to delete
     */
    where?: ChallengeWhereInput
  }


  /**
   * Challenge.essays
   */
  export type Challenge$essaysArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Essay
     */
    select?: EssaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EssayInclude<ExtArgs> | null
    where?: EssayWhereInput
    orderBy?: EssayOrderByWithRelationInput | EssayOrderByWithRelationInput[]
    cursor?: EssayWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EssayScalarFieldEnum | EssayScalarFieldEnum[]
  }


  /**
   * Challenge.challengeProgress
   */
  export type Challenge$challengeProgressArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeProgress
     */
    select?: ChallengeProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChallengeProgressInclude<ExtArgs> | null
    where?: ChallengeProgressWhereInput
    orderBy?: ChallengeProgressOrderByWithRelationInput | ChallengeProgressOrderByWithRelationInput[]
    cursor?: ChallengeProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChallengeProgressScalarFieldEnum | ChallengeProgressScalarFieldEnum[]
  }


  /**
   * Challenge without action
   */
  export type ChallengeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChallengeInclude<ExtArgs> | null
  }



  /**
   * Model Essay
   */

  export type AggregateEssay = {
    _count: EssayCountAggregateOutputType | null
    _min: EssayMinAggregateOutputType | null
    _max: EssayMaxAggregateOutputType | null
  }

  export type EssayMinAggregateOutputType = {
    id: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
    challengeId: string | null
  }

  export type EssayMaxAggregateOutputType = {
    id: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
    challengeId: string | null
  }

  export type EssayCountAggregateOutputType = {
    id: number
    content: number
    createdAt: number
    updatedAt: number
    challengeId: number
    _all: number
  }


  export type EssayMinAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    challengeId?: true
  }

  export type EssayMaxAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    challengeId?: true
  }

  export type EssayCountAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    challengeId?: true
    _all?: true
  }

  export type EssayAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Essay to aggregate.
     */
    where?: EssayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Essays to fetch.
     */
    orderBy?: EssayOrderByWithRelationInput | EssayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EssayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Essays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Essays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Essays
    **/
    _count?: true | EssayCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EssayMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EssayMaxAggregateInputType
  }

  export type GetEssayAggregateType<T extends EssayAggregateArgs> = {
        [P in keyof T & keyof AggregateEssay]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEssay[P]>
      : GetScalarType<T[P], AggregateEssay[P]>
  }




  export type EssayGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: EssayWhereInput
    orderBy?: EssayOrderByWithAggregationInput | EssayOrderByWithAggregationInput[]
    by: EssayScalarFieldEnum[] | EssayScalarFieldEnum
    having?: EssayScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EssayCountAggregateInputType | true
    _min?: EssayMinAggregateInputType
    _max?: EssayMaxAggregateInputType
  }

  export type EssayGroupByOutputType = {
    id: string
    content: string
    createdAt: Date
    updatedAt: Date
    challengeId: string
    _count: EssayCountAggregateOutputType | null
    _min: EssayMinAggregateOutputType | null
    _max: EssayMaxAggregateOutputType | null
  }

  type GetEssayGroupByPayload<T extends EssayGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EssayGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EssayGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EssayGroupByOutputType[P]>
            : GetScalarType<T[P], EssayGroupByOutputType[P]>
        }
      >
    >


  export type EssaySelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    challengeId?: boolean
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["essay"]>

  export type EssaySelectScalar = {
    id?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    challengeId?: boolean
  }

  export type EssayInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
  }


  export type $EssayPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Essay"
    objects: {
      challenge: Prisma.$ChallengePayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      id: string
      content: string
      createdAt: Date
      updatedAt: Date
      challengeId: string
    }, ExtArgs["result"]["essay"]>
    composites: {}
  }


  type EssayGetPayload<S extends boolean | null | undefined | EssayDefaultArgs> = $Result.GetResult<Prisma.$EssayPayload, S>

  type EssayCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<EssayFindManyArgs, 'select' | 'include'> & {
      select?: EssayCountAggregateInputType | true
    }

  export interface EssayDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Essay'], meta: { name: 'Essay' } }
    /**
     * Find zero or one Essay that matches the filter.
     * @param {EssayFindUniqueArgs} args - Arguments to find a Essay
     * @example
     * // Get one Essay
     * const essay = await prisma.essay.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EssayFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, EssayFindUniqueArgs<ExtArgs>>
    ): Prisma__EssayClient<$Result.GetResult<Prisma.$EssayPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Essay that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {EssayFindUniqueOrThrowArgs} args - Arguments to find a Essay
     * @example
     * // Get one Essay
     * const essay = await prisma.essay.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EssayFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EssayFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__EssayClient<$Result.GetResult<Prisma.$EssayPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Essay that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EssayFindFirstArgs} args - Arguments to find a Essay
     * @example
     * // Get one Essay
     * const essay = await prisma.essay.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EssayFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, EssayFindFirstArgs<ExtArgs>>
    ): Prisma__EssayClient<$Result.GetResult<Prisma.$EssayPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Essay that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EssayFindFirstOrThrowArgs} args - Arguments to find a Essay
     * @example
     * // Get one Essay
     * const essay = await prisma.essay.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends EssayFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EssayFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__EssayClient<$Result.GetResult<Prisma.$EssayPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Essays that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EssayFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Essays
     * const essays = await prisma.essay.findMany()
     * 
     * // Get first 10 Essays
     * const essays = await prisma.essay.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const essayWithIdOnly = await prisma.essay.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends EssayFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EssayFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EssayPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Essay.
     * @param {EssayCreateArgs} args - Arguments to create a Essay.
     * @example
     * // Create one Essay
     * const Essay = await prisma.essay.create({
     *   data: {
     *     // ... data to create a Essay
     *   }
     * })
     * 
    **/
    create<T extends EssayCreateArgs<ExtArgs>>(
      args: SelectSubset<T, EssayCreateArgs<ExtArgs>>
    ): Prisma__EssayClient<$Result.GetResult<Prisma.$EssayPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Essays.
     *     @param {EssayCreateManyArgs} args - Arguments to create many Essays.
     *     @example
     *     // Create many Essays
     *     const essay = await prisma.essay.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EssayCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EssayCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Essay.
     * @param {EssayDeleteArgs} args - Arguments to delete one Essay.
     * @example
     * // Delete one Essay
     * const Essay = await prisma.essay.delete({
     *   where: {
     *     // ... filter to delete one Essay
     *   }
     * })
     * 
    **/
    delete<T extends EssayDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, EssayDeleteArgs<ExtArgs>>
    ): Prisma__EssayClient<$Result.GetResult<Prisma.$EssayPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Essay.
     * @param {EssayUpdateArgs} args - Arguments to update one Essay.
     * @example
     * // Update one Essay
     * const essay = await prisma.essay.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EssayUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, EssayUpdateArgs<ExtArgs>>
    ): Prisma__EssayClient<$Result.GetResult<Prisma.$EssayPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Essays.
     * @param {EssayDeleteManyArgs} args - Arguments to filter Essays to delete.
     * @example
     * // Delete a few Essays
     * const { count } = await prisma.essay.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EssayDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EssayDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Essays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EssayUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Essays
     * const essay = await prisma.essay.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EssayUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, EssayUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Essay.
     * @param {EssayUpsertArgs} args - Arguments to update or create a Essay.
     * @example
     * // Update or create a Essay
     * const essay = await prisma.essay.upsert({
     *   create: {
     *     // ... data to create a Essay
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Essay we want to update
     *   }
     * })
    **/
    upsert<T extends EssayUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, EssayUpsertArgs<ExtArgs>>
    ): Prisma__EssayClient<$Result.GetResult<Prisma.$EssayPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Essays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EssayCountArgs} args - Arguments to filter Essays to count.
     * @example
     * // Count the number of Essays
     * const count = await prisma.essay.count({
     *   where: {
     *     // ... the filter for the Essays we want to count
     *   }
     * })
    **/
    count<T extends EssayCountArgs>(
      args?: Subset<T, EssayCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EssayCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Essay.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EssayAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EssayAggregateArgs>(args: Subset<T, EssayAggregateArgs>): Prisma.PrismaPromise<GetEssayAggregateType<T>>

    /**
     * Group by Essay.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EssayGroupByArgs} args - Group by arguments.
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
      T extends EssayGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EssayGroupByArgs['orderBy'] }
        : { orderBy?: EssayGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EssayGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEssayGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Essay model
   */
  readonly fields: EssayFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Essay.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EssayClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    challenge<T extends ChallengeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChallengeDefaultArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the Essay model
   */ 
  interface EssayFieldRefs {
    readonly id: FieldRef<"Essay", 'String'>
    readonly content: FieldRef<"Essay", 'String'>
    readonly createdAt: FieldRef<"Essay", 'DateTime'>
    readonly updatedAt: FieldRef<"Essay", 'DateTime'>
    readonly challengeId: FieldRef<"Essay", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Essay findUnique
   */
  export type EssayFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Essay
     */
    select?: EssaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EssayInclude<ExtArgs> | null
    /**
     * Filter, which Essay to fetch.
     */
    where: EssayWhereUniqueInput
  }


  /**
   * Essay findUniqueOrThrow
   */
  export type EssayFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Essay
     */
    select?: EssaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EssayInclude<ExtArgs> | null
    /**
     * Filter, which Essay to fetch.
     */
    where: EssayWhereUniqueInput
  }


  /**
   * Essay findFirst
   */
  export type EssayFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Essay
     */
    select?: EssaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EssayInclude<ExtArgs> | null
    /**
     * Filter, which Essay to fetch.
     */
    where?: EssayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Essays to fetch.
     */
    orderBy?: EssayOrderByWithRelationInput | EssayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Essays.
     */
    cursor?: EssayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Essays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Essays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Essays.
     */
    distinct?: EssayScalarFieldEnum | EssayScalarFieldEnum[]
  }


  /**
   * Essay findFirstOrThrow
   */
  export type EssayFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Essay
     */
    select?: EssaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EssayInclude<ExtArgs> | null
    /**
     * Filter, which Essay to fetch.
     */
    where?: EssayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Essays to fetch.
     */
    orderBy?: EssayOrderByWithRelationInput | EssayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Essays.
     */
    cursor?: EssayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Essays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Essays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Essays.
     */
    distinct?: EssayScalarFieldEnum | EssayScalarFieldEnum[]
  }


  /**
   * Essay findMany
   */
  export type EssayFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Essay
     */
    select?: EssaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EssayInclude<ExtArgs> | null
    /**
     * Filter, which Essays to fetch.
     */
    where?: EssayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Essays to fetch.
     */
    orderBy?: EssayOrderByWithRelationInput | EssayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Essays.
     */
    cursor?: EssayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Essays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Essays.
     */
    skip?: number
    distinct?: EssayScalarFieldEnum | EssayScalarFieldEnum[]
  }


  /**
   * Essay create
   */
  export type EssayCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Essay
     */
    select?: EssaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EssayInclude<ExtArgs> | null
    /**
     * The data needed to create a Essay.
     */
    data: XOR<EssayCreateInput, EssayUncheckedCreateInput>
  }


  /**
   * Essay createMany
   */
  export type EssayCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Essays.
     */
    data: EssayCreateManyInput | EssayCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Essay update
   */
  export type EssayUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Essay
     */
    select?: EssaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EssayInclude<ExtArgs> | null
    /**
     * The data needed to update a Essay.
     */
    data: XOR<EssayUpdateInput, EssayUncheckedUpdateInput>
    /**
     * Choose, which Essay to update.
     */
    where: EssayWhereUniqueInput
  }


  /**
   * Essay updateMany
   */
  export type EssayUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Essays.
     */
    data: XOR<EssayUpdateManyMutationInput, EssayUncheckedUpdateManyInput>
    /**
     * Filter which Essays to update
     */
    where?: EssayWhereInput
  }


  /**
   * Essay upsert
   */
  export type EssayUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Essay
     */
    select?: EssaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EssayInclude<ExtArgs> | null
    /**
     * The filter to search for the Essay to update in case it exists.
     */
    where: EssayWhereUniqueInput
    /**
     * In case the Essay found by the `where` argument doesn't exist, create a new Essay with this data.
     */
    create: XOR<EssayCreateInput, EssayUncheckedCreateInput>
    /**
     * In case the Essay was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EssayUpdateInput, EssayUncheckedUpdateInput>
  }


  /**
   * Essay delete
   */
  export type EssayDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Essay
     */
    select?: EssaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EssayInclude<ExtArgs> | null
    /**
     * Filter which Essay to delete.
     */
    where: EssayWhereUniqueInput
  }


  /**
   * Essay deleteMany
   */
  export type EssayDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Essays to delete
     */
    where?: EssayWhereInput
  }


  /**
   * Essay without action
   */
  export type EssayDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Essay
     */
    select?: EssaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EssayInclude<ExtArgs> | null
  }



  /**
   * Model ChallengeProgress
   */

  export type AggregateChallengeProgress = {
    _count: ChallengeProgressCountAggregateOutputType | null
    _avg: ChallengeProgressAvgAggregateOutputType | null
    _sum: ChallengeProgressSumAggregateOutputType | null
    _min: ChallengeProgressMinAggregateOutputType | null
    _max: ChallengeProgressMaxAggregateOutputType | null
  }

  export type ChallengeProgressAvgAggregateOutputType = {
    progress: number | null
  }

  export type ChallengeProgressSumAggregateOutputType = {
    progress: number | null
  }

  export type ChallengeProgressMinAggregateOutputType = {
    id: string | null
    userId: string | null
    challengeId: string | null
    progress: number | null
    completed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChallengeProgressMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    challengeId: string | null
    progress: number | null
    completed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChallengeProgressCountAggregateOutputType = {
    id: number
    userId: number
    challengeId: number
    progress: number
    completed: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChallengeProgressAvgAggregateInputType = {
    progress?: true
  }

  export type ChallengeProgressSumAggregateInputType = {
    progress?: true
  }

  export type ChallengeProgressMinAggregateInputType = {
    id?: true
    userId?: true
    challengeId?: true
    progress?: true
    completed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChallengeProgressMaxAggregateInputType = {
    id?: true
    userId?: true
    challengeId?: true
    progress?: true
    completed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChallengeProgressCountAggregateInputType = {
    id?: true
    userId?: true
    challengeId?: true
    progress?: true
    completed?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChallengeProgressAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChallengeProgress to aggregate.
     */
    where?: ChallengeProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChallengeProgresses to fetch.
     */
    orderBy?: ChallengeProgressOrderByWithRelationInput | ChallengeProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChallengeProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChallengeProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChallengeProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChallengeProgresses
    **/
    _count?: true | ChallengeProgressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChallengeProgressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChallengeProgressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChallengeProgressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChallengeProgressMaxAggregateInputType
  }

  export type GetChallengeProgressAggregateType<T extends ChallengeProgressAggregateArgs> = {
        [P in keyof T & keyof AggregateChallengeProgress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChallengeProgress[P]>
      : GetScalarType<T[P], AggregateChallengeProgress[P]>
  }




  export type ChallengeProgressGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ChallengeProgressWhereInput
    orderBy?: ChallengeProgressOrderByWithAggregationInput | ChallengeProgressOrderByWithAggregationInput[]
    by: ChallengeProgressScalarFieldEnum[] | ChallengeProgressScalarFieldEnum
    having?: ChallengeProgressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChallengeProgressCountAggregateInputType | true
    _avg?: ChallengeProgressAvgAggregateInputType
    _sum?: ChallengeProgressSumAggregateInputType
    _min?: ChallengeProgressMinAggregateInputType
    _max?: ChallengeProgressMaxAggregateInputType
  }

  export type ChallengeProgressGroupByOutputType = {
    id: string
    userId: string
    challengeId: string
    progress: number
    completed: boolean
    createdAt: Date
    updatedAt: Date
    _count: ChallengeProgressCountAggregateOutputType | null
    _avg: ChallengeProgressAvgAggregateOutputType | null
    _sum: ChallengeProgressSumAggregateOutputType | null
    _min: ChallengeProgressMinAggregateOutputType | null
    _max: ChallengeProgressMaxAggregateOutputType | null
  }

  type GetChallengeProgressGroupByPayload<T extends ChallengeProgressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChallengeProgressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChallengeProgressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChallengeProgressGroupByOutputType[P]>
            : GetScalarType<T[P], ChallengeProgressGroupByOutputType[P]>
        }
      >
    >


  export type ChallengeProgressSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    challengeId?: boolean
    progress?: boolean
    completed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["challengeProgress"]>

  export type ChallengeProgressSelectScalar = {
    id?: boolean
    userId?: boolean
    challengeId?: boolean
    progress?: boolean
    completed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChallengeProgressInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
  }


  export type $ChallengeProgressPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "ChallengeProgress"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      challenge: Prisma.$ChallengePayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      id: string
      userId: string
      challengeId: string
      progress: number
      completed: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["challengeProgress"]>
    composites: {}
  }


  type ChallengeProgressGetPayload<S extends boolean | null | undefined | ChallengeProgressDefaultArgs> = $Result.GetResult<Prisma.$ChallengeProgressPayload, S>

  type ChallengeProgressCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ChallengeProgressFindManyArgs, 'select' | 'include'> & {
      select?: ChallengeProgressCountAggregateInputType | true
    }

  export interface ChallengeProgressDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChallengeProgress'], meta: { name: 'ChallengeProgress' } }
    /**
     * Find zero or one ChallengeProgress that matches the filter.
     * @param {ChallengeProgressFindUniqueArgs} args - Arguments to find a ChallengeProgress
     * @example
     * // Get one ChallengeProgress
     * const challengeProgress = await prisma.challengeProgress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ChallengeProgressFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ChallengeProgressFindUniqueArgs<ExtArgs>>
    ): Prisma__ChallengeProgressClient<$Result.GetResult<Prisma.$ChallengeProgressPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ChallengeProgress that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ChallengeProgressFindUniqueOrThrowArgs} args - Arguments to find a ChallengeProgress
     * @example
     * // Get one ChallengeProgress
     * const challengeProgress = await prisma.challengeProgress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ChallengeProgressFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ChallengeProgressFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ChallengeProgressClient<$Result.GetResult<Prisma.$ChallengeProgressPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ChallengeProgress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeProgressFindFirstArgs} args - Arguments to find a ChallengeProgress
     * @example
     * // Get one ChallengeProgress
     * const challengeProgress = await prisma.challengeProgress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ChallengeProgressFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ChallengeProgressFindFirstArgs<ExtArgs>>
    ): Prisma__ChallengeProgressClient<$Result.GetResult<Prisma.$ChallengeProgressPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ChallengeProgress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeProgressFindFirstOrThrowArgs} args - Arguments to find a ChallengeProgress
     * @example
     * // Get one ChallengeProgress
     * const challengeProgress = await prisma.challengeProgress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ChallengeProgressFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ChallengeProgressFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ChallengeProgressClient<$Result.GetResult<Prisma.$ChallengeProgressPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ChallengeProgresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeProgressFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChallengeProgresses
     * const challengeProgresses = await prisma.challengeProgress.findMany()
     * 
     * // Get first 10 ChallengeProgresses
     * const challengeProgresses = await prisma.challengeProgress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const challengeProgressWithIdOnly = await prisma.challengeProgress.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ChallengeProgressFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChallengeProgressFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengeProgressPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ChallengeProgress.
     * @param {ChallengeProgressCreateArgs} args - Arguments to create a ChallengeProgress.
     * @example
     * // Create one ChallengeProgress
     * const ChallengeProgress = await prisma.challengeProgress.create({
     *   data: {
     *     // ... data to create a ChallengeProgress
     *   }
     * })
     * 
    **/
    create<T extends ChallengeProgressCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ChallengeProgressCreateArgs<ExtArgs>>
    ): Prisma__ChallengeProgressClient<$Result.GetResult<Prisma.$ChallengeProgressPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ChallengeProgresses.
     *     @param {ChallengeProgressCreateManyArgs} args - Arguments to create many ChallengeProgresses.
     *     @example
     *     // Create many ChallengeProgresses
     *     const challengeProgress = await prisma.challengeProgress.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ChallengeProgressCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChallengeProgressCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ChallengeProgress.
     * @param {ChallengeProgressDeleteArgs} args - Arguments to delete one ChallengeProgress.
     * @example
     * // Delete one ChallengeProgress
     * const ChallengeProgress = await prisma.challengeProgress.delete({
     *   where: {
     *     // ... filter to delete one ChallengeProgress
     *   }
     * })
     * 
    **/
    delete<T extends ChallengeProgressDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ChallengeProgressDeleteArgs<ExtArgs>>
    ): Prisma__ChallengeProgressClient<$Result.GetResult<Prisma.$ChallengeProgressPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ChallengeProgress.
     * @param {ChallengeProgressUpdateArgs} args - Arguments to update one ChallengeProgress.
     * @example
     * // Update one ChallengeProgress
     * const challengeProgress = await prisma.challengeProgress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ChallengeProgressUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ChallengeProgressUpdateArgs<ExtArgs>>
    ): Prisma__ChallengeProgressClient<$Result.GetResult<Prisma.$ChallengeProgressPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ChallengeProgresses.
     * @param {ChallengeProgressDeleteManyArgs} args - Arguments to filter ChallengeProgresses to delete.
     * @example
     * // Delete a few ChallengeProgresses
     * const { count } = await prisma.challengeProgress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ChallengeProgressDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChallengeProgressDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChallengeProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeProgressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChallengeProgresses
     * const challengeProgress = await prisma.challengeProgress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ChallengeProgressUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ChallengeProgressUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ChallengeProgress.
     * @param {ChallengeProgressUpsertArgs} args - Arguments to update or create a ChallengeProgress.
     * @example
     * // Update or create a ChallengeProgress
     * const challengeProgress = await prisma.challengeProgress.upsert({
     *   create: {
     *     // ... data to create a ChallengeProgress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChallengeProgress we want to update
     *   }
     * })
    **/
    upsert<T extends ChallengeProgressUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ChallengeProgressUpsertArgs<ExtArgs>>
    ): Prisma__ChallengeProgressClient<$Result.GetResult<Prisma.$ChallengeProgressPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ChallengeProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeProgressCountArgs} args - Arguments to filter ChallengeProgresses to count.
     * @example
     * // Count the number of ChallengeProgresses
     * const count = await prisma.challengeProgress.count({
     *   where: {
     *     // ... the filter for the ChallengeProgresses we want to count
     *   }
     * })
    **/
    count<T extends ChallengeProgressCountArgs>(
      args?: Subset<T, ChallengeProgressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChallengeProgressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChallengeProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeProgressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChallengeProgressAggregateArgs>(args: Subset<T, ChallengeProgressAggregateArgs>): Prisma.PrismaPromise<GetChallengeProgressAggregateType<T>>

    /**
     * Group by ChallengeProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeProgressGroupByArgs} args - Group by arguments.
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
      T extends ChallengeProgressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChallengeProgressGroupByArgs['orderBy'] }
        : { orderBy?: ChallengeProgressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChallengeProgressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChallengeProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChallengeProgress model
   */
  readonly fields: ChallengeProgressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChallengeProgress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChallengeProgressClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    challenge<T extends ChallengeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChallengeDefaultArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the ChallengeProgress model
   */ 
  interface ChallengeProgressFieldRefs {
    readonly id: FieldRef<"ChallengeProgress", 'String'>
    readonly userId: FieldRef<"ChallengeProgress", 'String'>
    readonly challengeId: FieldRef<"ChallengeProgress", 'String'>
    readonly progress: FieldRef<"ChallengeProgress", 'Int'>
    readonly completed: FieldRef<"ChallengeProgress", 'Boolean'>
    readonly createdAt: FieldRef<"ChallengeProgress", 'DateTime'>
    readonly updatedAt: FieldRef<"ChallengeProgress", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * ChallengeProgress findUnique
   */
  export type ChallengeProgressFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeProgress
     */
    select?: ChallengeProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChallengeProgressInclude<ExtArgs> | null
    /**
     * Filter, which ChallengeProgress to fetch.
     */
    where: ChallengeProgressWhereUniqueInput
  }


  /**
   * ChallengeProgress findUniqueOrThrow
   */
  export type ChallengeProgressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeProgress
     */
    select?: ChallengeProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChallengeProgressInclude<ExtArgs> | null
    /**
     * Filter, which ChallengeProgress to fetch.
     */
    where: ChallengeProgressWhereUniqueInput
  }


  /**
   * ChallengeProgress findFirst
   */
  export type ChallengeProgressFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeProgress
     */
    select?: ChallengeProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChallengeProgressInclude<ExtArgs> | null
    /**
     * Filter, which ChallengeProgress to fetch.
     */
    where?: ChallengeProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChallengeProgresses to fetch.
     */
    orderBy?: ChallengeProgressOrderByWithRelationInput | ChallengeProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChallengeProgresses.
     */
    cursor?: ChallengeProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChallengeProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChallengeProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChallengeProgresses.
     */
    distinct?: ChallengeProgressScalarFieldEnum | ChallengeProgressScalarFieldEnum[]
  }


  /**
   * ChallengeProgress findFirstOrThrow
   */
  export type ChallengeProgressFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeProgress
     */
    select?: ChallengeProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChallengeProgressInclude<ExtArgs> | null
    /**
     * Filter, which ChallengeProgress to fetch.
     */
    where?: ChallengeProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChallengeProgresses to fetch.
     */
    orderBy?: ChallengeProgressOrderByWithRelationInput | ChallengeProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChallengeProgresses.
     */
    cursor?: ChallengeProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChallengeProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChallengeProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChallengeProgresses.
     */
    distinct?: ChallengeProgressScalarFieldEnum | ChallengeProgressScalarFieldEnum[]
  }


  /**
   * ChallengeProgress findMany
   */
  export type ChallengeProgressFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeProgress
     */
    select?: ChallengeProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChallengeProgressInclude<ExtArgs> | null
    /**
     * Filter, which ChallengeProgresses to fetch.
     */
    where?: ChallengeProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChallengeProgresses to fetch.
     */
    orderBy?: ChallengeProgressOrderByWithRelationInput | ChallengeProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChallengeProgresses.
     */
    cursor?: ChallengeProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChallengeProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChallengeProgresses.
     */
    skip?: number
    distinct?: ChallengeProgressScalarFieldEnum | ChallengeProgressScalarFieldEnum[]
  }


  /**
   * ChallengeProgress create
   */
  export type ChallengeProgressCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeProgress
     */
    select?: ChallengeProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChallengeProgressInclude<ExtArgs> | null
    /**
     * The data needed to create a ChallengeProgress.
     */
    data: XOR<ChallengeProgressCreateInput, ChallengeProgressUncheckedCreateInput>
  }


  /**
   * ChallengeProgress createMany
   */
  export type ChallengeProgressCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChallengeProgresses.
     */
    data: ChallengeProgressCreateManyInput | ChallengeProgressCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ChallengeProgress update
   */
  export type ChallengeProgressUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeProgress
     */
    select?: ChallengeProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChallengeProgressInclude<ExtArgs> | null
    /**
     * The data needed to update a ChallengeProgress.
     */
    data: XOR<ChallengeProgressUpdateInput, ChallengeProgressUncheckedUpdateInput>
    /**
     * Choose, which ChallengeProgress to update.
     */
    where: ChallengeProgressWhereUniqueInput
  }


  /**
   * ChallengeProgress updateMany
   */
  export type ChallengeProgressUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChallengeProgresses.
     */
    data: XOR<ChallengeProgressUpdateManyMutationInput, ChallengeProgressUncheckedUpdateManyInput>
    /**
     * Filter which ChallengeProgresses to update
     */
    where?: ChallengeProgressWhereInput
  }


  /**
   * ChallengeProgress upsert
   */
  export type ChallengeProgressUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeProgress
     */
    select?: ChallengeProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChallengeProgressInclude<ExtArgs> | null
    /**
     * The filter to search for the ChallengeProgress to update in case it exists.
     */
    where: ChallengeProgressWhereUniqueInput
    /**
     * In case the ChallengeProgress found by the `where` argument doesn't exist, create a new ChallengeProgress with this data.
     */
    create: XOR<ChallengeProgressCreateInput, ChallengeProgressUncheckedCreateInput>
    /**
     * In case the ChallengeProgress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChallengeProgressUpdateInput, ChallengeProgressUncheckedUpdateInput>
  }


  /**
   * ChallengeProgress delete
   */
  export type ChallengeProgressDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeProgress
     */
    select?: ChallengeProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChallengeProgressInclude<ExtArgs> | null
    /**
     * Filter which ChallengeProgress to delete.
     */
    where: ChallengeProgressWhereUniqueInput
  }


  /**
   * ChallengeProgress deleteMany
   */
  export type ChallengeProgressDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChallengeProgresses to delete
     */
    where?: ChallengeProgressWhereInput
  }


  /**
   * ChallengeProgress without action
   */
  export type ChallengeProgressDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeProgress
     */
    select?: ChallengeProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChallengeProgressInclude<ExtArgs> | null
  }



  /**
   * Model Dopamine
   */

  export type AggregateDopamine = {
    _count: DopamineCountAggregateOutputType | null
    _min: DopamineMinAggregateOutputType | null
    _max: DopamineMaxAggregateOutputType | null
  }

  export type DopamineMinAggregateOutputType = {
    dopamine: string | null
  }

  export type DopamineMaxAggregateOutputType = {
    dopamine: string | null
  }

  export type DopamineCountAggregateOutputType = {
    dopamine: number
    _all: number
  }


  export type DopamineMinAggregateInputType = {
    dopamine?: true
  }

  export type DopamineMaxAggregateInputType = {
    dopamine?: true
  }

  export type DopamineCountAggregateInputType = {
    dopamine?: true
    _all?: true
  }

  export type DopamineAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dopamine to aggregate.
     */
    where?: DopamineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dopamines to fetch.
     */
    orderBy?: DopamineOrderByWithRelationInput | DopamineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DopamineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dopamines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dopamines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dopamines
    **/
    _count?: true | DopamineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DopamineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DopamineMaxAggregateInputType
  }

  export type GetDopamineAggregateType<T extends DopamineAggregateArgs> = {
        [P in keyof T & keyof AggregateDopamine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDopamine[P]>
      : GetScalarType<T[P], AggregateDopamine[P]>
  }




  export type DopamineGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: DopamineWhereInput
    orderBy?: DopamineOrderByWithAggregationInput | DopamineOrderByWithAggregationInput[]
    by: DopamineScalarFieldEnum[] | DopamineScalarFieldEnum
    having?: DopamineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DopamineCountAggregateInputType | true
    _min?: DopamineMinAggregateInputType
    _max?: DopamineMaxAggregateInputType
  }

  export type DopamineGroupByOutputType = {
    dopamine: string
    _count: DopamineCountAggregateOutputType | null
    _min: DopamineMinAggregateOutputType | null
    _max: DopamineMaxAggregateOutputType | null
  }

  type GetDopamineGroupByPayload<T extends DopamineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DopamineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DopamineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DopamineGroupByOutputType[P]>
            : GetScalarType<T[P], DopamineGroupByOutputType[P]>
        }
      >
    >


  export type DopamineSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    dopamine?: boolean
  }, ExtArgs["result"]["dopamine"]>

  export type DopamineSelectScalar = {
    dopamine?: boolean
  }


  export type $DopaminePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Dopamine"
    objects: {}
    scalars: $Extensions.GetResult<{
      dopamine: string
    }, ExtArgs["result"]["dopamine"]>
    composites: {}
  }


  type DopamineGetPayload<S extends boolean | null | undefined | DopamineDefaultArgs> = $Result.GetResult<Prisma.$DopaminePayload, S>

  type DopamineCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<DopamineFindManyArgs, 'select' | 'include'> & {
      select?: DopamineCountAggregateInputType | true
    }

  export interface DopamineDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dopamine'], meta: { name: 'Dopamine' } }
    /**
     * Find zero or one Dopamine that matches the filter.
     * @param {DopamineFindUniqueArgs} args - Arguments to find a Dopamine
     * @example
     * // Get one Dopamine
     * const dopamine = await prisma.dopamine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DopamineFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DopamineFindUniqueArgs<ExtArgs>>
    ): Prisma__DopamineClient<$Result.GetResult<Prisma.$DopaminePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Dopamine that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DopamineFindUniqueOrThrowArgs} args - Arguments to find a Dopamine
     * @example
     * // Get one Dopamine
     * const dopamine = await prisma.dopamine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DopamineFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DopamineFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DopamineClient<$Result.GetResult<Prisma.$DopaminePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Dopamine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DopamineFindFirstArgs} args - Arguments to find a Dopamine
     * @example
     * // Get one Dopamine
     * const dopamine = await prisma.dopamine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DopamineFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DopamineFindFirstArgs<ExtArgs>>
    ): Prisma__DopamineClient<$Result.GetResult<Prisma.$DopaminePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Dopamine that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DopamineFindFirstOrThrowArgs} args - Arguments to find a Dopamine
     * @example
     * // Get one Dopamine
     * const dopamine = await prisma.dopamine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DopamineFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DopamineFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DopamineClient<$Result.GetResult<Prisma.$DopaminePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Dopamines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DopamineFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dopamines
     * const dopamines = await prisma.dopamine.findMany()
     * 
     * // Get first 10 Dopamines
     * const dopamines = await prisma.dopamine.findMany({ take: 10 })
     * 
     * // Only select the `dopamine`
     * const dopamineWithDopamineOnly = await prisma.dopamine.findMany({ select: { dopamine: true } })
     * 
    **/
    findMany<T extends DopamineFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DopamineFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DopaminePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Dopamine.
     * @param {DopamineCreateArgs} args - Arguments to create a Dopamine.
     * @example
     * // Create one Dopamine
     * const Dopamine = await prisma.dopamine.create({
     *   data: {
     *     // ... data to create a Dopamine
     *   }
     * })
     * 
    **/
    create<T extends DopamineCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DopamineCreateArgs<ExtArgs>>
    ): Prisma__DopamineClient<$Result.GetResult<Prisma.$DopaminePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Dopamines.
     *     @param {DopamineCreateManyArgs} args - Arguments to create many Dopamines.
     *     @example
     *     // Create many Dopamines
     *     const dopamine = await prisma.dopamine.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DopamineCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DopamineCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Dopamine.
     * @param {DopamineDeleteArgs} args - Arguments to delete one Dopamine.
     * @example
     * // Delete one Dopamine
     * const Dopamine = await prisma.dopamine.delete({
     *   where: {
     *     // ... filter to delete one Dopamine
     *   }
     * })
     * 
    **/
    delete<T extends DopamineDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DopamineDeleteArgs<ExtArgs>>
    ): Prisma__DopamineClient<$Result.GetResult<Prisma.$DopaminePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Dopamine.
     * @param {DopamineUpdateArgs} args - Arguments to update one Dopamine.
     * @example
     * // Update one Dopamine
     * const dopamine = await prisma.dopamine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DopamineUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DopamineUpdateArgs<ExtArgs>>
    ): Prisma__DopamineClient<$Result.GetResult<Prisma.$DopaminePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Dopamines.
     * @param {DopamineDeleteManyArgs} args - Arguments to filter Dopamines to delete.
     * @example
     * // Delete a few Dopamines
     * const { count } = await prisma.dopamine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DopamineDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DopamineDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dopamines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DopamineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dopamines
     * const dopamine = await prisma.dopamine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DopamineUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DopamineUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Dopamine.
     * @param {DopamineUpsertArgs} args - Arguments to update or create a Dopamine.
     * @example
     * // Update or create a Dopamine
     * const dopamine = await prisma.dopamine.upsert({
     *   create: {
     *     // ... data to create a Dopamine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dopamine we want to update
     *   }
     * })
    **/
    upsert<T extends DopamineUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DopamineUpsertArgs<ExtArgs>>
    ): Prisma__DopamineClient<$Result.GetResult<Prisma.$DopaminePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Dopamines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DopamineCountArgs} args - Arguments to filter Dopamines to count.
     * @example
     * // Count the number of Dopamines
     * const count = await prisma.dopamine.count({
     *   where: {
     *     // ... the filter for the Dopamines we want to count
     *   }
     * })
    **/
    count<T extends DopamineCountArgs>(
      args?: Subset<T, DopamineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DopamineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dopamine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DopamineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DopamineAggregateArgs>(args: Subset<T, DopamineAggregateArgs>): Prisma.PrismaPromise<GetDopamineAggregateType<T>>

    /**
     * Group by Dopamine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DopamineGroupByArgs} args - Group by arguments.
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
      T extends DopamineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DopamineGroupByArgs['orderBy'] }
        : { orderBy?: DopamineGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DopamineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDopamineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dopamine model
   */
  readonly fields: DopamineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dopamine.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DopamineClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Dopamine model
   */ 
  interface DopamineFieldRefs {
    readonly dopamine: FieldRef<"Dopamine", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Dopamine findUnique
   */
  export type DopamineFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dopamine
     */
    select?: DopamineSelect<ExtArgs> | null
    /**
     * Filter, which Dopamine to fetch.
     */
    where: DopamineWhereUniqueInput
  }


  /**
   * Dopamine findUniqueOrThrow
   */
  export type DopamineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dopamine
     */
    select?: DopamineSelect<ExtArgs> | null
    /**
     * Filter, which Dopamine to fetch.
     */
    where: DopamineWhereUniqueInput
  }


  /**
   * Dopamine findFirst
   */
  export type DopamineFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dopamine
     */
    select?: DopamineSelect<ExtArgs> | null
    /**
     * Filter, which Dopamine to fetch.
     */
    where?: DopamineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dopamines to fetch.
     */
    orderBy?: DopamineOrderByWithRelationInput | DopamineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dopamines.
     */
    cursor?: DopamineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dopamines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dopamines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dopamines.
     */
    distinct?: DopamineScalarFieldEnum | DopamineScalarFieldEnum[]
  }


  /**
   * Dopamine findFirstOrThrow
   */
  export type DopamineFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dopamine
     */
    select?: DopamineSelect<ExtArgs> | null
    /**
     * Filter, which Dopamine to fetch.
     */
    where?: DopamineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dopamines to fetch.
     */
    orderBy?: DopamineOrderByWithRelationInput | DopamineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dopamines.
     */
    cursor?: DopamineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dopamines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dopamines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dopamines.
     */
    distinct?: DopamineScalarFieldEnum | DopamineScalarFieldEnum[]
  }


  /**
   * Dopamine findMany
   */
  export type DopamineFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dopamine
     */
    select?: DopamineSelect<ExtArgs> | null
    /**
     * Filter, which Dopamines to fetch.
     */
    where?: DopamineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dopamines to fetch.
     */
    orderBy?: DopamineOrderByWithRelationInput | DopamineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dopamines.
     */
    cursor?: DopamineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dopamines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dopamines.
     */
    skip?: number
    distinct?: DopamineScalarFieldEnum | DopamineScalarFieldEnum[]
  }


  /**
   * Dopamine create
   */
  export type DopamineCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dopamine
     */
    select?: DopamineSelect<ExtArgs> | null
    /**
     * The data needed to create a Dopamine.
     */
    data?: XOR<DopamineCreateInput, DopamineUncheckedCreateInput>
  }


  /**
   * Dopamine createMany
   */
  export type DopamineCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Dopamines.
     */
    data: DopamineCreateManyInput | DopamineCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Dopamine update
   */
  export type DopamineUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dopamine
     */
    select?: DopamineSelect<ExtArgs> | null
    /**
     * The data needed to update a Dopamine.
     */
    data: XOR<DopamineUpdateInput, DopamineUncheckedUpdateInput>
    /**
     * Choose, which Dopamine to update.
     */
    where: DopamineWhereUniqueInput
  }


  /**
   * Dopamine updateMany
   */
  export type DopamineUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dopamines.
     */
    data: XOR<DopamineUpdateManyMutationInput, DopamineUncheckedUpdateManyInput>
    /**
     * Filter which Dopamines to update
     */
    where?: DopamineWhereInput
  }


  /**
   * Dopamine upsert
   */
  export type DopamineUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dopamine
     */
    select?: DopamineSelect<ExtArgs> | null
    /**
     * The filter to search for the Dopamine to update in case it exists.
     */
    where: DopamineWhereUniqueInput
    /**
     * In case the Dopamine found by the `where` argument doesn't exist, create a new Dopamine with this data.
     */
    create: XOR<DopamineCreateInput, DopamineUncheckedCreateInput>
    /**
     * In case the Dopamine was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DopamineUpdateInput, DopamineUncheckedUpdateInput>
  }


  /**
   * Dopamine delete
   */
  export type DopamineDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dopamine
     */
    select?: DopamineSelect<ExtArgs> | null
    /**
     * Filter which Dopamine to delete.
     */
    where: DopamineWhereUniqueInput
  }


  /**
   * Dopamine deleteMany
   */
  export type DopamineDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dopamines to delete
     */
    where?: DopamineWhereInput
  }


  /**
   * Dopamine without action
   */
  export type DopamineDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dopamine
     */
    select?: DopamineSelect<ExtArgs> | null
  }



  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }


  export type $VerificationTokenPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }


  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<VerificationTokenFindManyArgs, 'select' | 'include'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VerificationTokenFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one VerificationToken that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VerificationTokenFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
    **/
    findMany<T extends VerificationTokenFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
    **/
    create<T extends VerificationTokenCreateArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many VerificationTokens.
     *     @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     *     @example
     *     // Create many VerificationTokens
     *     const verificationToken = await prisma.verificationToken.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends VerificationTokenCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
    **/
    delete<T extends VerificationTokenDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VerificationTokenUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VerificationTokenDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VerificationTokenUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
    **/
    upsert<T extends VerificationTokenUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
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
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the VerificationToken model
   */ 
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }


  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }


  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }


  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }


  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }


  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }


  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }


  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
  }


  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }


  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }


  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
  }


  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
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

  export type ConversationAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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




  export type ConversationGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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


  export type ConversationSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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

  export type ConversationInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    users?: boolean | Conversation$usersArgs<ExtArgs>
    messages?: boolean | Conversation$messagesArgs<ExtArgs>
    _count?: boolean | ConversationCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ConversationPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Conversation"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      messages: Prisma.$MessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: string
      name: string | null
      senderId: string
      receiverId: string
      createdAt: Date
    }, ExtArgs["result"]["conversation"]>
    composites: {}
  }


  type ConversationGetPayload<S extends boolean | null | undefined | ConversationDefaultArgs> = $Result.GetResult<Prisma.$ConversationPayload, S>

  type ConversationCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ConversationFindManyArgs, 'select' | 'include'> & {
      select?: ConversationCountAggregateInputType | true
    }

  export interface ConversationDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
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
  export interface Prisma__ConversationClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
  export type ConversationFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type ConversationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type ConversationFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type ConversationFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type ConversationFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type ConversationCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type ConversationCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Conversations.
     */
    data: ConversationCreateManyInput | ConversationCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Conversation update
   */
  export type ConversationUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type ConversationUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type ConversationUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type ConversationDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type ConversationDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conversations to delete
     */
    where?: ConversationWhereInput
  }


  /**
   * Conversation.users
   */
  export type Conversation$usersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type Conversation$messagesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type ConversationDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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

  export type MessageAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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




  export type MessageGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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


  export type MessageSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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

  export type MessageInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
  }


  export type $MessagePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      sender: Prisma.$UserPayload<ExtArgs>
      receiver: Prisma.$UserPayload<ExtArgs>
      conversation: Prisma.$ConversationPayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
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

  type MessageCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<MessageFindManyArgs, 'select' | 'include'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
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
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type MessageFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type MessageCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type MessageUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type MessageDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
  }


  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    hashedPassword: 'hashedPassword',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    level: 'level',
    tier: 'tier',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userType: 'userType',
    favoriteIds: 'favoriteIds'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


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
    category: 'category',
    userId: 'userId',
    price: 'price',
    latitude: 'latitude',
    longitude: 'longitude',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const ViewdBoardStoreScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    boardId: 'boardId',
    viewedAt: 'viewedAt'
  };

  export type ViewdBoardStoreScalarFieldEnum = (typeof ViewdBoardStoreScalarFieldEnum)[keyof typeof ViewdBoardStoreScalarFieldEnum]


  export const ChallengeScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    imageSrc: 'imageSrc',
    reward: 'reward',
    category: 'category',
    period: 'period',
    progress: 'progress',
    disabled: 'disabled',
    participants: 'participants',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChallengeScalarFieldEnum = (typeof ChallengeScalarFieldEnum)[keyof typeof ChallengeScalarFieldEnum]


  export const EssayScalarFieldEnum: {
    id: 'id',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    challengeId: 'challengeId'
  };

  export type EssayScalarFieldEnum = (typeof EssayScalarFieldEnum)[keyof typeof EssayScalarFieldEnum]


  export const ChallengeProgressScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    challengeId: 'challengeId',
    progress: 'progress',
    completed: 'completed',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChallengeProgressScalarFieldEnum = (typeof ChallengeProgressScalarFieldEnum)[keyof typeof ChallengeProgressScalarFieldEnum]


  export const DopamineScalarFieldEnum: {
    dopamine: 'dopamine'
  };

  export type DopamineScalarFieldEnum = (typeof DopamineScalarFieldEnum)[keyof typeof DopamineScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

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
    level?: IntFilter<"User"> | number
    tier?: StringNullableListFilter<"User">
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    userType?: EnumUserTypeFilter<"User"> | $Enums.UserType
    favoriteIds?: StringNullableListFilter<"User">
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    Product?: ProductListRelationFilter
    Board?: BoardListRelationFilter
    ViewdBoardStore?: ViewdBoardStoreListRelationFilter
    BoardLikeDisLike?: BoardLikeDisLikeListRelationFilter
    challengeProgress?: ChallengeProgressListRelationFilter
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
    level?: SortOrder
    tier?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userType?: SortOrder
    favoriteIds?: SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    Product?: ProductOrderByRelationAggregateInput
    Board?: BoardOrderByRelationAggregateInput
    ViewdBoardStore?: ViewdBoardStoreOrderByRelationAggregateInput
    BoardLikeDisLike?: BoardLikeDisLikeOrderByRelationAggregateInput
    challengeProgress?: ChallengeProgressOrderByRelationAggregateInput
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
    level?: IntFilter<"User"> | number
    tier?: StringNullableListFilter<"User">
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    userType?: EnumUserTypeFilter<"User"> | $Enums.UserType
    favoriteIds?: StringNullableListFilter<"User">
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    Product?: ProductListRelationFilter
    Board?: BoardListRelationFilter
    ViewdBoardStore?: ViewdBoardStoreListRelationFilter
    BoardLikeDisLike?: BoardLikeDisLikeListRelationFilter
    challengeProgress?: ChallengeProgressListRelationFilter
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
    level?: SortOrder
    tier?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userType?: SortOrder
    favoriteIds?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
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
    level?: IntWithAggregatesFilter<"User"> | number
    tier?: StringNullableListFilter<"User">
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    userType?: EnumUserTypeWithAggregatesFilter<"User"> | $Enums.UserType
    favoriteIds?: StringNullableListFilter<"User">
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
    imageSrc?: StringFilter<"Product"> | string
    category?: StringFilter<"Product"> | string
    userId?: StringFilter<"Product"> | string
    price?: IntFilter<"Product"> | number
    latitude?: FloatFilter<"Product"> | number
    longitude?: FloatFilter<"Product"> | number
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageSrc?: SortOrder
    category?: SortOrder
    userId?: SortOrder
    price?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    title?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    imageSrc?: StringFilter<"Product"> | string
    category?: StringFilter<"Product"> | string
    userId?: StringFilter<"Product"> | string
    price?: IntFilter<"Product"> | number
    latitude?: FloatFilter<"Product"> | number
    longitude?: FloatFilter<"Product"> | number
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageSrc?: SortOrder
    category?: SortOrder
    userId?: SortOrder
    price?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    imageSrc?: StringWithAggregatesFilter<"Product"> | string
    category?: StringWithAggregatesFilter<"Product"> | string
    userId?: StringWithAggregatesFilter<"Product"> | string
    price?: IntWithAggregatesFilter<"Product"> | number
    latitude?: FloatWithAggregatesFilter<"Product"> | number
    longitude?: FloatWithAggregatesFilter<"Product"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
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

  export type ChallengeWhereInput = {
    AND?: ChallengeWhereInput | ChallengeWhereInput[]
    OR?: ChallengeWhereInput[]
    NOT?: ChallengeWhereInput | ChallengeWhereInput[]
    id?: StringFilter<"Challenge"> | string
    title?: StringFilter<"Challenge"> | string
    description?: StringFilter<"Challenge"> | string
    imageSrc?: StringFilter<"Challenge"> | string
    reward?: StringFilter<"Challenge"> | string
    category?: StringFilter<"Challenge"> | string
    period?: StringFilter<"Challenge"> | string
    progress?: IntFilter<"Challenge"> | number
    disabled?: BoolFilter<"Challenge"> | boolean
    participants?: IntFilter<"Challenge"> | number
    createdAt?: DateTimeFilter<"Challenge"> | Date | string
    updatedAt?: DateTimeFilter<"Challenge"> | Date | string
    essays?: EssayListRelationFilter
    challengeProgress?: ChallengeProgressListRelationFilter
  }

  export type ChallengeOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageSrc?: SortOrder
    reward?: SortOrder
    category?: SortOrder
    period?: SortOrder
    progress?: SortOrder
    disabled?: SortOrder
    participants?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    essays?: EssayOrderByRelationAggregateInput
    challengeProgress?: ChallengeProgressOrderByRelationAggregateInput
  }

  export type ChallengeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChallengeWhereInput | ChallengeWhereInput[]
    OR?: ChallengeWhereInput[]
    NOT?: ChallengeWhereInput | ChallengeWhereInput[]
    title?: StringFilter<"Challenge"> | string
    description?: StringFilter<"Challenge"> | string
    imageSrc?: StringFilter<"Challenge"> | string
    reward?: StringFilter<"Challenge"> | string
    category?: StringFilter<"Challenge"> | string
    period?: StringFilter<"Challenge"> | string
    progress?: IntFilter<"Challenge"> | number
    disabled?: BoolFilter<"Challenge"> | boolean
    participants?: IntFilter<"Challenge"> | number
    createdAt?: DateTimeFilter<"Challenge"> | Date | string
    updatedAt?: DateTimeFilter<"Challenge"> | Date | string
    essays?: EssayListRelationFilter
    challengeProgress?: ChallengeProgressListRelationFilter
  }, "id">

  export type ChallengeOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageSrc?: SortOrder
    reward?: SortOrder
    category?: SortOrder
    period?: SortOrder
    progress?: SortOrder
    disabled?: SortOrder
    participants?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChallengeCountOrderByAggregateInput
    _avg?: ChallengeAvgOrderByAggregateInput
    _max?: ChallengeMaxOrderByAggregateInput
    _min?: ChallengeMinOrderByAggregateInput
    _sum?: ChallengeSumOrderByAggregateInput
  }

  export type ChallengeScalarWhereWithAggregatesInput = {
    AND?: ChallengeScalarWhereWithAggregatesInput | ChallengeScalarWhereWithAggregatesInput[]
    OR?: ChallengeScalarWhereWithAggregatesInput[]
    NOT?: ChallengeScalarWhereWithAggregatesInput | ChallengeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Challenge"> | string
    title?: StringWithAggregatesFilter<"Challenge"> | string
    description?: StringWithAggregatesFilter<"Challenge"> | string
    imageSrc?: StringWithAggregatesFilter<"Challenge"> | string
    reward?: StringWithAggregatesFilter<"Challenge"> | string
    category?: StringWithAggregatesFilter<"Challenge"> | string
    period?: StringWithAggregatesFilter<"Challenge"> | string
    progress?: IntWithAggregatesFilter<"Challenge"> | number
    disabled?: BoolWithAggregatesFilter<"Challenge"> | boolean
    participants?: IntWithAggregatesFilter<"Challenge"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Challenge"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Challenge"> | Date | string
  }

  export type EssayWhereInput = {
    AND?: EssayWhereInput | EssayWhereInput[]
    OR?: EssayWhereInput[]
    NOT?: EssayWhereInput | EssayWhereInput[]
    id?: StringFilter<"Essay"> | string
    content?: StringFilter<"Essay"> | string
    createdAt?: DateTimeFilter<"Essay"> | Date | string
    updatedAt?: DateTimeFilter<"Essay"> | Date | string
    challengeId?: StringFilter<"Essay"> | string
    challenge?: XOR<ChallengeRelationFilter, ChallengeWhereInput>
  }

  export type EssayOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    challengeId?: SortOrder
    challenge?: ChallengeOrderByWithRelationInput
  }

  export type EssayWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EssayWhereInput | EssayWhereInput[]
    OR?: EssayWhereInput[]
    NOT?: EssayWhereInput | EssayWhereInput[]
    content?: StringFilter<"Essay"> | string
    createdAt?: DateTimeFilter<"Essay"> | Date | string
    updatedAt?: DateTimeFilter<"Essay"> | Date | string
    challengeId?: StringFilter<"Essay"> | string
    challenge?: XOR<ChallengeRelationFilter, ChallengeWhereInput>
  }, "id">

  export type EssayOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    challengeId?: SortOrder
    _count?: EssayCountOrderByAggregateInput
    _max?: EssayMaxOrderByAggregateInput
    _min?: EssayMinOrderByAggregateInput
  }

  export type EssayScalarWhereWithAggregatesInput = {
    AND?: EssayScalarWhereWithAggregatesInput | EssayScalarWhereWithAggregatesInput[]
    OR?: EssayScalarWhereWithAggregatesInput[]
    NOT?: EssayScalarWhereWithAggregatesInput | EssayScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Essay"> | string
    content?: StringWithAggregatesFilter<"Essay"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Essay"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Essay"> | Date | string
    challengeId?: StringWithAggregatesFilter<"Essay"> | string
  }

  export type ChallengeProgressWhereInput = {
    AND?: ChallengeProgressWhereInput | ChallengeProgressWhereInput[]
    OR?: ChallengeProgressWhereInput[]
    NOT?: ChallengeProgressWhereInput | ChallengeProgressWhereInput[]
    id?: StringFilter<"ChallengeProgress"> | string
    userId?: StringFilter<"ChallengeProgress"> | string
    challengeId?: StringFilter<"ChallengeProgress"> | string
    progress?: IntFilter<"ChallengeProgress"> | number
    completed?: BoolFilter<"ChallengeProgress"> | boolean
    createdAt?: DateTimeFilter<"ChallengeProgress"> | Date | string
    updatedAt?: DateTimeFilter<"ChallengeProgress"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    challenge?: XOR<ChallengeRelationFilter, ChallengeWhereInput>
  }

  export type ChallengeProgressOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    challengeId?: SortOrder
    progress?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    challenge?: ChallengeOrderByWithRelationInput
  }

  export type ChallengeProgressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChallengeProgressWhereInput | ChallengeProgressWhereInput[]
    OR?: ChallengeProgressWhereInput[]
    NOT?: ChallengeProgressWhereInput | ChallengeProgressWhereInput[]
    userId?: StringFilter<"ChallengeProgress"> | string
    challengeId?: StringFilter<"ChallengeProgress"> | string
    progress?: IntFilter<"ChallengeProgress"> | number
    completed?: BoolFilter<"ChallengeProgress"> | boolean
    createdAt?: DateTimeFilter<"ChallengeProgress"> | Date | string
    updatedAt?: DateTimeFilter<"ChallengeProgress"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    challenge?: XOR<ChallengeRelationFilter, ChallengeWhereInput>
  }, "id">

  export type ChallengeProgressOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    challengeId?: SortOrder
    progress?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChallengeProgressCountOrderByAggregateInput
    _avg?: ChallengeProgressAvgOrderByAggregateInput
    _max?: ChallengeProgressMaxOrderByAggregateInput
    _min?: ChallengeProgressMinOrderByAggregateInput
    _sum?: ChallengeProgressSumOrderByAggregateInput
  }

  export type ChallengeProgressScalarWhereWithAggregatesInput = {
    AND?: ChallengeProgressScalarWhereWithAggregatesInput | ChallengeProgressScalarWhereWithAggregatesInput[]
    OR?: ChallengeProgressScalarWhereWithAggregatesInput[]
    NOT?: ChallengeProgressScalarWhereWithAggregatesInput | ChallengeProgressScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChallengeProgress"> | string
    userId?: StringWithAggregatesFilter<"ChallengeProgress"> | string
    challengeId?: StringWithAggregatesFilter<"ChallengeProgress"> | string
    progress?: IntWithAggregatesFilter<"ChallengeProgress"> | number
    completed?: BoolWithAggregatesFilter<"ChallengeProgress"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ChallengeProgress"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ChallengeProgress"> | Date | string
  }

  export type DopamineWhereInput = {
    AND?: DopamineWhereInput | DopamineWhereInput[]
    OR?: DopamineWhereInput[]
    NOT?: DopamineWhereInput | DopamineWhereInput[]
    dopamine?: StringFilter<"Dopamine"> | string
  }

  export type DopamineOrderByWithRelationInput = {
    dopamine?: SortOrder
  }

  export type DopamineWhereUniqueInput = Prisma.AtLeast<{
    dopamine?: string
    AND?: DopamineWhereInput | DopamineWhereInput[]
    OR?: DopamineWhereInput[]
    NOT?: DopamineWhereInput | DopamineWhereInput[]
  }, "dopamine">

  export type DopamineOrderByWithAggregationInput = {
    dopamine?: SortOrder
    _count?: DopamineCountOrderByAggregateInput
    _max?: DopamineMaxOrderByAggregateInput
    _min?: DopamineMinOrderByAggregateInput
  }

  export type DopamineScalarWhereWithAggregatesInput = {
    AND?: DopamineScalarWhereWithAggregatesInput | DopamineScalarWhereWithAggregatesInput[]
    OR?: DopamineScalarWhereWithAggregatesInput[]
    NOT?: DopamineScalarWhereWithAggregatesInput | DopamineScalarWhereWithAggregatesInput[]
    dopamine?: StringWithAggregatesFilter<"Dopamine"> | string
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "token" | "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
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
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    hashedPassword?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    level?: number
    tier?: UserCreatetierInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    userType?: $Enums.UserType
    favoriteIds?: UserCreatefavoriteIdsInput | string[]
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    Product?: ProductCreateNestedManyWithoutUserInput
    Board?: BoardCreateNestedManyWithoutUserInput
    ViewdBoardStore?: ViewdBoardStoreCreateNestedManyWithoutUserInput
    BoardLikeDisLike?: BoardLikeDisLikeCreateNestedManyWithoutUserInput
    challengeProgress?: ChallengeProgressCreateNestedManyWithoutUserInput
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
    level?: number
    tier?: UserCreatetierInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    userType?: $Enums.UserType
    favoriteIds?: UserCreatefavoriteIdsInput | string[]
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    Product?: ProductUncheckedCreateNestedManyWithoutUserInput
    Board?: BoardUncheckedCreateNestedManyWithoutUserInput
    ViewdBoardStore?: ViewdBoardStoreUncheckedCreateNestedManyWithoutUserInput
    BoardLikeDisLike?: BoardLikeDisLikeUncheckedCreateNestedManyWithoutUserInput
    challengeProgress?: ChallengeProgressUncheckedCreateNestedManyWithoutUserInput
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
    level?: IntFieldUpdateOperationsInput | number
    tier?: UserUpdatetierInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    favoriteIds?: UserUpdatefavoriteIdsInput | string[]
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    Product?: ProductUpdateManyWithoutUserNestedInput
    Board?: BoardUpdateManyWithoutUserNestedInput
    ViewdBoardStore?: ViewdBoardStoreUpdateManyWithoutUserNestedInput
    BoardLikeDisLike?: BoardLikeDisLikeUpdateManyWithoutUserNestedInput
    challengeProgress?: ChallengeProgressUpdateManyWithoutUserNestedInput
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
    level?: IntFieldUpdateOperationsInput | number
    tier?: UserUpdatetierInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    favoriteIds?: UserUpdatefavoriteIdsInput | string[]
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Product?: ProductUncheckedUpdateManyWithoutUserNestedInput
    Board?: BoardUncheckedUpdateManyWithoutUserNestedInput
    ViewdBoardStore?: ViewdBoardStoreUncheckedUpdateManyWithoutUserNestedInput
    BoardLikeDisLike?: BoardLikeDisLikeUncheckedUpdateManyWithoutUserNestedInput
    challengeProgress?: ChallengeProgressUncheckedUpdateManyWithoutUserNestedInput
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
    level?: number
    tier?: UserCreatetierInput | string[]
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
    level?: IntFieldUpdateOperationsInput | number
    tier?: UserUpdatetierInput | string[]
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
    level?: IntFieldUpdateOperationsInput | number
    tier?: UserUpdatetierInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    favoriteIds?: UserUpdatefavoriteIdsInput | string[]
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
    imageSrc: string
    category: string
    price: number
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    imageSrc: string
    category: string
    userId: string
    price: number
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageSrc?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageSrc?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateManyInput = {
    id?: string
    title: string
    description: string
    imageSrc: string
    category: string
    userId: string
    price: number
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageSrc?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageSrc?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type ChallengeCreateInput = {
    id?: string
    title: string
    description: string
    imageSrc: string
    reward: string
    category: string
    period: string
    progress: number
    disabled: boolean
    participants: number
    createdAt?: Date | string
    updatedAt?: Date | string
    essays?: EssayCreateNestedManyWithoutChallengeInput
    challengeProgress?: ChallengeProgressCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    imageSrc: string
    reward: string
    category: string
    period: string
    progress: number
    disabled: boolean
    participants: number
    createdAt?: Date | string
    updatedAt?: Date | string
    essays?: EssayUncheckedCreateNestedManyWithoutChallengeInput
    challengeProgress?: ChallengeProgressUncheckedCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageSrc?: StringFieldUpdateOperationsInput | string
    reward?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    disabled?: BoolFieldUpdateOperationsInput | boolean
    participants?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    essays?: EssayUpdateManyWithoutChallengeNestedInput
    challengeProgress?: ChallengeProgressUpdateManyWithoutChallengeNestedInput
  }

  export type ChallengeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageSrc?: StringFieldUpdateOperationsInput | string
    reward?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    disabled?: BoolFieldUpdateOperationsInput | boolean
    participants?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    essays?: EssayUncheckedUpdateManyWithoutChallengeNestedInput
    challengeProgress?: ChallengeProgressUncheckedUpdateManyWithoutChallengeNestedInput
  }

  export type ChallengeCreateManyInput = {
    id?: string
    title: string
    description: string
    imageSrc: string
    reward: string
    category: string
    period: string
    progress: number
    disabled: boolean
    participants: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChallengeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageSrc?: StringFieldUpdateOperationsInput | string
    reward?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    disabled?: BoolFieldUpdateOperationsInput | boolean
    participants?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChallengeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageSrc?: StringFieldUpdateOperationsInput | string
    reward?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    disabled?: BoolFieldUpdateOperationsInput | boolean
    participants?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EssayCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    challenge: ChallengeCreateNestedOneWithoutEssaysInput
  }

  export type EssayUncheckedCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    challengeId: string
  }

  export type EssayUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    challenge?: ChallengeUpdateOneRequiredWithoutEssaysNestedInput
  }

  export type EssayUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    challengeId?: StringFieldUpdateOperationsInput | string
  }

  export type EssayCreateManyInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    challengeId: string
  }

  export type EssayUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EssayUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    challengeId?: StringFieldUpdateOperationsInput | string
  }

  export type ChallengeProgressCreateInput = {
    id?: string
    progress: number
    completed: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutChallengeProgressInput
    challenge: ChallengeCreateNestedOneWithoutChallengeProgressInput
  }

  export type ChallengeProgressUncheckedCreateInput = {
    id?: string
    userId: string
    challengeId: string
    progress: number
    completed: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChallengeProgressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChallengeProgressNestedInput
    challenge?: ChallengeUpdateOneRequiredWithoutChallengeProgressNestedInput
  }

  export type ChallengeProgressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChallengeProgressCreateManyInput = {
    id?: string
    userId: string
    challengeId: string
    progress: number
    completed: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChallengeProgressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChallengeProgressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DopamineCreateInput = {
    dopamine?: string
  }

  export type DopamineUncheckedCreateInput = {
    dopamine?: string
  }

  export type DopamineUpdateInput = {
    dopamine?: StringFieldUpdateOperationsInput | string
  }

  export type DopamineUncheckedUpdateInput = {
    dopamine?: StringFieldUpdateOperationsInput | string
  }

  export type DopamineCreateManyInput = {
    dopamine?: string
  }

  export type DopamineUpdateManyMutationInput = {
    dopamine?: StringFieldUpdateOperationsInput | string
  }

  export type DopamineUncheckedUpdateManyInput = {
    dopamine?: StringFieldUpdateOperationsInput | string
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
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

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumUserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeFilter<$PrismaModel> | $Enums.UserType
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
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

  export type BoardLikeDisLikeListRelationFilter = {
    every?: BoardLikeDisLikeWhereInput
    some?: BoardLikeDisLikeWhereInput
    none?: BoardLikeDisLikeWhereInput
  }

  export type ChallengeProgressListRelationFilter = {
    every?: ChallengeProgressWhereInput
    some?: ChallengeProgressWhereInput
    none?: ChallengeProgressWhereInput
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

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
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

  export type BoardLikeDisLikeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChallengeProgressOrderByRelationAggregateInput = {
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
    level?: SortOrder
    tier?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userType?: SortOrder
    favoriteIds?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    level?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    hashedPassword?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    level?: SortOrder
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
    level?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userType?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    level?: SortOrder
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

  export type EnumUserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTypeFilter<$PrismaModel>
    _max?: NestedEnumUserTypeFilter<$PrismaModel>
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageSrc?: SortOrder
    category?: SortOrder
    userId?: SortOrder
    price?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    price?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageSrc?: SortOrder
    category?: SortOrder
    userId?: SortOrder
    price?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageSrc?: SortOrder
    category?: SortOrder
    userId?: SortOrder
    price?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    price?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EssayListRelationFilter = {
    every?: EssayWhereInput
    some?: EssayWhereInput
    none?: EssayWhereInput
  }

  export type EssayOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChallengeCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageSrc?: SortOrder
    reward?: SortOrder
    category?: SortOrder
    period?: SortOrder
    progress?: SortOrder
    disabled?: SortOrder
    participants?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChallengeAvgOrderByAggregateInput = {
    progress?: SortOrder
    participants?: SortOrder
  }

  export type ChallengeMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageSrc?: SortOrder
    reward?: SortOrder
    category?: SortOrder
    period?: SortOrder
    progress?: SortOrder
    disabled?: SortOrder
    participants?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChallengeMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageSrc?: SortOrder
    reward?: SortOrder
    category?: SortOrder
    period?: SortOrder
    progress?: SortOrder
    disabled?: SortOrder
    participants?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChallengeSumOrderByAggregateInput = {
    progress?: SortOrder
    participants?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ChallengeRelationFilter = {
    is?: ChallengeWhereInput
    isNot?: ChallengeWhereInput
  }

  export type EssayCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    challengeId?: SortOrder
  }

  export type EssayMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    challengeId?: SortOrder
  }

  export type EssayMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    challengeId?: SortOrder
  }

  export type ChallengeProgressCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    challengeId?: SortOrder
    progress?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChallengeProgressAvgOrderByAggregateInput = {
    progress?: SortOrder
  }

  export type ChallengeProgressMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    challengeId?: SortOrder
    progress?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChallengeProgressMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    challengeId?: SortOrder
    progress?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChallengeProgressSumOrderByAggregateInput = {
    progress?: SortOrder
  }

  export type DopamineCountOrderByAggregateInput = {
    dopamine?: SortOrder
  }

  export type DopamineMaxOrderByAggregateInput = {
    dopamine?: SortOrder
  }

  export type DopamineMinOrderByAggregateInput = {
    dopamine?: SortOrder
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
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

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
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

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreatetierInput = {
    set: string[]
  }

  export type UserCreatefavoriteIdsInput = {
    set: string[]
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
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

  export type BoardLikeDisLikeCreateNestedManyWithoutUserInput = {
    create?: XOR<BoardLikeDisLikeCreateWithoutUserInput, BoardLikeDisLikeUncheckedCreateWithoutUserInput> | BoardLikeDisLikeCreateWithoutUserInput[] | BoardLikeDisLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BoardLikeDisLikeCreateOrConnectWithoutUserInput | BoardLikeDisLikeCreateOrConnectWithoutUserInput[]
    createMany?: BoardLikeDisLikeCreateManyUserInputEnvelope
    connect?: BoardLikeDisLikeWhereUniqueInput | BoardLikeDisLikeWhereUniqueInput[]
  }

  export type ChallengeProgressCreateNestedManyWithoutUserInput = {
    create?: XOR<ChallengeProgressCreateWithoutUserInput, ChallengeProgressUncheckedCreateWithoutUserInput> | ChallengeProgressCreateWithoutUserInput[] | ChallengeProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChallengeProgressCreateOrConnectWithoutUserInput | ChallengeProgressCreateOrConnectWithoutUserInput[]
    createMany?: ChallengeProgressCreateManyUserInputEnvelope
    connect?: ChallengeProgressWhereUniqueInput | ChallengeProgressWhereUniqueInput[]
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

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
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

  export type BoardLikeDisLikeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BoardLikeDisLikeCreateWithoutUserInput, BoardLikeDisLikeUncheckedCreateWithoutUserInput> | BoardLikeDisLikeCreateWithoutUserInput[] | BoardLikeDisLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BoardLikeDisLikeCreateOrConnectWithoutUserInput | BoardLikeDisLikeCreateOrConnectWithoutUserInput[]
    createMany?: BoardLikeDisLikeCreateManyUserInputEnvelope
    connect?: BoardLikeDisLikeWhereUniqueInput | BoardLikeDisLikeWhereUniqueInput[]
  }

  export type ChallengeProgressUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ChallengeProgressCreateWithoutUserInput, ChallengeProgressUncheckedCreateWithoutUserInput> | ChallengeProgressCreateWithoutUserInput[] | ChallengeProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChallengeProgressCreateOrConnectWithoutUserInput | ChallengeProgressCreateOrConnectWithoutUserInput[]
    createMany?: ChallengeProgressCreateManyUserInputEnvelope
    connect?: ChallengeProgressWhereUniqueInput | ChallengeProgressWhereUniqueInput[]
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

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdatetierInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumUserTypeFieldUpdateOperationsInput = {
    set?: $Enums.UserType
  }

  export type UserUpdatefavoriteIdsInput = {
    set?: string[]
    push?: string | string[]
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

  export type ChallengeProgressUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChallengeProgressCreateWithoutUserInput, ChallengeProgressUncheckedCreateWithoutUserInput> | ChallengeProgressCreateWithoutUserInput[] | ChallengeProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChallengeProgressCreateOrConnectWithoutUserInput | ChallengeProgressCreateOrConnectWithoutUserInput[]
    upsert?: ChallengeProgressUpsertWithWhereUniqueWithoutUserInput | ChallengeProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChallengeProgressCreateManyUserInputEnvelope
    set?: ChallengeProgressWhereUniqueInput | ChallengeProgressWhereUniqueInput[]
    disconnect?: ChallengeProgressWhereUniqueInput | ChallengeProgressWhereUniqueInput[]
    delete?: ChallengeProgressWhereUniqueInput | ChallengeProgressWhereUniqueInput[]
    connect?: ChallengeProgressWhereUniqueInput | ChallengeProgressWhereUniqueInput[]
    update?: ChallengeProgressUpdateWithWhereUniqueWithoutUserInput | ChallengeProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChallengeProgressUpdateManyWithWhereWithoutUserInput | ChallengeProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChallengeProgressScalarWhereInput | ChallengeProgressScalarWhereInput[]
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

  export type ChallengeProgressUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChallengeProgressCreateWithoutUserInput, ChallengeProgressUncheckedCreateWithoutUserInput> | ChallengeProgressCreateWithoutUserInput[] | ChallengeProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChallengeProgressCreateOrConnectWithoutUserInput | ChallengeProgressCreateOrConnectWithoutUserInput[]
    upsert?: ChallengeProgressUpsertWithWhereUniqueWithoutUserInput | ChallengeProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChallengeProgressCreateManyUserInputEnvelope
    set?: ChallengeProgressWhereUniqueInput | ChallengeProgressWhereUniqueInput[]
    disconnect?: ChallengeProgressWhereUniqueInput | ChallengeProgressWhereUniqueInput[]
    delete?: ChallengeProgressWhereUniqueInput | ChallengeProgressWhereUniqueInput[]
    connect?: ChallengeProgressWhereUniqueInput | ChallengeProgressWhereUniqueInput[]
    update?: ChallengeProgressUpdateWithWhereUniqueWithoutUserInput | ChallengeProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChallengeProgressUpdateManyWithWhereWithoutUserInput | ChallengeProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChallengeProgressScalarWhereInput | ChallengeProgressScalarWhereInput[]
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

  export type UserCreateNestedOneWithoutProductInput = {
    create?: XOR<UserCreateWithoutProductInput, UserUncheckedCreateWithoutProductInput>
    connectOrCreate?: UserCreateOrConnectWithoutProductInput
    connect?: UserWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutProductNestedInput = {
    create?: XOR<UserCreateWithoutProductInput, UserUncheckedCreateWithoutProductInput>
    connectOrCreate?: UserCreateOrConnectWithoutProductInput
    upsert?: UserUpsertWithoutProductInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProductInput, UserUpdateWithoutProductInput>, UserUncheckedUpdateWithoutProductInput>
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

  export type EssayCreateNestedManyWithoutChallengeInput = {
    create?: XOR<EssayCreateWithoutChallengeInput, EssayUncheckedCreateWithoutChallengeInput> | EssayCreateWithoutChallengeInput[] | EssayUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: EssayCreateOrConnectWithoutChallengeInput | EssayCreateOrConnectWithoutChallengeInput[]
    createMany?: EssayCreateManyChallengeInputEnvelope
    connect?: EssayWhereUniqueInput | EssayWhereUniqueInput[]
  }

  export type ChallengeProgressCreateNestedManyWithoutChallengeInput = {
    create?: XOR<ChallengeProgressCreateWithoutChallengeInput, ChallengeProgressUncheckedCreateWithoutChallengeInput> | ChallengeProgressCreateWithoutChallengeInput[] | ChallengeProgressUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: ChallengeProgressCreateOrConnectWithoutChallengeInput | ChallengeProgressCreateOrConnectWithoutChallengeInput[]
    createMany?: ChallengeProgressCreateManyChallengeInputEnvelope
    connect?: ChallengeProgressWhereUniqueInput | ChallengeProgressWhereUniqueInput[]
  }

  export type EssayUncheckedCreateNestedManyWithoutChallengeInput = {
    create?: XOR<EssayCreateWithoutChallengeInput, EssayUncheckedCreateWithoutChallengeInput> | EssayCreateWithoutChallengeInput[] | EssayUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: EssayCreateOrConnectWithoutChallengeInput | EssayCreateOrConnectWithoutChallengeInput[]
    createMany?: EssayCreateManyChallengeInputEnvelope
    connect?: EssayWhereUniqueInput | EssayWhereUniqueInput[]
  }

  export type ChallengeProgressUncheckedCreateNestedManyWithoutChallengeInput = {
    create?: XOR<ChallengeProgressCreateWithoutChallengeInput, ChallengeProgressUncheckedCreateWithoutChallengeInput> | ChallengeProgressCreateWithoutChallengeInput[] | ChallengeProgressUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: ChallengeProgressCreateOrConnectWithoutChallengeInput | ChallengeProgressCreateOrConnectWithoutChallengeInput[]
    createMany?: ChallengeProgressCreateManyChallengeInputEnvelope
    connect?: ChallengeProgressWhereUniqueInput | ChallengeProgressWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EssayUpdateManyWithoutChallengeNestedInput = {
    create?: XOR<EssayCreateWithoutChallengeInput, EssayUncheckedCreateWithoutChallengeInput> | EssayCreateWithoutChallengeInput[] | EssayUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: EssayCreateOrConnectWithoutChallengeInput | EssayCreateOrConnectWithoutChallengeInput[]
    upsert?: EssayUpsertWithWhereUniqueWithoutChallengeInput | EssayUpsertWithWhereUniqueWithoutChallengeInput[]
    createMany?: EssayCreateManyChallengeInputEnvelope
    set?: EssayWhereUniqueInput | EssayWhereUniqueInput[]
    disconnect?: EssayWhereUniqueInput | EssayWhereUniqueInput[]
    delete?: EssayWhereUniqueInput | EssayWhereUniqueInput[]
    connect?: EssayWhereUniqueInput | EssayWhereUniqueInput[]
    update?: EssayUpdateWithWhereUniqueWithoutChallengeInput | EssayUpdateWithWhereUniqueWithoutChallengeInput[]
    updateMany?: EssayUpdateManyWithWhereWithoutChallengeInput | EssayUpdateManyWithWhereWithoutChallengeInput[]
    deleteMany?: EssayScalarWhereInput | EssayScalarWhereInput[]
  }

  export type ChallengeProgressUpdateManyWithoutChallengeNestedInput = {
    create?: XOR<ChallengeProgressCreateWithoutChallengeInput, ChallengeProgressUncheckedCreateWithoutChallengeInput> | ChallengeProgressCreateWithoutChallengeInput[] | ChallengeProgressUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: ChallengeProgressCreateOrConnectWithoutChallengeInput | ChallengeProgressCreateOrConnectWithoutChallengeInput[]
    upsert?: ChallengeProgressUpsertWithWhereUniqueWithoutChallengeInput | ChallengeProgressUpsertWithWhereUniqueWithoutChallengeInput[]
    createMany?: ChallengeProgressCreateManyChallengeInputEnvelope
    set?: ChallengeProgressWhereUniqueInput | ChallengeProgressWhereUniqueInput[]
    disconnect?: ChallengeProgressWhereUniqueInput | ChallengeProgressWhereUniqueInput[]
    delete?: ChallengeProgressWhereUniqueInput | ChallengeProgressWhereUniqueInput[]
    connect?: ChallengeProgressWhereUniqueInput | ChallengeProgressWhereUniqueInput[]
    update?: ChallengeProgressUpdateWithWhereUniqueWithoutChallengeInput | ChallengeProgressUpdateWithWhereUniqueWithoutChallengeInput[]
    updateMany?: ChallengeProgressUpdateManyWithWhereWithoutChallengeInput | ChallengeProgressUpdateManyWithWhereWithoutChallengeInput[]
    deleteMany?: ChallengeProgressScalarWhereInput | ChallengeProgressScalarWhereInput[]
  }

  export type EssayUncheckedUpdateManyWithoutChallengeNestedInput = {
    create?: XOR<EssayCreateWithoutChallengeInput, EssayUncheckedCreateWithoutChallengeInput> | EssayCreateWithoutChallengeInput[] | EssayUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: EssayCreateOrConnectWithoutChallengeInput | EssayCreateOrConnectWithoutChallengeInput[]
    upsert?: EssayUpsertWithWhereUniqueWithoutChallengeInput | EssayUpsertWithWhereUniqueWithoutChallengeInput[]
    createMany?: EssayCreateManyChallengeInputEnvelope
    set?: EssayWhereUniqueInput | EssayWhereUniqueInput[]
    disconnect?: EssayWhereUniqueInput | EssayWhereUniqueInput[]
    delete?: EssayWhereUniqueInput | EssayWhereUniqueInput[]
    connect?: EssayWhereUniqueInput | EssayWhereUniqueInput[]
    update?: EssayUpdateWithWhereUniqueWithoutChallengeInput | EssayUpdateWithWhereUniqueWithoutChallengeInput[]
    updateMany?: EssayUpdateManyWithWhereWithoutChallengeInput | EssayUpdateManyWithWhereWithoutChallengeInput[]
    deleteMany?: EssayScalarWhereInput | EssayScalarWhereInput[]
  }

  export type ChallengeProgressUncheckedUpdateManyWithoutChallengeNestedInput = {
    create?: XOR<ChallengeProgressCreateWithoutChallengeInput, ChallengeProgressUncheckedCreateWithoutChallengeInput> | ChallengeProgressCreateWithoutChallengeInput[] | ChallengeProgressUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: ChallengeProgressCreateOrConnectWithoutChallengeInput | ChallengeProgressCreateOrConnectWithoutChallengeInput[]
    upsert?: ChallengeProgressUpsertWithWhereUniqueWithoutChallengeInput | ChallengeProgressUpsertWithWhereUniqueWithoutChallengeInput[]
    createMany?: ChallengeProgressCreateManyChallengeInputEnvelope
    set?: ChallengeProgressWhereUniqueInput | ChallengeProgressWhereUniqueInput[]
    disconnect?: ChallengeProgressWhereUniqueInput | ChallengeProgressWhereUniqueInput[]
    delete?: ChallengeProgressWhereUniqueInput | ChallengeProgressWhereUniqueInput[]
    connect?: ChallengeProgressWhereUniqueInput | ChallengeProgressWhereUniqueInput[]
    update?: ChallengeProgressUpdateWithWhereUniqueWithoutChallengeInput | ChallengeProgressUpdateWithWhereUniqueWithoutChallengeInput[]
    updateMany?: ChallengeProgressUpdateManyWithWhereWithoutChallengeInput | ChallengeProgressUpdateManyWithWhereWithoutChallengeInput[]
    deleteMany?: ChallengeProgressScalarWhereInput | ChallengeProgressScalarWhereInput[]
  }

  export type ChallengeCreateNestedOneWithoutEssaysInput = {
    create?: XOR<ChallengeCreateWithoutEssaysInput, ChallengeUncheckedCreateWithoutEssaysInput>
    connectOrCreate?: ChallengeCreateOrConnectWithoutEssaysInput
    connect?: ChallengeWhereUniqueInput
  }

  export type ChallengeUpdateOneRequiredWithoutEssaysNestedInput = {
    create?: XOR<ChallengeCreateWithoutEssaysInput, ChallengeUncheckedCreateWithoutEssaysInput>
    connectOrCreate?: ChallengeCreateOrConnectWithoutEssaysInput
    upsert?: ChallengeUpsertWithoutEssaysInput
    connect?: ChallengeWhereUniqueInput
    update?: XOR<XOR<ChallengeUpdateToOneWithWhereWithoutEssaysInput, ChallengeUpdateWithoutEssaysInput>, ChallengeUncheckedUpdateWithoutEssaysInput>
  }

  export type UserCreateNestedOneWithoutChallengeProgressInput = {
    create?: XOR<UserCreateWithoutChallengeProgressInput, UserUncheckedCreateWithoutChallengeProgressInput>
    connectOrCreate?: UserCreateOrConnectWithoutChallengeProgressInput
    connect?: UserWhereUniqueInput
  }

  export type ChallengeCreateNestedOneWithoutChallengeProgressInput = {
    create?: XOR<ChallengeCreateWithoutChallengeProgressInput, ChallengeUncheckedCreateWithoutChallengeProgressInput>
    connectOrCreate?: ChallengeCreateOrConnectWithoutChallengeProgressInput
    connect?: ChallengeWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutChallengeProgressNestedInput = {
    create?: XOR<UserCreateWithoutChallengeProgressInput, UserUncheckedCreateWithoutChallengeProgressInput>
    connectOrCreate?: UserCreateOrConnectWithoutChallengeProgressInput
    upsert?: UserUpsertWithoutChallengeProgressInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChallengeProgressInput, UserUpdateWithoutChallengeProgressInput>, UserUncheckedUpdateWithoutChallengeProgressInput>
  }

  export type ChallengeUpdateOneRequiredWithoutChallengeProgressNestedInput = {
    create?: XOR<ChallengeCreateWithoutChallengeProgressInput, ChallengeUncheckedCreateWithoutChallengeProgressInput>
    connectOrCreate?: ChallengeCreateOrConnectWithoutChallengeProgressInput
    upsert?: ChallengeUpsertWithoutChallengeProgressInput
    connect?: ChallengeWhereUniqueInput
    update?: XOR<XOR<ChallengeUpdateToOneWithWhereWithoutChallengeProgressInput, ChallengeUpdateWithoutChallengeProgressInput>, ChallengeUncheckedUpdateWithoutChallengeProgressInput>
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

  export type NestedEnumUserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeFilter<$PrismaModel> | $Enums.UserType
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

  export type NestedEnumUserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTypeFilter<$PrismaModel>
    _max?: NestedEnumUserTypeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    hashedPassword?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    level?: number
    tier?: UserCreatetierInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    userType?: $Enums.UserType
    favoriteIds?: UserCreatefavoriteIdsInput | string[]
    sessions?: SessionCreateNestedManyWithoutUserInput
    Product?: ProductCreateNestedManyWithoutUserInput
    Board?: BoardCreateNestedManyWithoutUserInput
    ViewdBoardStore?: ViewdBoardStoreCreateNestedManyWithoutUserInput
    BoardLikeDisLike?: BoardLikeDisLikeCreateNestedManyWithoutUserInput
    challengeProgress?: ChallengeProgressCreateNestedManyWithoutUserInput
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
    level?: number
    tier?: UserCreatetierInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    userType?: $Enums.UserType
    favoriteIds?: UserCreatefavoriteIdsInput | string[]
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    Product?: ProductUncheckedCreateNestedManyWithoutUserInput
    Board?: BoardUncheckedCreateNestedManyWithoutUserInput
    ViewdBoardStore?: ViewdBoardStoreUncheckedCreateNestedManyWithoutUserInput
    BoardLikeDisLike?: BoardLikeDisLikeUncheckedCreateNestedManyWithoutUserInput
    challengeProgress?: ChallengeProgressUncheckedCreateNestedManyWithoutUserInput
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
    level?: IntFieldUpdateOperationsInput | number
    tier?: UserUpdatetierInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    favoriteIds?: UserUpdatefavoriteIdsInput | string[]
    sessions?: SessionUpdateManyWithoutUserNestedInput
    Product?: ProductUpdateManyWithoutUserNestedInput
    Board?: BoardUpdateManyWithoutUserNestedInput
    ViewdBoardStore?: ViewdBoardStoreUpdateManyWithoutUserNestedInput
    BoardLikeDisLike?: BoardLikeDisLikeUpdateManyWithoutUserNestedInput
    challengeProgress?: ChallengeProgressUpdateManyWithoutUserNestedInput
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
    level?: IntFieldUpdateOperationsInput | number
    tier?: UserUpdatetierInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    favoriteIds?: UserUpdatefavoriteIdsInput | string[]
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Product?: ProductUncheckedUpdateManyWithoutUserNestedInput
    Board?: BoardUncheckedUpdateManyWithoutUserNestedInput
    ViewdBoardStore?: ViewdBoardStoreUncheckedUpdateManyWithoutUserNestedInput
    BoardLikeDisLike?: BoardLikeDisLikeUncheckedUpdateManyWithoutUserNestedInput
    challengeProgress?: ChallengeProgressUncheckedUpdateManyWithoutUserNestedInput
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
    level?: number
    tier?: UserCreatetierInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    userType?: $Enums.UserType
    favoriteIds?: UserCreatefavoriteIdsInput | string[]
    accounts?: AccountCreateNestedManyWithoutUserInput
    Product?: ProductCreateNestedManyWithoutUserInput
    Board?: BoardCreateNestedManyWithoutUserInput
    ViewdBoardStore?: ViewdBoardStoreCreateNestedManyWithoutUserInput
    BoardLikeDisLike?: BoardLikeDisLikeCreateNestedManyWithoutUserInput
    challengeProgress?: ChallengeProgressCreateNestedManyWithoutUserInput
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
    level?: number
    tier?: UserCreatetierInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    userType?: $Enums.UserType
    favoriteIds?: UserCreatefavoriteIdsInput | string[]
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    Product?: ProductUncheckedCreateNestedManyWithoutUserInput
    Board?: BoardUncheckedCreateNestedManyWithoutUserInput
    ViewdBoardStore?: ViewdBoardStoreUncheckedCreateNestedManyWithoutUserInput
    BoardLikeDisLike?: BoardLikeDisLikeUncheckedCreateNestedManyWithoutUserInput
    challengeProgress?: ChallengeProgressUncheckedCreateNestedManyWithoutUserInput
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
    level?: IntFieldUpdateOperationsInput | number
    tier?: UserUpdatetierInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    favoriteIds?: UserUpdatefavoriteIdsInput | string[]
    accounts?: AccountUpdateManyWithoutUserNestedInput
    Product?: ProductUpdateManyWithoutUserNestedInput
    Board?: BoardUpdateManyWithoutUserNestedInput
    ViewdBoardStore?: ViewdBoardStoreUpdateManyWithoutUserNestedInput
    BoardLikeDisLike?: BoardLikeDisLikeUpdateManyWithoutUserNestedInput
    challengeProgress?: ChallengeProgressUpdateManyWithoutUserNestedInput
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
    level?: IntFieldUpdateOperationsInput | number
    tier?: UserUpdatetierInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    favoriteIds?: UserUpdatefavoriteIdsInput | string[]
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    Product?: ProductUncheckedUpdateManyWithoutUserNestedInput
    Board?: BoardUncheckedUpdateManyWithoutUserNestedInput
    ViewdBoardStore?: ViewdBoardStoreUncheckedUpdateManyWithoutUserNestedInput
    BoardLikeDisLike?: BoardLikeDisLikeUncheckedUpdateManyWithoutUserNestedInput
    challengeProgress?: ChallengeProgressUncheckedUpdateManyWithoutUserNestedInput
    conversations?: ConversationUncheckedUpdateManyWithoutUsersNestedInput
    sendMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
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

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
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
    imageSrc: string
    category: string
    price: number
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    description: string
    imageSrc: string
    category: string
    price: number
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string
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

  export type ChallengeProgressCreateWithoutUserInput = {
    id?: string
    progress: number
    completed: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    challenge: ChallengeCreateNestedOneWithoutChallengeProgressInput
  }

  export type ChallengeProgressUncheckedCreateWithoutUserInput = {
    id?: string
    challengeId: string
    progress: number
    completed: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChallengeProgressCreateOrConnectWithoutUserInput = {
    where: ChallengeProgressWhereUniqueInput
    create: XOR<ChallengeProgressCreateWithoutUserInput, ChallengeProgressUncheckedCreateWithoutUserInput>
  }

  export type ChallengeProgressCreateManyUserInputEnvelope = {
    data: ChallengeProgressCreateManyUserInput | ChallengeProgressCreateManyUserInput[]
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
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
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
    imageSrc?: StringFilter<"Product"> | string
    category?: StringFilter<"Product"> | string
    userId?: StringFilter<"Product"> | string
    price?: IntFilter<"Product"> | number
    latitude?: FloatFilter<"Product"> | number
    longitude?: FloatFilter<"Product"> | number
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
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

  export type ChallengeProgressUpsertWithWhereUniqueWithoutUserInput = {
    where: ChallengeProgressWhereUniqueInput
    update: XOR<ChallengeProgressUpdateWithoutUserInput, ChallengeProgressUncheckedUpdateWithoutUserInput>
    create: XOR<ChallengeProgressCreateWithoutUserInput, ChallengeProgressUncheckedCreateWithoutUserInput>
  }

  export type ChallengeProgressUpdateWithWhereUniqueWithoutUserInput = {
    where: ChallengeProgressWhereUniqueInput
    data: XOR<ChallengeProgressUpdateWithoutUserInput, ChallengeProgressUncheckedUpdateWithoutUserInput>
  }

  export type ChallengeProgressUpdateManyWithWhereWithoutUserInput = {
    where: ChallengeProgressScalarWhereInput
    data: XOR<ChallengeProgressUpdateManyMutationInput, ChallengeProgressUncheckedUpdateManyWithoutUserInput>
  }

  export type ChallengeProgressScalarWhereInput = {
    AND?: ChallengeProgressScalarWhereInput | ChallengeProgressScalarWhereInput[]
    OR?: ChallengeProgressScalarWhereInput[]
    NOT?: ChallengeProgressScalarWhereInput | ChallengeProgressScalarWhereInput[]
    id?: StringFilter<"ChallengeProgress"> | string
    userId?: StringFilter<"ChallengeProgress"> | string
    challengeId?: StringFilter<"ChallengeProgress"> | string
    progress?: IntFilter<"ChallengeProgress"> | number
    completed?: BoolFilter<"ChallengeProgress"> | boolean
    createdAt?: DateTimeFilter<"ChallengeProgress"> | Date | string
    updatedAt?: DateTimeFilter<"ChallengeProgress"> | Date | string
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
    level?: number
    tier?: UserCreatetierInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    userType?: $Enums.UserType
    favoriteIds?: UserCreatefavoriteIdsInput | string[]
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    Product?: ProductCreateNestedManyWithoutUserInput
    ViewdBoardStore?: ViewdBoardStoreCreateNestedManyWithoutUserInput
    BoardLikeDisLike?: BoardLikeDisLikeCreateNestedManyWithoutUserInput
    challengeProgress?: ChallengeProgressCreateNestedManyWithoutUserInput
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
    level?: number
    tier?: UserCreatetierInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    userType?: $Enums.UserType
    favoriteIds?: UserCreatefavoriteIdsInput | string[]
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    Product?: ProductUncheckedCreateNestedManyWithoutUserInput
    ViewdBoardStore?: ViewdBoardStoreUncheckedCreateNestedManyWithoutUserInput
    BoardLikeDisLike?: BoardLikeDisLikeUncheckedCreateNestedManyWithoutUserInput
    challengeProgress?: ChallengeProgressUncheckedCreateNestedManyWithoutUserInput
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
    level?: IntFieldUpdateOperationsInput | number
    tier?: UserUpdatetierInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    favoriteIds?: UserUpdatefavoriteIdsInput | string[]
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    Product?: ProductUpdateManyWithoutUserNestedInput
    ViewdBoardStore?: ViewdBoardStoreUpdateManyWithoutUserNestedInput
    BoardLikeDisLike?: BoardLikeDisLikeUpdateManyWithoutUserNestedInput
    challengeProgress?: ChallengeProgressUpdateManyWithoutUserNestedInput
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
    level?: IntFieldUpdateOperationsInput | number
    tier?: UserUpdatetierInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    favoriteIds?: UserUpdatefavoriteIdsInput | string[]
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Product?: ProductUncheckedUpdateManyWithoutUserNestedInput
    ViewdBoardStore?: ViewdBoardStoreUncheckedUpdateManyWithoutUserNestedInput
    BoardLikeDisLike?: BoardLikeDisLikeUncheckedUpdateManyWithoutUserNestedInput
    challengeProgress?: ChallengeProgressUncheckedUpdateManyWithoutUserNestedInput
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
    level?: number
    tier?: UserCreatetierInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    userType?: $Enums.UserType
    favoriteIds?: UserCreatefavoriteIdsInput | string[]
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    Product?: ProductCreateNestedManyWithoutUserInput
    Board?: BoardCreateNestedManyWithoutUserInput
    ViewdBoardStore?: ViewdBoardStoreCreateNestedManyWithoutUserInput
    challengeProgress?: ChallengeProgressCreateNestedManyWithoutUserInput
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
    level?: number
    tier?: UserCreatetierInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    userType?: $Enums.UserType
    favoriteIds?: UserCreatefavoriteIdsInput | string[]
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    Product?: ProductUncheckedCreateNestedManyWithoutUserInput
    Board?: BoardUncheckedCreateNestedManyWithoutUserInput
    ViewdBoardStore?: ViewdBoardStoreUncheckedCreateNestedManyWithoutUserInput
    challengeProgress?: ChallengeProgressUncheckedCreateNestedManyWithoutUserInput
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
    level?: IntFieldUpdateOperationsInput | number
    tier?: UserUpdatetierInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    favoriteIds?: UserUpdatefavoriteIdsInput | string[]
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    Product?: ProductUpdateManyWithoutUserNestedInput
    Board?: BoardUpdateManyWithoutUserNestedInput
    ViewdBoardStore?: ViewdBoardStoreUpdateManyWithoutUserNestedInput
    challengeProgress?: ChallengeProgressUpdateManyWithoutUserNestedInput
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
    level?: IntFieldUpdateOperationsInput | number
    tier?: UserUpdatetierInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    favoriteIds?: UserUpdatefavoriteIdsInput | string[]
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Product?: ProductUncheckedUpdateManyWithoutUserNestedInput
    Board?: BoardUncheckedUpdateManyWithoutUserNestedInput
    ViewdBoardStore?: ViewdBoardStoreUncheckedUpdateManyWithoutUserNestedInput
    challengeProgress?: ChallengeProgressUncheckedUpdateManyWithoutUserNestedInput
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
    level?: number
    tier?: UserCreatetierInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    userType?: $Enums.UserType
    favoriteIds?: UserCreatefavoriteIdsInput | string[]
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    Board?: BoardCreateNestedManyWithoutUserInput
    ViewdBoardStore?: ViewdBoardStoreCreateNestedManyWithoutUserInput
    BoardLikeDisLike?: BoardLikeDisLikeCreateNestedManyWithoutUserInput
    challengeProgress?: ChallengeProgressCreateNestedManyWithoutUserInput
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
    level?: number
    tier?: UserCreatetierInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    userType?: $Enums.UserType
    favoriteIds?: UserCreatefavoriteIdsInput | string[]
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    Board?: BoardUncheckedCreateNestedManyWithoutUserInput
    ViewdBoardStore?: ViewdBoardStoreUncheckedCreateNestedManyWithoutUserInput
    BoardLikeDisLike?: BoardLikeDisLikeUncheckedCreateNestedManyWithoutUserInput
    challengeProgress?: ChallengeProgressUncheckedCreateNestedManyWithoutUserInput
    conversations?: ConversationUncheckedCreateNestedManyWithoutUsersInput
    sendMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutProductInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProductInput, UserUncheckedCreateWithoutProductInput>
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
    level?: IntFieldUpdateOperationsInput | number
    tier?: UserUpdatetierInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    favoriteIds?: UserUpdatefavoriteIdsInput | string[]
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    Board?: BoardUpdateManyWithoutUserNestedInput
    ViewdBoardStore?: ViewdBoardStoreUpdateManyWithoutUserNestedInput
    BoardLikeDisLike?: BoardLikeDisLikeUpdateManyWithoutUserNestedInput
    challengeProgress?: ChallengeProgressUpdateManyWithoutUserNestedInput
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
    level?: IntFieldUpdateOperationsInput | number
    tier?: UserUpdatetierInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    favoriteIds?: UserUpdatefavoriteIdsInput | string[]
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Board?: BoardUncheckedUpdateManyWithoutUserNestedInput
    ViewdBoardStore?: ViewdBoardStoreUncheckedUpdateManyWithoutUserNestedInput
    BoardLikeDisLike?: BoardLikeDisLikeUncheckedUpdateManyWithoutUserNestedInput
    challengeProgress?: ChallengeProgressUncheckedUpdateManyWithoutUserNestedInput
    conversations?: ConversationUncheckedUpdateManyWithoutUsersNestedInput
    sendMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserCreateWithoutViewdBoardStoreInput = {
    id?: string
    name?: string | null
    hashedPassword?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    level?: number
    tier?: UserCreatetierInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    userType?: $Enums.UserType
    favoriteIds?: UserCreatefavoriteIdsInput | string[]
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    Product?: ProductCreateNestedManyWithoutUserInput
    Board?: BoardCreateNestedManyWithoutUserInput
    BoardLikeDisLike?: BoardLikeDisLikeCreateNestedManyWithoutUserInput
    challengeProgress?: ChallengeProgressCreateNestedManyWithoutUserInput
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
    level?: number
    tier?: UserCreatetierInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    userType?: $Enums.UserType
    favoriteIds?: UserCreatefavoriteIdsInput | string[]
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    Product?: ProductUncheckedCreateNestedManyWithoutUserInput
    Board?: BoardUncheckedCreateNestedManyWithoutUserInput
    BoardLikeDisLike?: BoardLikeDisLikeUncheckedCreateNestedManyWithoutUserInput
    challengeProgress?: ChallengeProgressUncheckedCreateNestedManyWithoutUserInput
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
    level?: IntFieldUpdateOperationsInput | number
    tier?: UserUpdatetierInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    favoriteIds?: UserUpdatefavoriteIdsInput | string[]
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    Product?: ProductUpdateManyWithoutUserNestedInput
    Board?: BoardUpdateManyWithoutUserNestedInput
    BoardLikeDisLike?: BoardLikeDisLikeUpdateManyWithoutUserNestedInput
    challengeProgress?: ChallengeProgressUpdateManyWithoutUserNestedInput
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
    level?: IntFieldUpdateOperationsInput | number
    tier?: UserUpdatetierInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    favoriteIds?: UserUpdatefavoriteIdsInput | string[]
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Product?: ProductUncheckedUpdateManyWithoutUserNestedInput
    Board?: BoardUncheckedUpdateManyWithoutUserNestedInput
    BoardLikeDisLike?: BoardLikeDisLikeUncheckedUpdateManyWithoutUserNestedInput
    challengeProgress?: ChallengeProgressUncheckedUpdateManyWithoutUserNestedInput
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

  export type EssayCreateWithoutChallengeInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EssayUncheckedCreateWithoutChallengeInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EssayCreateOrConnectWithoutChallengeInput = {
    where: EssayWhereUniqueInput
    create: XOR<EssayCreateWithoutChallengeInput, EssayUncheckedCreateWithoutChallengeInput>
  }

  export type EssayCreateManyChallengeInputEnvelope = {
    data: EssayCreateManyChallengeInput | EssayCreateManyChallengeInput[]
    skipDuplicates?: boolean
  }

  export type ChallengeProgressCreateWithoutChallengeInput = {
    id?: string
    progress: number
    completed: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutChallengeProgressInput
  }

  export type ChallengeProgressUncheckedCreateWithoutChallengeInput = {
    id?: string
    userId: string
    progress: number
    completed: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChallengeProgressCreateOrConnectWithoutChallengeInput = {
    where: ChallengeProgressWhereUniqueInput
    create: XOR<ChallengeProgressCreateWithoutChallengeInput, ChallengeProgressUncheckedCreateWithoutChallengeInput>
  }

  export type ChallengeProgressCreateManyChallengeInputEnvelope = {
    data: ChallengeProgressCreateManyChallengeInput | ChallengeProgressCreateManyChallengeInput[]
    skipDuplicates?: boolean
  }

  export type EssayUpsertWithWhereUniqueWithoutChallengeInput = {
    where: EssayWhereUniqueInput
    update: XOR<EssayUpdateWithoutChallengeInput, EssayUncheckedUpdateWithoutChallengeInput>
    create: XOR<EssayCreateWithoutChallengeInput, EssayUncheckedCreateWithoutChallengeInput>
  }

  export type EssayUpdateWithWhereUniqueWithoutChallengeInput = {
    where: EssayWhereUniqueInput
    data: XOR<EssayUpdateWithoutChallengeInput, EssayUncheckedUpdateWithoutChallengeInput>
  }

  export type EssayUpdateManyWithWhereWithoutChallengeInput = {
    where: EssayScalarWhereInput
    data: XOR<EssayUpdateManyMutationInput, EssayUncheckedUpdateManyWithoutChallengeInput>
  }

  export type EssayScalarWhereInput = {
    AND?: EssayScalarWhereInput | EssayScalarWhereInput[]
    OR?: EssayScalarWhereInput[]
    NOT?: EssayScalarWhereInput | EssayScalarWhereInput[]
    id?: StringFilter<"Essay"> | string
    content?: StringFilter<"Essay"> | string
    createdAt?: DateTimeFilter<"Essay"> | Date | string
    updatedAt?: DateTimeFilter<"Essay"> | Date | string
    challengeId?: StringFilter<"Essay"> | string
  }

  export type ChallengeProgressUpsertWithWhereUniqueWithoutChallengeInput = {
    where: ChallengeProgressWhereUniqueInput
    update: XOR<ChallengeProgressUpdateWithoutChallengeInput, ChallengeProgressUncheckedUpdateWithoutChallengeInput>
    create: XOR<ChallengeProgressCreateWithoutChallengeInput, ChallengeProgressUncheckedCreateWithoutChallengeInput>
  }

  export type ChallengeProgressUpdateWithWhereUniqueWithoutChallengeInput = {
    where: ChallengeProgressWhereUniqueInput
    data: XOR<ChallengeProgressUpdateWithoutChallengeInput, ChallengeProgressUncheckedUpdateWithoutChallengeInput>
  }

  export type ChallengeProgressUpdateManyWithWhereWithoutChallengeInput = {
    where: ChallengeProgressScalarWhereInput
    data: XOR<ChallengeProgressUpdateManyMutationInput, ChallengeProgressUncheckedUpdateManyWithoutChallengeInput>
  }

  export type ChallengeCreateWithoutEssaysInput = {
    id?: string
    title: string
    description: string
    imageSrc: string
    reward: string
    category: string
    period: string
    progress: number
    disabled: boolean
    participants: number
    createdAt?: Date | string
    updatedAt?: Date | string
    challengeProgress?: ChallengeProgressCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeUncheckedCreateWithoutEssaysInput = {
    id?: string
    title: string
    description: string
    imageSrc: string
    reward: string
    category: string
    period: string
    progress: number
    disabled: boolean
    participants: number
    createdAt?: Date | string
    updatedAt?: Date | string
    challengeProgress?: ChallengeProgressUncheckedCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeCreateOrConnectWithoutEssaysInput = {
    where: ChallengeWhereUniqueInput
    create: XOR<ChallengeCreateWithoutEssaysInput, ChallengeUncheckedCreateWithoutEssaysInput>
  }

  export type ChallengeUpsertWithoutEssaysInput = {
    update: XOR<ChallengeUpdateWithoutEssaysInput, ChallengeUncheckedUpdateWithoutEssaysInput>
    create: XOR<ChallengeCreateWithoutEssaysInput, ChallengeUncheckedCreateWithoutEssaysInput>
    where?: ChallengeWhereInput
  }

  export type ChallengeUpdateToOneWithWhereWithoutEssaysInput = {
    where?: ChallengeWhereInput
    data: XOR<ChallengeUpdateWithoutEssaysInput, ChallengeUncheckedUpdateWithoutEssaysInput>
  }

  export type ChallengeUpdateWithoutEssaysInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageSrc?: StringFieldUpdateOperationsInput | string
    reward?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    disabled?: BoolFieldUpdateOperationsInput | boolean
    participants?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    challengeProgress?: ChallengeProgressUpdateManyWithoutChallengeNestedInput
  }

  export type ChallengeUncheckedUpdateWithoutEssaysInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageSrc?: StringFieldUpdateOperationsInput | string
    reward?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    disabled?: BoolFieldUpdateOperationsInput | boolean
    participants?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    challengeProgress?: ChallengeProgressUncheckedUpdateManyWithoutChallengeNestedInput
  }

  export type UserCreateWithoutChallengeProgressInput = {
    id?: string
    name?: string | null
    hashedPassword?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    level?: number
    tier?: UserCreatetierInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    userType?: $Enums.UserType
    favoriteIds?: UserCreatefavoriteIdsInput | string[]
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    Product?: ProductCreateNestedManyWithoutUserInput
    Board?: BoardCreateNestedManyWithoutUserInput
    ViewdBoardStore?: ViewdBoardStoreCreateNestedManyWithoutUserInput
    BoardLikeDisLike?: BoardLikeDisLikeCreateNestedManyWithoutUserInput
    conversations?: ConversationCreateNestedManyWithoutUsersInput
    sendMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutChallengeProgressInput = {
    id?: string
    name?: string | null
    hashedPassword?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    level?: number
    tier?: UserCreatetierInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    userType?: $Enums.UserType
    favoriteIds?: UserCreatefavoriteIdsInput | string[]
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    Product?: ProductUncheckedCreateNestedManyWithoutUserInput
    Board?: BoardUncheckedCreateNestedManyWithoutUserInput
    ViewdBoardStore?: ViewdBoardStoreUncheckedCreateNestedManyWithoutUserInput
    BoardLikeDisLike?: BoardLikeDisLikeUncheckedCreateNestedManyWithoutUserInput
    conversations?: ConversationUncheckedCreateNestedManyWithoutUsersInput
    sendMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutChallengeProgressInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChallengeProgressInput, UserUncheckedCreateWithoutChallengeProgressInput>
  }

  export type ChallengeCreateWithoutChallengeProgressInput = {
    id?: string
    title: string
    description: string
    imageSrc: string
    reward: string
    category: string
    period: string
    progress: number
    disabled: boolean
    participants: number
    createdAt?: Date | string
    updatedAt?: Date | string
    essays?: EssayCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeUncheckedCreateWithoutChallengeProgressInput = {
    id?: string
    title: string
    description: string
    imageSrc: string
    reward: string
    category: string
    period: string
    progress: number
    disabled: boolean
    participants: number
    createdAt?: Date | string
    updatedAt?: Date | string
    essays?: EssayUncheckedCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeCreateOrConnectWithoutChallengeProgressInput = {
    where: ChallengeWhereUniqueInput
    create: XOR<ChallengeCreateWithoutChallengeProgressInput, ChallengeUncheckedCreateWithoutChallengeProgressInput>
  }

  export type UserUpsertWithoutChallengeProgressInput = {
    update: XOR<UserUpdateWithoutChallengeProgressInput, UserUncheckedUpdateWithoutChallengeProgressInput>
    create: XOR<UserCreateWithoutChallengeProgressInput, UserUncheckedCreateWithoutChallengeProgressInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChallengeProgressInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChallengeProgressInput, UserUncheckedUpdateWithoutChallengeProgressInput>
  }

  export type UserUpdateWithoutChallengeProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    tier?: UserUpdatetierInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    favoriteIds?: UserUpdatefavoriteIdsInput | string[]
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    Product?: ProductUpdateManyWithoutUserNestedInput
    Board?: BoardUpdateManyWithoutUserNestedInput
    ViewdBoardStore?: ViewdBoardStoreUpdateManyWithoutUserNestedInput
    BoardLikeDisLike?: BoardLikeDisLikeUpdateManyWithoutUserNestedInput
    conversations?: ConversationUpdateManyWithoutUsersNestedInput
    sendMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutChallengeProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    tier?: UserUpdatetierInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    favoriteIds?: UserUpdatefavoriteIdsInput | string[]
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Product?: ProductUncheckedUpdateManyWithoutUserNestedInput
    Board?: BoardUncheckedUpdateManyWithoutUserNestedInput
    ViewdBoardStore?: ViewdBoardStoreUncheckedUpdateManyWithoutUserNestedInput
    BoardLikeDisLike?: BoardLikeDisLikeUncheckedUpdateManyWithoutUserNestedInput
    conversations?: ConversationUncheckedUpdateManyWithoutUsersNestedInput
    sendMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type ChallengeUpsertWithoutChallengeProgressInput = {
    update: XOR<ChallengeUpdateWithoutChallengeProgressInput, ChallengeUncheckedUpdateWithoutChallengeProgressInput>
    create: XOR<ChallengeCreateWithoutChallengeProgressInput, ChallengeUncheckedCreateWithoutChallengeProgressInput>
    where?: ChallengeWhereInput
  }

  export type ChallengeUpdateToOneWithWhereWithoutChallengeProgressInput = {
    where?: ChallengeWhereInput
    data: XOR<ChallengeUpdateWithoutChallengeProgressInput, ChallengeUncheckedUpdateWithoutChallengeProgressInput>
  }

  export type ChallengeUpdateWithoutChallengeProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageSrc?: StringFieldUpdateOperationsInput | string
    reward?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    disabled?: BoolFieldUpdateOperationsInput | boolean
    participants?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    essays?: EssayUpdateManyWithoutChallengeNestedInput
  }

  export type ChallengeUncheckedUpdateWithoutChallengeProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageSrc?: StringFieldUpdateOperationsInput | string
    reward?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    disabled?: BoolFieldUpdateOperationsInput | boolean
    participants?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    essays?: EssayUncheckedUpdateManyWithoutChallengeNestedInput
  }

  export type UserCreateWithoutConversationsInput = {
    id?: string
    name?: string | null
    hashedPassword?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    level?: number
    tier?: UserCreatetierInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    userType?: $Enums.UserType
    favoriteIds?: UserCreatefavoriteIdsInput | string[]
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    Product?: ProductCreateNestedManyWithoutUserInput
    Board?: BoardCreateNestedManyWithoutUserInput
    ViewdBoardStore?: ViewdBoardStoreCreateNestedManyWithoutUserInput
    BoardLikeDisLike?: BoardLikeDisLikeCreateNestedManyWithoutUserInput
    challengeProgress?: ChallengeProgressCreateNestedManyWithoutUserInput
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
    level?: number
    tier?: UserCreatetierInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    userType?: $Enums.UserType
    favoriteIds?: UserCreatefavoriteIdsInput | string[]
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    Product?: ProductUncheckedCreateNestedManyWithoutUserInput
    Board?: BoardUncheckedCreateNestedManyWithoutUserInput
    ViewdBoardStore?: ViewdBoardStoreUncheckedCreateNestedManyWithoutUserInput
    BoardLikeDisLike?: BoardLikeDisLikeUncheckedCreateNestedManyWithoutUserInput
    challengeProgress?: ChallengeProgressUncheckedCreateNestedManyWithoutUserInput
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
    level?: IntFilter<"User"> | number
    tier?: StringNullableListFilter<"User">
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
    level?: number
    tier?: UserCreatetierInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    userType?: $Enums.UserType
    favoriteIds?: UserCreatefavoriteIdsInput | string[]
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    Product?: ProductCreateNestedManyWithoutUserInput
    Board?: BoardCreateNestedManyWithoutUserInput
    ViewdBoardStore?: ViewdBoardStoreCreateNestedManyWithoutUserInput
    BoardLikeDisLike?: BoardLikeDisLikeCreateNestedManyWithoutUserInput
    challengeProgress?: ChallengeProgressCreateNestedManyWithoutUserInput
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
    level?: number
    tier?: UserCreatetierInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    userType?: $Enums.UserType
    favoriteIds?: UserCreatefavoriteIdsInput | string[]
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    Product?: ProductUncheckedCreateNestedManyWithoutUserInput
    Board?: BoardUncheckedCreateNestedManyWithoutUserInput
    ViewdBoardStore?: ViewdBoardStoreUncheckedCreateNestedManyWithoutUserInput
    BoardLikeDisLike?: BoardLikeDisLikeUncheckedCreateNestedManyWithoutUserInput
    challengeProgress?: ChallengeProgressUncheckedCreateNestedManyWithoutUserInput
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
    level?: number
    tier?: UserCreatetierInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    userType?: $Enums.UserType
    favoriteIds?: UserCreatefavoriteIdsInput | string[]
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    Product?: ProductCreateNestedManyWithoutUserInput
    Board?: BoardCreateNestedManyWithoutUserInput
    ViewdBoardStore?: ViewdBoardStoreCreateNestedManyWithoutUserInput
    BoardLikeDisLike?: BoardLikeDisLikeCreateNestedManyWithoutUserInput
    challengeProgress?: ChallengeProgressCreateNestedManyWithoutUserInput
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
    level?: number
    tier?: UserCreatetierInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    userType?: $Enums.UserType
    favoriteIds?: UserCreatefavoriteIdsInput | string[]
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    Product?: ProductUncheckedCreateNestedManyWithoutUserInput
    Board?: BoardUncheckedCreateNestedManyWithoutUserInput
    ViewdBoardStore?: ViewdBoardStoreUncheckedCreateNestedManyWithoutUserInput
    BoardLikeDisLike?: BoardLikeDisLikeUncheckedCreateNestedManyWithoutUserInput
    challengeProgress?: ChallengeProgressUncheckedCreateNestedManyWithoutUserInput
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
    level?: IntFieldUpdateOperationsInput | number
    tier?: UserUpdatetierInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    favoriteIds?: UserUpdatefavoriteIdsInput | string[]
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    Product?: ProductUpdateManyWithoutUserNestedInput
    Board?: BoardUpdateManyWithoutUserNestedInput
    ViewdBoardStore?: ViewdBoardStoreUpdateManyWithoutUserNestedInput
    BoardLikeDisLike?: BoardLikeDisLikeUpdateManyWithoutUserNestedInput
    challengeProgress?: ChallengeProgressUpdateManyWithoutUserNestedInput
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
    level?: IntFieldUpdateOperationsInput | number
    tier?: UserUpdatetierInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    favoriteIds?: UserUpdatefavoriteIdsInput | string[]
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Product?: ProductUncheckedUpdateManyWithoutUserNestedInput
    Board?: BoardUncheckedUpdateManyWithoutUserNestedInput
    ViewdBoardStore?: ViewdBoardStoreUncheckedUpdateManyWithoutUserNestedInput
    BoardLikeDisLike?: BoardLikeDisLikeUncheckedUpdateManyWithoutUserNestedInput
    challengeProgress?: ChallengeProgressUncheckedUpdateManyWithoutUserNestedInput
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
    level?: IntFieldUpdateOperationsInput | number
    tier?: UserUpdatetierInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    favoriteIds?: UserUpdatefavoriteIdsInput | string[]
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    Product?: ProductUpdateManyWithoutUserNestedInput
    Board?: BoardUpdateManyWithoutUserNestedInput
    ViewdBoardStore?: ViewdBoardStoreUpdateManyWithoutUserNestedInput
    BoardLikeDisLike?: BoardLikeDisLikeUpdateManyWithoutUserNestedInput
    challengeProgress?: ChallengeProgressUpdateManyWithoutUserNestedInput
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
    level?: IntFieldUpdateOperationsInput | number
    tier?: UserUpdatetierInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    favoriteIds?: UserUpdatefavoriteIdsInput | string[]
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Product?: ProductUncheckedUpdateManyWithoutUserNestedInput
    Board?: BoardUncheckedUpdateManyWithoutUserNestedInput
    ViewdBoardStore?: ViewdBoardStoreUncheckedUpdateManyWithoutUserNestedInput
    BoardLikeDisLike?: BoardLikeDisLikeUncheckedUpdateManyWithoutUserNestedInput
    challengeProgress?: ChallengeProgressUncheckedUpdateManyWithoutUserNestedInput
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

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type ProductCreateManyUserInput = {
    id?: string
    title: string
    description: string
    imageSrc: string
    category: string
    price: number
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string
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

  export type BoardLikeDisLikeCreateManyUserInput = {
    id?: number
    type: string
    createdAt?: Date | string
    boardId: string
  }

  export type ChallengeProgressCreateManyUserInput = {
    id?: string
    challengeId: string
    progress: number
    completed: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
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

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageSrc?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageSrc?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageSrc?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type ChallengeProgressUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    challenge?: ChallengeUpdateOneRequiredWithoutChallengeProgressNestedInput
  }

  export type ChallengeProgressUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChallengeProgressUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EssayCreateManyChallengeInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChallengeProgressCreateManyChallengeInput = {
    id?: string
    userId: string
    progress: number
    completed: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EssayUpdateWithoutChallengeInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EssayUncheckedUpdateWithoutChallengeInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EssayUncheckedUpdateManyWithoutChallengeInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChallengeProgressUpdateWithoutChallengeInput = {
    id?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChallengeProgressNestedInput
  }

  export type ChallengeProgressUncheckedUpdateWithoutChallengeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChallengeProgressUncheckedUpdateManyWithoutChallengeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    level?: IntFieldUpdateOperationsInput | number
    tier?: UserUpdatetierInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    favoriteIds?: UserUpdatefavoriteIdsInput | string[]
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    Product?: ProductUpdateManyWithoutUserNestedInput
    Board?: BoardUpdateManyWithoutUserNestedInput
    ViewdBoardStore?: ViewdBoardStoreUpdateManyWithoutUserNestedInput
    BoardLikeDisLike?: BoardLikeDisLikeUpdateManyWithoutUserNestedInput
    challengeProgress?: ChallengeProgressUpdateManyWithoutUserNestedInput
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
    level?: IntFieldUpdateOperationsInput | number
    tier?: UserUpdatetierInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    favoriteIds?: UserUpdatefavoriteIdsInput | string[]
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Product?: ProductUncheckedUpdateManyWithoutUserNestedInput
    Board?: BoardUncheckedUpdateManyWithoutUserNestedInput
    ViewdBoardStore?: ViewdBoardStoreUncheckedUpdateManyWithoutUserNestedInput
    BoardLikeDisLike?: BoardLikeDisLikeUncheckedUpdateManyWithoutUserNestedInput
    challengeProgress?: ChallengeProgressUncheckedUpdateManyWithoutUserNestedInput
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
    level?: IntFieldUpdateOperationsInput | number
    tier?: UserUpdatetierInput | string[]
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
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BoardCountOutputTypeDefaultArgs instead
     */
    export type BoardCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = BoardCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ChallengeCountOutputTypeDefaultArgs instead
     */
    export type ChallengeCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = ChallengeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ConversationCountOutputTypeDefaultArgs instead
     */
    export type ConversationCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = ConversationCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AccountDefaultArgs instead
     */
    export type AccountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = AccountDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SessionDefaultArgs instead
     */
    export type SessionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = SessionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BoardDefaultArgs instead
     */
    export type BoardArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = BoardDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BoardLikeDisLikeDefaultArgs instead
     */
    export type BoardLikeDisLikeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = BoardLikeDisLikeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductDefaultArgs instead
     */
    export type ProductArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = ProductDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ViewdBoardStoreDefaultArgs instead
     */
    export type ViewdBoardStoreArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = ViewdBoardStoreDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ChallengeDefaultArgs instead
     */
    export type ChallengeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = ChallengeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EssayDefaultArgs instead
     */
    export type EssayArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = EssayDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ChallengeProgressDefaultArgs instead
     */
    export type ChallengeProgressArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = ChallengeProgressDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DopamineDefaultArgs instead
     */
    export type DopamineArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = DopamineDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VerificationTokenDefaultArgs instead
     */
    export type VerificationTokenArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = VerificationTokenDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ConversationDefaultArgs instead
     */
    export type ConversationArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = ConversationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MessageDefaultArgs instead
     */
    export type MessageArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = MessageDefaultArgs<ExtArgs>

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