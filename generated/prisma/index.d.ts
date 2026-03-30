
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model School
 * 
 */
export type School = $Result.DefaultSelection<Prisma.$SchoolPayload>
/**
 * Model Teacher
 * 
 */
export type Teacher = $Result.DefaultSelection<Prisma.$TeacherPayload>
/**
 * Model TeachingAssistant
 * 
 */
export type TeachingAssistant = $Result.DefaultSelection<Prisma.$TeachingAssistantPayload>
/**
 * Model GlobalSetting
 * 
 */
export type GlobalSetting = $Result.DefaultSelection<Prisma.$GlobalSettingPayload>
/**
 * Model SchoolTiming
 * 
 */
export type SchoolTiming = $Result.DefaultSelection<Prisma.$SchoolTimingPayload>
/**
 * Model ScheduleSession
 * 
 */
export type ScheduleSession = $Result.DefaultSelection<Prisma.$ScheduleSessionPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Schools
 * const schools = await prisma.school.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Schools
   * const schools = await prisma.school.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.school`: Exposes CRUD operations for the **School** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schools
    * const schools = await prisma.school.findMany()
    * ```
    */
  get school(): Prisma.SchoolDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teacher`: Exposes CRUD operations for the **Teacher** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teachers
    * const teachers = await prisma.teacher.findMany()
    * ```
    */
  get teacher(): Prisma.TeacherDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teachingAssistant`: Exposes CRUD operations for the **TeachingAssistant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeachingAssistants
    * const teachingAssistants = await prisma.teachingAssistant.findMany()
    * ```
    */
  get teachingAssistant(): Prisma.TeachingAssistantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.globalSetting`: Exposes CRUD operations for the **GlobalSetting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GlobalSettings
    * const globalSettings = await prisma.globalSetting.findMany()
    * ```
    */
  get globalSetting(): Prisma.GlobalSettingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.schoolTiming`: Exposes CRUD operations for the **SchoolTiming** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SchoolTimings
    * const schoolTimings = await prisma.schoolTiming.findMany()
    * ```
    */
  get schoolTiming(): Prisma.SchoolTimingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.scheduleSession`: Exposes CRUD operations for the **ScheduleSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ScheduleSessions
    * const scheduleSessions = await prisma.scheduleSession.findMany()
    * ```
    */
  get scheduleSession(): Prisma.ScheduleSessionDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    School: 'School',
    Teacher: 'Teacher',
    TeachingAssistant: 'TeachingAssistant',
    GlobalSetting: 'GlobalSetting',
    SchoolTiming: 'SchoolTiming',
    ScheduleSession: 'ScheduleSession'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "school" | "teacher" | "teachingAssistant" | "globalSetting" | "schoolTiming" | "scheduleSession"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      School: {
        payload: Prisma.$SchoolPayload<ExtArgs>
        fields: Prisma.SchoolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SchoolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SchoolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          findFirst: {
            args: Prisma.SchoolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SchoolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          findMany: {
            args: Prisma.SchoolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>[]
          }
          create: {
            args: Prisma.SchoolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          createMany: {
            args: Prisma.SchoolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SchoolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          update: {
            args: Prisma.SchoolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          deleteMany: {
            args: Prisma.SchoolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SchoolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SchoolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          aggregate: {
            args: Prisma.SchoolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchool>
          }
          groupBy: {
            args: Prisma.SchoolGroupByArgs<ExtArgs>
            result: $Utils.Optional<SchoolGroupByOutputType>[]
          }
          count: {
            args: Prisma.SchoolCountArgs<ExtArgs>
            result: $Utils.Optional<SchoolCountAggregateOutputType> | number
          }
        }
      }
      Teacher: {
        payload: Prisma.$TeacherPayload<ExtArgs>
        fields: Prisma.TeacherFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeacherFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeacherFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          findFirst: {
            args: Prisma.TeacherFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeacherFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          findMany: {
            args: Prisma.TeacherFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>[]
          }
          create: {
            args: Prisma.TeacherCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          createMany: {
            args: Prisma.TeacherCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TeacherDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          update: {
            args: Prisma.TeacherUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          deleteMany: {
            args: Prisma.TeacherDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeacherUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TeacherUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          aggregate: {
            args: Prisma.TeacherAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeacher>
          }
          groupBy: {
            args: Prisma.TeacherGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeacherGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeacherCountArgs<ExtArgs>
            result: $Utils.Optional<TeacherCountAggregateOutputType> | number
          }
        }
      }
      TeachingAssistant: {
        payload: Prisma.$TeachingAssistantPayload<ExtArgs>
        fields: Prisma.TeachingAssistantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeachingAssistantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingAssistantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeachingAssistantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingAssistantPayload>
          }
          findFirst: {
            args: Prisma.TeachingAssistantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingAssistantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeachingAssistantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingAssistantPayload>
          }
          findMany: {
            args: Prisma.TeachingAssistantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingAssistantPayload>[]
          }
          create: {
            args: Prisma.TeachingAssistantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingAssistantPayload>
          }
          createMany: {
            args: Prisma.TeachingAssistantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TeachingAssistantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingAssistantPayload>
          }
          update: {
            args: Prisma.TeachingAssistantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingAssistantPayload>
          }
          deleteMany: {
            args: Prisma.TeachingAssistantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeachingAssistantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TeachingAssistantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingAssistantPayload>
          }
          aggregate: {
            args: Prisma.TeachingAssistantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeachingAssistant>
          }
          groupBy: {
            args: Prisma.TeachingAssistantGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeachingAssistantGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeachingAssistantCountArgs<ExtArgs>
            result: $Utils.Optional<TeachingAssistantCountAggregateOutputType> | number
          }
        }
      }
      GlobalSetting: {
        payload: Prisma.$GlobalSettingPayload<ExtArgs>
        fields: Prisma.GlobalSettingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GlobalSettingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalSettingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GlobalSettingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalSettingPayload>
          }
          findFirst: {
            args: Prisma.GlobalSettingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalSettingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GlobalSettingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalSettingPayload>
          }
          findMany: {
            args: Prisma.GlobalSettingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalSettingPayload>[]
          }
          create: {
            args: Prisma.GlobalSettingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalSettingPayload>
          }
          createMany: {
            args: Prisma.GlobalSettingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GlobalSettingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalSettingPayload>
          }
          update: {
            args: Prisma.GlobalSettingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalSettingPayload>
          }
          deleteMany: {
            args: Prisma.GlobalSettingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GlobalSettingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GlobalSettingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalSettingPayload>
          }
          aggregate: {
            args: Prisma.GlobalSettingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGlobalSetting>
          }
          groupBy: {
            args: Prisma.GlobalSettingGroupByArgs<ExtArgs>
            result: $Utils.Optional<GlobalSettingGroupByOutputType>[]
          }
          count: {
            args: Prisma.GlobalSettingCountArgs<ExtArgs>
            result: $Utils.Optional<GlobalSettingCountAggregateOutputType> | number
          }
        }
      }
      SchoolTiming: {
        payload: Prisma.$SchoolTimingPayload<ExtArgs>
        fields: Prisma.SchoolTimingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SchoolTimingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolTimingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SchoolTimingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolTimingPayload>
          }
          findFirst: {
            args: Prisma.SchoolTimingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolTimingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SchoolTimingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolTimingPayload>
          }
          findMany: {
            args: Prisma.SchoolTimingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolTimingPayload>[]
          }
          create: {
            args: Prisma.SchoolTimingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolTimingPayload>
          }
          createMany: {
            args: Prisma.SchoolTimingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SchoolTimingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolTimingPayload>
          }
          update: {
            args: Prisma.SchoolTimingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolTimingPayload>
          }
          deleteMany: {
            args: Prisma.SchoolTimingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SchoolTimingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SchoolTimingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolTimingPayload>
          }
          aggregate: {
            args: Prisma.SchoolTimingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchoolTiming>
          }
          groupBy: {
            args: Prisma.SchoolTimingGroupByArgs<ExtArgs>
            result: $Utils.Optional<SchoolTimingGroupByOutputType>[]
          }
          count: {
            args: Prisma.SchoolTimingCountArgs<ExtArgs>
            result: $Utils.Optional<SchoolTimingCountAggregateOutputType> | number
          }
        }
      }
      ScheduleSession: {
        payload: Prisma.$ScheduleSessionPayload<ExtArgs>
        fields: Prisma.ScheduleSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScheduleSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScheduleSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleSessionPayload>
          }
          findFirst: {
            args: Prisma.ScheduleSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScheduleSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleSessionPayload>
          }
          findMany: {
            args: Prisma.ScheduleSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleSessionPayload>[]
          }
          create: {
            args: Prisma.ScheduleSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleSessionPayload>
          }
          createMany: {
            args: Prisma.ScheduleSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ScheduleSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleSessionPayload>
          }
          update: {
            args: Prisma.ScheduleSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleSessionPayload>
          }
          deleteMany: {
            args: Prisma.ScheduleSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScheduleSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ScheduleSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleSessionPayload>
          }
          aggregate: {
            args: Prisma.ScheduleSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScheduleSession>
          }
          groupBy: {
            args: Prisma.ScheduleSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScheduleSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScheduleSessionCountArgs<ExtArgs>
            result: $Utils.Optional<ScheduleSessionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    school?: SchoolOmit
    teacher?: TeacherOmit
    teachingAssistant?: TeachingAssistantOmit
    globalSetting?: GlobalSettingOmit
    schoolTiming?: SchoolTimingOmit
    scheduleSession?: ScheduleSessionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type SchoolCountOutputType
   */

  export type SchoolCountOutputType = {
    timings: number
    sessions: number
  }

  export type SchoolCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    timings?: boolean | SchoolCountOutputTypeCountTimingsArgs
    sessions?: boolean | SchoolCountOutputTypeCountSessionsArgs
  }

  // Custom InputTypes
  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolCountOutputType
     */
    select?: SchoolCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeCountTimingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SchoolTimingWhereInput
  }

  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleSessionWhereInput
  }


  /**
   * Count Type TeacherCountOutputType
   */

  export type TeacherCountOutputType = {
    sessions: number
  }

  export type TeacherCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | TeacherCountOutputTypeCountSessionsArgs
  }

  // Custom InputTypes
  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherCountOutputType
     */
    select?: TeacherCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleSessionWhereInput
  }


  /**
   * Count Type TeachingAssistantCountOutputType
   */

  export type TeachingAssistantCountOutputType = {
    sessions: number
  }

  export type TeachingAssistantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | TeachingAssistantCountOutputTypeCountSessionsArgs
  }

  // Custom InputTypes
  /**
   * TeachingAssistantCountOutputType without action
   */
  export type TeachingAssistantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingAssistantCountOutputType
     */
    select?: TeachingAssistantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeachingAssistantCountOutputType without action
   */
  export type TeachingAssistantCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleSessionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model School
   */

  export type AggregateSchool = {
    _count: SchoolCountAggregateOutputType | null
    _avg: SchoolAvgAggregateOutputType | null
    _sum: SchoolSumAggregateOutputType | null
    _min: SchoolMinAggregateOutputType | null
    _max: SchoolMaxAggregateOutputType | null
  }

  export type SchoolAvgAggregateOutputType = {
    order: number | null
  }

  export type SchoolSumAggregateOutputType = {
    order: number | null
  }

  export type SchoolMinAggregateOutputType = {
    id: string | null
    name: string | null
    color: string | null
    bg: string | null
    order: number | null
    createdAt: Date | null
  }

  export type SchoolMaxAggregateOutputType = {
    id: string | null
    name: string | null
    color: string | null
    bg: string | null
    order: number | null
    createdAt: Date | null
  }

  export type SchoolCountAggregateOutputType = {
    id: number
    name: number
    color: number
    bg: number
    order: number
    createdAt: number
    _all: number
  }


  export type SchoolAvgAggregateInputType = {
    order?: true
  }

  export type SchoolSumAggregateInputType = {
    order?: true
  }

  export type SchoolMinAggregateInputType = {
    id?: true
    name?: true
    color?: true
    bg?: true
    order?: true
    createdAt?: true
  }

  export type SchoolMaxAggregateInputType = {
    id?: true
    name?: true
    color?: true
    bg?: true
    order?: true
    createdAt?: true
  }

  export type SchoolCountAggregateInputType = {
    id?: true
    name?: true
    color?: true
    bg?: true
    order?: true
    createdAt?: true
    _all?: true
  }

  export type SchoolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which School to aggregate.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Schools
    **/
    _count?: true | SchoolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SchoolAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SchoolSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SchoolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SchoolMaxAggregateInputType
  }

  export type GetSchoolAggregateType<T extends SchoolAggregateArgs> = {
        [P in keyof T & keyof AggregateSchool]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchool[P]>
      : GetScalarType<T[P], AggregateSchool[P]>
  }




  export type SchoolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SchoolWhereInput
    orderBy?: SchoolOrderByWithAggregationInput | SchoolOrderByWithAggregationInput[]
    by: SchoolScalarFieldEnum[] | SchoolScalarFieldEnum
    having?: SchoolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SchoolCountAggregateInputType | true
    _avg?: SchoolAvgAggregateInputType
    _sum?: SchoolSumAggregateInputType
    _min?: SchoolMinAggregateInputType
    _max?: SchoolMaxAggregateInputType
  }

  export type SchoolGroupByOutputType = {
    id: string
    name: string
    color: string
    bg: string
    order: number
    createdAt: Date
    _count: SchoolCountAggregateOutputType | null
    _avg: SchoolAvgAggregateOutputType | null
    _sum: SchoolSumAggregateOutputType | null
    _min: SchoolMinAggregateOutputType | null
    _max: SchoolMaxAggregateOutputType | null
  }

  type GetSchoolGroupByPayload<T extends SchoolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SchoolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SchoolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SchoolGroupByOutputType[P]>
            : GetScalarType<T[P], SchoolGroupByOutputType[P]>
        }
      >
    >


  export type SchoolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    color?: boolean
    bg?: boolean
    order?: boolean
    createdAt?: boolean
    timings?: boolean | School$timingsArgs<ExtArgs>
    sessions?: boolean | School$sessionsArgs<ExtArgs>
    _count?: boolean | SchoolCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["school"]>



  export type SchoolSelectScalar = {
    id?: boolean
    name?: boolean
    color?: boolean
    bg?: boolean
    order?: boolean
    createdAt?: boolean
  }

  export type SchoolOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "color" | "bg" | "order" | "createdAt", ExtArgs["result"]["school"]>
  export type SchoolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    timings?: boolean | School$timingsArgs<ExtArgs>
    sessions?: boolean | School$sessionsArgs<ExtArgs>
    _count?: boolean | SchoolCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SchoolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "School"
    objects: {
      timings: Prisma.$SchoolTimingPayload<ExtArgs>[]
      sessions: Prisma.$ScheduleSessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      color: string
      bg: string
      order: number
      createdAt: Date
    }, ExtArgs["result"]["school"]>
    composites: {}
  }

  type SchoolGetPayload<S extends boolean | null | undefined | SchoolDefaultArgs> = $Result.GetResult<Prisma.$SchoolPayload, S>

  type SchoolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SchoolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SchoolCountAggregateInputType | true
    }

  export interface SchoolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['School'], meta: { name: 'School' } }
    /**
     * Find zero or one School that matches the filter.
     * @param {SchoolFindUniqueArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SchoolFindUniqueArgs>(args: SelectSubset<T, SchoolFindUniqueArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one School that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SchoolFindUniqueOrThrowArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SchoolFindUniqueOrThrowArgs>(args: SelectSubset<T, SchoolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first School that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolFindFirstArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SchoolFindFirstArgs>(args?: SelectSubset<T, SchoolFindFirstArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first School that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolFindFirstOrThrowArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SchoolFindFirstOrThrowArgs>(args?: SelectSubset<T, SchoolFindFirstOrThrowArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Schools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schools
     * const schools = await prisma.school.findMany()
     * 
     * // Get first 10 Schools
     * const schools = await prisma.school.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const schoolWithIdOnly = await prisma.school.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SchoolFindManyArgs>(args?: SelectSubset<T, SchoolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a School.
     * @param {SchoolCreateArgs} args - Arguments to create a School.
     * @example
     * // Create one School
     * const School = await prisma.school.create({
     *   data: {
     *     // ... data to create a School
     *   }
     * })
     * 
     */
    create<T extends SchoolCreateArgs>(args: SelectSubset<T, SchoolCreateArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Schools.
     * @param {SchoolCreateManyArgs} args - Arguments to create many Schools.
     * @example
     * // Create many Schools
     * const school = await prisma.school.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SchoolCreateManyArgs>(args?: SelectSubset<T, SchoolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a School.
     * @param {SchoolDeleteArgs} args - Arguments to delete one School.
     * @example
     * // Delete one School
     * const School = await prisma.school.delete({
     *   where: {
     *     // ... filter to delete one School
     *   }
     * })
     * 
     */
    delete<T extends SchoolDeleteArgs>(args: SelectSubset<T, SchoolDeleteArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one School.
     * @param {SchoolUpdateArgs} args - Arguments to update one School.
     * @example
     * // Update one School
     * const school = await prisma.school.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SchoolUpdateArgs>(args: SelectSubset<T, SchoolUpdateArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Schools.
     * @param {SchoolDeleteManyArgs} args - Arguments to filter Schools to delete.
     * @example
     * // Delete a few Schools
     * const { count } = await prisma.school.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SchoolDeleteManyArgs>(args?: SelectSubset<T, SchoolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schools
     * const school = await prisma.school.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SchoolUpdateManyArgs>(args: SelectSubset<T, SchoolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one School.
     * @param {SchoolUpsertArgs} args - Arguments to update or create a School.
     * @example
     * // Update or create a School
     * const school = await prisma.school.upsert({
     *   create: {
     *     // ... data to create a School
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the School we want to update
     *   }
     * })
     */
    upsert<T extends SchoolUpsertArgs>(args: SelectSubset<T, SchoolUpsertArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolCountArgs} args - Arguments to filter Schools to count.
     * @example
     * // Count the number of Schools
     * const count = await prisma.school.count({
     *   where: {
     *     // ... the filter for the Schools we want to count
     *   }
     * })
    **/
    count<T extends SchoolCountArgs>(
      args?: Subset<T, SchoolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SchoolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a School.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SchoolAggregateArgs>(args: Subset<T, SchoolAggregateArgs>): Prisma.PrismaPromise<GetSchoolAggregateType<T>>

    /**
     * Group by School.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolGroupByArgs} args - Group by arguments.
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
      T extends SchoolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SchoolGroupByArgs['orderBy'] }
        : { orderBy?: SchoolGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SchoolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSchoolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the School model
   */
  readonly fields: SchoolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for School.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SchoolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    timings<T extends School$timingsArgs<ExtArgs> = {}>(args?: Subset<T, School$timingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolTimingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends School$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, School$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduleSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the School model
   */
  interface SchoolFieldRefs {
    readonly id: FieldRef<"School", 'String'>
    readonly name: FieldRef<"School", 'String'>
    readonly color: FieldRef<"School", 'String'>
    readonly bg: FieldRef<"School", 'String'>
    readonly order: FieldRef<"School", 'Int'>
    readonly createdAt: FieldRef<"School", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * School findUnique
   */
  export type SchoolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School findUniqueOrThrow
   */
  export type SchoolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School findFirst
   */
  export type SchoolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schools.
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schools.
     */
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[]
  }

  /**
   * School findFirstOrThrow
   */
  export type SchoolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schools.
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schools.
     */
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[]
  }

  /**
   * School findMany
   */
  export type SchoolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which Schools to fetch.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Schools.
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[]
  }

  /**
   * School create
   */
  export type SchoolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * The data needed to create a School.
     */
    data: XOR<SchoolCreateInput, SchoolUncheckedCreateInput>
  }

  /**
   * School createMany
   */
  export type SchoolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Schools.
     */
    data: SchoolCreateManyInput | SchoolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * School update
   */
  export type SchoolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * The data needed to update a School.
     */
    data: XOR<SchoolUpdateInput, SchoolUncheckedUpdateInput>
    /**
     * Choose, which School to update.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School updateMany
   */
  export type SchoolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Schools.
     */
    data: XOR<SchoolUpdateManyMutationInput, SchoolUncheckedUpdateManyInput>
    /**
     * Filter which Schools to update
     */
    where?: SchoolWhereInput
    /**
     * Limit how many Schools to update.
     */
    limit?: number
  }

  /**
   * School upsert
   */
  export type SchoolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * The filter to search for the School to update in case it exists.
     */
    where: SchoolWhereUniqueInput
    /**
     * In case the School found by the `where` argument doesn't exist, create a new School with this data.
     */
    create: XOR<SchoolCreateInput, SchoolUncheckedCreateInput>
    /**
     * In case the School was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SchoolUpdateInput, SchoolUncheckedUpdateInput>
  }

  /**
   * School delete
   */
  export type SchoolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter which School to delete.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School deleteMany
   */
  export type SchoolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schools to delete
     */
    where?: SchoolWhereInput
    /**
     * Limit how many Schools to delete.
     */
    limit?: number
  }

  /**
   * School.timings
   */
  export type School$timingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolTiming
     */
    select?: SchoolTimingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolTiming
     */
    omit?: SchoolTimingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolTimingInclude<ExtArgs> | null
    where?: SchoolTimingWhereInput
    orderBy?: SchoolTimingOrderByWithRelationInput | SchoolTimingOrderByWithRelationInput[]
    cursor?: SchoolTimingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SchoolTimingScalarFieldEnum | SchoolTimingScalarFieldEnum[]
  }

  /**
   * School.sessions
   */
  export type School$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleSession
     */
    select?: ScheduleSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleSession
     */
    omit?: ScheduleSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleSessionInclude<ExtArgs> | null
    where?: ScheduleSessionWhereInput
    orderBy?: ScheduleSessionOrderByWithRelationInput | ScheduleSessionOrderByWithRelationInput[]
    cursor?: ScheduleSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScheduleSessionScalarFieldEnum | ScheduleSessionScalarFieldEnum[]
  }

  /**
   * School without action
   */
  export type SchoolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
  }


  /**
   * Model Teacher
   */

  export type AggregateTeacher = {
    _count: TeacherCountAggregateOutputType | null
    _min: TeacherMinAggregateOutputType | null
    _max: TeacherMaxAggregateOutputType | null
  }

  export type TeacherMinAggregateOutputType = {
    id: string | null
    name: string | null
    color: string | null
    createdAt: Date | null
  }

  export type TeacherMaxAggregateOutputType = {
    id: string | null
    name: string | null
    color: string | null
    createdAt: Date | null
  }

  export type TeacherCountAggregateOutputType = {
    id: number
    name: number
    color: number
    createdAt: number
    _all: number
  }


  export type TeacherMinAggregateInputType = {
    id?: true
    name?: true
    color?: true
    createdAt?: true
  }

  export type TeacherMaxAggregateInputType = {
    id?: true
    name?: true
    color?: true
    createdAt?: true
  }

  export type TeacherCountAggregateInputType = {
    id?: true
    name?: true
    color?: true
    createdAt?: true
    _all?: true
  }

  export type TeacherAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teacher to aggregate.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teachers
    **/
    _count?: true | TeacherCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeacherMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeacherMaxAggregateInputType
  }

  export type GetTeacherAggregateType<T extends TeacherAggregateArgs> = {
        [P in keyof T & keyof AggregateTeacher]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeacher[P]>
      : GetScalarType<T[P], AggregateTeacher[P]>
  }




  export type TeacherGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherWhereInput
    orderBy?: TeacherOrderByWithAggregationInput | TeacherOrderByWithAggregationInput[]
    by: TeacherScalarFieldEnum[] | TeacherScalarFieldEnum
    having?: TeacherScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeacherCountAggregateInputType | true
    _min?: TeacherMinAggregateInputType
    _max?: TeacherMaxAggregateInputType
  }

  export type TeacherGroupByOutputType = {
    id: string
    name: string
    color: string
    createdAt: Date
    _count: TeacherCountAggregateOutputType | null
    _min: TeacherMinAggregateOutputType | null
    _max: TeacherMaxAggregateOutputType | null
  }

  type GetTeacherGroupByPayload<T extends TeacherGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeacherGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeacherGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeacherGroupByOutputType[P]>
            : GetScalarType<T[P], TeacherGroupByOutputType[P]>
        }
      >
    >


  export type TeacherSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    color?: boolean
    createdAt?: boolean
    sessions?: boolean | Teacher$sessionsArgs<ExtArgs>
    _count?: boolean | TeacherCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacher"]>



  export type TeacherSelectScalar = {
    id?: boolean
    name?: boolean
    color?: boolean
    createdAt?: boolean
  }

  export type TeacherOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "color" | "createdAt", ExtArgs["result"]["teacher"]>
  export type TeacherInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | Teacher$sessionsArgs<ExtArgs>
    _count?: boolean | TeacherCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TeacherPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Teacher"
    objects: {
      sessions: Prisma.$ScheduleSessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      color: string
      createdAt: Date
    }, ExtArgs["result"]["teacher"]>
    composites: {}
  }

  type TeacherGetPayload<S extends boolean | null | undefined | TeacherDefaultArgs> = $Result.GetResult<Prisma.$TeacherPayload, S>

  type TeacherCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeacherFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeacherCountAggregateInputType | true
    }

  export interface TeacherDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Teacher'], meta: { name: 'Teacher' } }
    /**
     * Find zero or one Teacher that matches the filter.
     * @param {TeacherFindUniqueArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeacherFindUniqueArgs>(args: SelectSubset<T, TeacherFindUniqueArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Teacher that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeacherFindUniqueOrThrowArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeacherFindUniqueOrThrowArgs>(args: SelectSubset<T, TeacherFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teacher that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindFirstArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeacherFindFirstArgs>(args?: SelectSubset<T, TeacherFindFirstArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teacher that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindFirstOrThrowArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeacherFindFirstOrThrowArgs>(args?: SelectSubset<T, TeacherFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teachers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teachers
     * const teachers = await prisma.teacher.findMany()
     * 
     * // Get first 10 Teachers
     * const teachers = await prisma.teacher.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teacherWithIdOnly = await prisma.teacher.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeacherFindManyArgs>(args?: SelectSubset<T, TeacherFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Teacher.
     * @param {TeacherCreateArgs} args - Arguments to create a Teacher.
     * @example
     * // Create one Teacher
     * const Teacher = await prisma.teacher.create({
     *   data: {
     *     // ... data to create a Teacher
     *   }
     * })
     * 
     */
    create<T extends TeacherCreateArgs>(args: SelectSubset<T, TeacherCreateArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teachers.
     * @param {TeacherCreateManyArgs} args - Arguments to create many Teachers.
     * @example
     * // Create many Teachers
     * const teacher = await prisma.teacher.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeacherCreateManyArgs>(args?: SelectSubset<T, TeacherCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Teacher.
     * @param {TeacherDeleteArgs} args - Arguments to delete one Teacher.
     * @example
     * // Delete one Teacher
     * const Teacher = await prisma.teacher.delete({
     *   where: {
     *     // ... filter to delete one Teacher
     *   }
     * })
     * 
     */
    delete<T extends TeacherDeleteArgs>(args: SelectSubset<T, TeacherDeleteArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Teacher.
     * @param {TeacherUpdateArgs} args - Arguments to update one Teacher.
     * @example
     * // Update one Teacher
     * const teacher = await prisma.teacher.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeacherUpdateArgs>(args: SelectSubset<T, TeacherUpdateArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teachers.
     * @param {TeacherDeleteManyArgs} args - Arguments to filter Teachers to delete.
     * @example
     * // Delete a few Teachers
     * const { count } = await prisma.teacher.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeacherDeleteManyArgs>(args?: SelectSubset<T, TeacherDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teachers
     * const teacher = await prisma.teacher.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeacherUpdateManyArgs>(args: SelectSubset<T, TeacherUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Teacher.
     * @param {TeacherUpsertArgs} args - Arguments to update or create a Teacher.
     * @example
     * // Update or create a Teacher
     * const teacher = await prisma.teacher.upsert({
     *   create: {
     *     // ... data to create a Teacher
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Teacher we want to update
     *   }
     * })
     */
    upsert<T extends TeacherUpsertArgs>(args: SelectSubset<T, TeacherUpsertArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherCountArgs} args - Arguments to filter Teachers to count.
     * @example
     * // Count the number of Teachers
     * const count = await prisma.teacher.count({
     *   where: {
     *     // ... the filter for the Teachers we want to count
     *   }
     * })
    **/
    count<T extends TeacherCountArgs>(
      args?: Subset<T, TeacherCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeacherCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Teacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeacherAggregateArgs>(args: Subset<T, TeacherAggregateArgs>): Prisma.PrismaPromise<GetTeacherAggregateType<T>>

    /**
     * Group by Teacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherGroupByArgs} args - Group by arguments.
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
      T extends TeacherGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeacherGroupByArgs['orderBy'] }
        : { orderBy?: TeacherGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeacherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeacherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Teacher model
   */
  readonly fields: TeacherFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Teacher.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeacherClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessions<T extends Teacher$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, Teacher$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduleSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Teacher model
   */
  interface TeacherFieldRefs {
    readonly id: FieldRef<"Teacher", 'String'>
    readonly name: FieldRef<"Teacher", 'String'>
    readonly color: FieldRef<"Teacher", 'String'>
    readonly createdAt: FieldRef<"Teacher", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Teacher findUnique
   */
  export type TeacherFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher findUniqueOrThrow
   */
  export type TeacherFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher findFirst
   */
  export type TeacherFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teachers.
     */
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher findFirstOrThrow
   */
  export type TeacherFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teachers.
     */
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher findMany
   */
  export type TeacherFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teachers to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher create
   */
  export type TeacherCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * The data needed to create a Teacher.
     */
    data: XOR<TeacherCreateInput, TeacherUncheckedCreateInput>
  }

  /**
   * Teacher createMany
   */
  export type TeacherCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teachers.
     */
    data: TeacherCreateManyInput | TeacherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Teacher update
   */
  export type TeacherUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * The data needed to update a Teacher.
     */
    data: XOR<TeacherUpdateInput, TeacherUncheckedUpdateInput>
    /**
     * Choose, which Teacher to update.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher updateMany
   */
  export type TeacherUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teachers.
     */
    data: XOR<TeacherUpdateManyMutationInput, TeacherUncheckedUpdateManyInput>
    /**
     * Filter which Teachers to update
     */
    where?: TeacherWhereInput
    /**
     * Limit how many Teachers to update.
     */
    limit?: number
  }

  /**
   * Teacher upsert
   */
  export type TeacherUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * The filter to search for the Teacher to update in case it exists.
     */
    where: TeacherWhereUniqueInput
    /**
     * In case the Teacher found by the `where` argument doesn't exist, create a new Teacher with this data.
     */
    create: XOR<TeacherCreateInput, TeacherUncheckedCreateInput>
    /**
     * In case the Teacher was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeacherUpdateInput, TeacherUncheckedUpdateInput>
  }

  /**
   * Teacher delete
   */
  export type TeacherDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter which Teacher to delete.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher deleteMany
   */
  export type TeacherDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teachers to delete
     */
    where?: TeacherWhereInput
    /**
     * Limit how many Teachers to delete.
     */
    limit?: number
  }

  /**
   * Teacher.sessions
   */
  export type Teacher$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleSession
     */
    select?: ScheduleSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleSession
     */
    omit?: ScheduleSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleSessionInclude<ExtArgs> | null
    where?: ScheduleSessionWhereInput
    orderBy?: ScheduleSessionOrderByWithRelationInput | ScheduleSessionOrderByWithRelationInput[]
    cursor?: ScheduleSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScheduleSessionScalarFieldEnum | ScheduleSessionScalarFieldEnum[]
  }

  /**
   * Teacher without action
   */
  export type TeacherDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
  }


  /**
   * Model TeachingAssistant
   */

  export type AggregateTeachingAssistant = {
    _count: TeachingAssistantCountAggregateOutputType | null
    _min: TeachingAssistantMinAggregateOutputType | null
    _max: TeachingAssistantMaxAggregateOutputType | null
  }

  export type TeachingAssistantMinAggregateOutputType = {
    id: string | null
    name: string | null
    color: string | null
    createdAt: Date | null
  }

  export type TeachingAssistantMaxAggregateOutputType = {
    id: string | null
    name: string | null
    color: string | null
    createdAt: Date | null
  }

  export type TeachingAssistantCountAggregateOutputType = {
    id: number
    name: number
    color: number
    createdAt: number
    _all: number
  }


  export type TeachingAssistantMinAggregateInputType = {
    id?: true
    name?: true
    color?: true
    createdAt?: true
  }

  export type TeachingAssistantMaxAggregateInputType = {
    id?: true
    name?: true
    color?: true
    createdAt?: true
  }

  export type TeachingAssistantCountAggregateInputType = {
    id?: true
    name?: true
    color?: true
    createdAt?: true
    _all?: true
  }

  export type TeachingAssistantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeachingAssistant to aggregate.
     */
    where?: TeachingAssistantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeachingAssistants to fetch.
     */
    orderBy?: TeachingAssistantOrderByWithRelationInput | TeachingAssistantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeachingAssistantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeachingAssistants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeachingAssistants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TeachingAssistants
    **/
    _count?: true | TeachingAssistantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeachingAssistantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeachingAssistantMaxAggregateInputType
  }

  export type GetTeachingAssistantAggregateType<T extends TeachingAssistantAggregateArgs> = {
        [P in keyof T & keyof AggregateTeachingAssistant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeachingAssistant[P]>
      : GetScalarType<T[P], AggregateTeachingAssistant[P]>
  }




  export type TeachingAssistantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeachingAssistantWhereInput
    orderBy?: TeachingAssistantOrderByWithAggregationInput | TeachingAssistantOrderByWithAggregationInput[]
    by: TeachingAssistantScalarFieldEnum[] | TeachingAssistantScalarFieldEnum
    having?: TeachingAssistantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeachingAssistantCountAggregateInputType | true
    _min?: TeachingAssistantMinAggregateInputType
    _max?: TeachingAssistantMaxAggregateInputType
  }

  export type TeachingAssistantGroupByOutputType = {
    id: string
    name: string
    color: string
    createdAt: Date
    _count: TeachingAssistantCountAggregateOutputType | null
    _min: TeachingAssistantMinAggregateOutputType | null
    _max: TeachingAssistantMaxAggregateOutputType | null
  }

  type GetTeachingAssistantGroupByPayload<T extends TeachingAssistantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeachingAssistantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeachingAssistantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeachingAssistantGroupByOutputType[P]>
            : GetScalarType<T[P], TeachingAssistantGroupByOutputType[P]>
        }
      >
    >


  export type TeachingAssistantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    color?: boolean
    createdAt?: boolean
    sessions?: boolean | TeachingAssistant$sessionsArgs<ExtArgs>
    _count?: boolean | TeachingAssistantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teachingAssistant"]>



  export type TeachingAssistantSelectScalar = {
    id?: boolean
    name?: boolean
    color?: boolean
    createdAt?: boolean
  }

  export type TeachingAssistantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "color" | "createdAt", ExtArgs["result"]["teachingAssistant"]>
  export type TeachingAssistantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | TeachingAssistant$sessionsArgs<ExtArgs>
    _count?: boolean | TeachingAssistantCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TeachingAssistantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TeachingAssistant"
    objects: {
      sessions: Prisma.$ScheduleSessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      color: string
      createdAt: Date
    }, ExtArgs["result"]["teachingAssistant"]>
    composites: {}
  }

  type TeachingAssistantGetPayload<S extends boolean | null | undefined | TeachingAssistantDefaultArgs> = $Result.GetResult<Prisma.$TeachingAssistantPayload, S>

  type TeachingAssistantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeachingAssistantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeachingAssistantCountAggregateInputType | true
    }

  export interface TeachingAssistantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TeachingAssistant'], meta: { name: 'TeachingAssistant' } }
    /**
     * Find zero or one TeachingAssistant that matches the filter.
     * @param {TeachingAssistantFindUniqueArgs} args - Arguments to find a TeachingAssistant
     * @example
     * // Get one TeachingAssistant
     * const teachingAssistant = await prisma.teachingAssistant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeachingAssistantFindUniqueArgs>(args: SelectSubset<T, TeachingAssistantFindUniqueArgs<ExtArgs>>): Prisma__TeachingAssistantClient<$Result.GetResult<Prisma.$TeachingAssistantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TeachingAssistant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeachingAssistantFindUniqueOrThrowArgs} args - Arguments to find a TeachingAssistant
     * @example
     * // Get one TeachingAssistant
     * const teachingAssistant = await prisma.teachingAssistant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeachingAssistantFindUniqueOrThrowArgs>(args: SelectSubset<T, TeachingAssistantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeachingAssistantClient<$Result.GetResult<Prisma.$TeachingAssistantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeachingAssistant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachingAssistantFindFirstArgs} args - Arguments to find a TeachingAssistant
     * @example
     * // Get one TeachingAssistant
     * const teachingAssistant = await prisma.teachingAssistant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeachingAssistantFindFirstArgs>(args?: SelectSubset<T, TeachingAssistantFindFirstArgs<ExtArgs>>): Prisma__TeachingAssistantClient<$Result.GetResult<Prisma.$TeachingAssistantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeachingAssistant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachingAssistantFindFirstOrThrowArgs} args - Arguments to find a TeachingAssistant
     * @example
     * // Get one TeachingAssistant
     * const teachingAssistant = await prisma.teachingAssistant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeachingAssistantFindFirstOrThrowArgs>(args?: SelectSubset<T, TeachingAssistantFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeachingAssistantClient<$Result.GetResult<Prisma.$TeachingAssistantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TeachingAssistants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachingAssistantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeachingAssistants
     * const teachingAssistants = await prisma.teachingAssistant.findMany()
     * 
     * // Get first 10 TeachingAssistants
     * const teachingAssistants = await prisma.teachingAssistant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teachingAssistantWithIdOnly = await prisma.teachingAssistant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeachingAssistantFindManyArgs>(args?: SelectSubset<T, TeachingAssistantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeachingAssistantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TeachingAssistant.
     * @param {TeachingAssistantCreateArgs} args - Arguments to create a TeachingAssistant.
     * @example
     * // Create one TeachingAssistant
     * const TeachingAssistant = await prisma.teachingAssistant.create({
     *   data: {
     *     // ... data to create a TeachingAssistant
     *   }
     * })
     * 
     */
    create<T extends TeachingAssistantCreateArgs>(args: SelectSubset<T, TeachingAssistantCreateArgs<ExtArgs>>): Prisma__TeachingAssistantClient<$Result.GetResult<Prisma.$TeachingAssistantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TeachingAssistants.
     * @param {TeachingAssistantCreateManyArgs} args - Arguments to create many TeachingAssistants.
     * @example
     * // Create many TeachingAssistants
     * const teachingAssistant = await prisma.teachingAssistant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeachingAssistantCreateManyArgs>(args?: SelectSubset<T, TeachingAssistantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TeachingAssistant.
     * @param {TeachingAssistantDeleteArgs} args - Arguments to delete one TeachingAssistant.
     * @example
     * // Delete one TeachingAssistant
     * const TeachingAssistant = await prisma.teachingAssistant.delete({
     *   where: {
     *     // ... filter to delete one TeachingAssistant
     *   }
     * })
     * 
     */
    delete<T extends TeachingAssistantDeleteArgs>(args: SelectSubset<T, TeachingAssistantDeleteArgs<ExtArgs>>): Prisma__TeachingAssistantClient<$Result.GetResult<Prisma.$TeachingAssistantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TeachingAssistant.
     * @param {TeachingAssistantUpdateArgs} args - Arguments to update one TeachingAssistant.
     * @example
     * // Update one TeachingAssistant
     * const teachingAssistant = await prisma.teachingAssistant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeachingAssistantUpdateArgs>(args: SelectSubset<T, TeachingAssistantUpdateArgs<ExtArgs>>): Prisma__TeachingAssistantClient<$Result.GetResult<Prisma.$TeachingAssistantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TeachingAssistants.
     * @param {TeachingAssistantDeleteManyArgs} args - Arguments to filter TeachingAssistants to delete.
     * @example
     * // Delete a few TeachingAssistants
     * const { count } = await prisma.teachingAssistant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeachingAssistantDeleteManyArgs>(args?: SelectSubset<T, TeachingAssistantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeachingAssistants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachingAssistantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeachingAssistants
     * const teachingAssistant = await prisma.teachingAssistant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeachingAssistantUpdateManyArgs>(args: SelectSubset<T, TeachingAssistantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TeachingAssistant.
     * @param {TeachingAssistantUpsertArgs} args - Arguments to update or create a TeachingAssistant.
     * @example
     * // Update or create a TeachingAssistant
     * const teachingAssistant = await prisma.teachingAssistant.upsert({
     *   create: {
     *     // ... data to create a TeachingAssistant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeachingAssistant we want to update
     *   }
     * })
     */
    upsert<T extends TeachingAssistantUpsertArgs>(args: SelectSubset<T, TeachingAssistantUpsertArgs<ExtArgs>>): Prisma__TeachingAssistantClient<$Result.GetResult<Prisma.$TeachingAssistantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TeachingAssistants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachingAssistantCountArgs} args - Arguments to filter TeachingAssistants to count.
     * @example
     * // Count the number of TeachingAssistants
     * const count = await prisma.teachingAssistant.count({
     *   where: {
     *     // ... the filter for the TeachingAssistants we want to count
     *   }
     * })
    **/
    count<T extends TeachingAssistantCountArgs>(
      args?: Subset<T, TeachingAssistantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeachingAssistantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeachingAssistant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachingAssistantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeachingAssistantAggregateArgs>(args: Subset<T, TeachingAssistantAggregateArgs>): Prisma.PrismaPromise<GetTeachingAssistantAggregateType<T>>

    /**
     * Group by TeachingAssistant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachingAssistantGroupByArgs} args - Group by arguments.
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
      T extends TeachingAssistantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeachingAssistantGroupByArgs['orderBy'] }
        : { orderBy?: TeachingAssistantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeachingAssistantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeachingAssistantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TeachingAssistant model
   */
  readonly fields: TeachingAssistantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeachingAssistant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeachingAssistantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessions<T extends TeachingAssistant$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, TeachingAssistant$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduleSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TeachingAssistant model
   */
  interface TeachingAssistantFieldRefs {
    readonly id: FieldRef<"TeachingAssistant", 'String'>
    readonly name: FieldRef<"TeachingAssistant", 'String'>
    readonly color: FieldRef<"TeachingAssistant", 'String'>
    readonly createdAt: FieldRef<"TeachingAssistant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TeachingAssistant findUnique
   */
  export type TeachingAssistantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingAssistant
     */
    select?: TeachingAssistantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingAssistant
     */
    omit?: TeachingAssistantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingAssistantInclude<ExtArgs> | null
    /**
     * Filter, which TeachingAssistant to fetch.
     */
    where: TeachingAssistantWhereUniqueInput
  }

  /**
   * TeachingAssistant findUniqueOrThrow
   */
  export type TeachingAssistantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingAssistant
     */
    select?: TeachingAssistantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingAssistant
     */
    omit?: TeachingAssistantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingAssistantInclude<ExtArgs> | null
    /**
     * Filter, which TeachingAssistant to fetch.
     */
    where: TeachingAssistantWhereUniqueInput
  }

  /**
   * TeachingAssistant findFirst
   */
  export type TeachingAssistantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingAssistant
     */
    select?: TeachingAssistantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingAssistant
     */
    omit?: TeachingAssistantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingAssistantInclude<ExtArgs> | null
    /**
     * Filter, which TeachingAssistant to fetch.
     */
    where?: TeachingAssistantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeachingAssistants to fetch.
     */
    orderBy?: TeachingAssistantOrderByWithRelationInput | TeachingAssistantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeachingAssistants.
     */
    cursor?: TeachingAssistantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeachingAssistants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeachingAssistants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeachingAssistants.
     */
    distinct?: TeachingAssistantScalarFieldEnum | TeachingAssistantScalarFieldEnum[]
  }

  /**
   * TeachingAssistant findFirstOrThrow
   */
  export type TeachingAssistantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingAssistant
     */
    select?: TeachingAssistantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingAssistant
     */
    omit?: TeachingAssistantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingAssistantInclude<ExtArgs> | null
    /**
     * Filter, which TeachingAssistant to fetch.
     */
    where?: TeachingAssistantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeachingAssistants to fetch.
     */
    orderBy?: TeachingAssistantOrderByWithRelationInput | TeachingAssistantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeachingAssistants.
     */
    cursor?: TeachingAssistantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeachingAssistants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeachingAssistants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeachingAssistants.
     */
    distinct?: TeachingAssistantScalarFieldEnum | TeachingAssistantScalarFieldEnum[]
  }

  /**
   * TeachingAssistant findMany
   */
  export type TeachingAssistantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingAssistant
     */
    select?: TeachingAssistantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingAssistant
     */
    omit?: TeachingAssistantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingAssistantInclude<ExtArgs> | null
    /**
     * Filter, which TeachingAssistants to fetch.
     */
    where?: TeachingAssistantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeachingAssistants to fetch.
     */
    orderBy?: TeachingAssistantOrderByWithRelationInput | TeachingAssistantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeachingAssistants.
     */
    cursor?: TeachingAssistantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeachingAssistants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeachingAssistants.
     */
    skip?: number
    distinct?: TeachingAssistantScalarFieldEnum | TeachingAssistantScalarFieldEnum[]
  }

  /**
   * TeachingAssistant create
   */
  export type TeachingAssistantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingAssistant
     */
    select?: TeachingAssistantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingAssistant
     */
    omit?: TeachingAssistantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingAssistantInclude<ExtArgs> | null
    /**
     * The data needed to create a TeachingAssistant.
     */
    data: XOR<TeachingAssistantCreateInput, TeachingAssistantUncheckedCreateInput>
  }

  /**
   * TeachingAssistant createMany
   */
  export type TeachingAssistantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeachingAssistants.
     */
    data: TeachingAssistantCreateManyInput | TeachingAssistantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TeachingAssistant update
   */
  export type TeachingAssistantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingAssistant
     */
    select?: TeachingAssistantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingAssistant
     */
    omit?: TeachingAssistantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingAssistantInclude<ExtArgs> | null
    /**
     * The data needed to update a TeachingAssistant.
     */
    data: XOR<TeachingAssistantUpdateInput, TeachingAssistantUncheckedUpdateInput>
    /**
     * Choose, which TeachingAssistant to update.
     */
    where: TeachingAssistantWhereUniqueInput
  }

  /**
   * TeachingAssistant updateMany
   */
  export type TeachingAssistantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TeachingAssistants.
     */
    data: XOR<TeachingAssistantUpdateManyMutationInput, TeachingAssistantUncheckedUpdateManyInput>
    /**
     * Filter which TeachingAssistants to update
     */
    where?: TeachingAssistantWhereInput
    /**
     * Limit how many TeachingAssistants to update.
     */
    limit?: number
  }

  /**
   * TeachingAssistant upsert
   */
  export type TeachingAssistantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingAssistant
     */
    select?: TeachingAssistantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingAssistant
     */
    omit?: TeachingAssistantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingAssistantInclude<ExtArgs> | null
    /**
     * The filter to search for the TeachingAssistant to update in case it exists.
     */
    where: TeachingAssistantWhereUniqueInput
    /**
     * In case the TeachingAssistant found by the `where` argument doesn't exist, create a new TeachingAssistant with this data.
     */
    create: XOR<TeachingAssistantCreateInput, TeachingAssistantUncheckedCreateInput>
    /**
     * In case the TeachingAssistant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeachingAssistantUpdateInput, TeachingAssistantUncheckedUpdateInput>
  }

  /**
   * TeachingAssistant delete
   */
  export type TeachingAssistantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingAssistant
     */
    select?: TeachingAssistantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingAssistant
     */
    omit?: TeachingAssistantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingAssistantInclude<ExtArgs> | null
    /**
     * Filter which TeachingAssistant to delete.
     */
    where: TeachingAssistantWhereUniqueInput
  }

  /**
   * TeachingAssistant deleteMany
   */
  export type TeachingAssistantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeachingAssistants to delete
     */
    where?: TeachingAssistantWhereInput
    /**
     * Limit how many TeachingAssistants to delete.
     */
    limit?: number
  }

  /**
   * TeachingAssistant.sessions
   */
  export type TeachingAssistant$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleSession
     */
    select?: ScheduleSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleSession
     */
    omit?: ScheduleSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleSessionInclude<ExtArgs> | null
    where?: ScheduleSessionWhereInput
    orderBy?: ScheduleSessionOrderByWithRelationInput | ScheduleSessionOrderByWithRelationInput[]
    cursor?: ScheduleSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScheduleSessionScalarFieldEnum | ScheduleSessionScalarFieldEnum[]
  }

  /**
   * TeachingAssistant without action
   */
  export type TeachingAssistantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingAssistant
     */
    select?: TeachingAssistantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingAssistant
     */
    omit?: TeachingAssistantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingAssistantInclude<ExtArgs> | null
  }


  /**
   * Model GlobalSetting
   */

  export type AggregateGlobalSetting = {
    _count: GlobalSettingCountAggregateOutputType | null
    _min: GlobalSettingMinAggregateOutputType | null
    _max: GlobalSettingMaxAggregateOutputType | null
  }

  export type GlobalSettingMinAggregateOutputType = {
    id: string | null
    period1Start: string | null
  }

  export type GlobalSettingMaxAggregateOutputType = {
    id: string | null
    period1Start: string | null
  }

  export type GlobalSettingCountAggregateOutputType = {
    id: number
    period1Start: number
    _all: number
  }


  export type GlobalSettingMinAggregateInputType = {
    id?: true
    period1Start?: true
  }

  export type GlobalSettingMaxAggregateInputType = {
    id?: true
    period1Start?: true
  }

  export type GlobalSettingCountAggregateInputType = {
    id?: true
    period1Start?: true
    _all?: true
  }

  export type GlobalSettingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GlobalSetting to aggregate.
     */
    where?: GlobalSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlobalSettings to fetch.
     */
    orderBy?: GlobalSettingOrderByWithRelationInput | GlobalSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GlobalSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlobalSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlobalSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GlobalSettings
    **/
    _count?: true | GlobalSettingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GlobalSettingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GlobalSettingMaxAggregateInputType
  }

  export type GetGlobalSettingAggregateType<T extends GlobalSettingAggregateArgs> = {
        [P in keyof T & keyof AggregateGlobalSetting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGlobalSetting[P]>
      : GetScalarType<T[P], AggregateGlobalSetting[P]>
  }




  export type GlobalSettingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GlobalSettingWhereInput
    orderBy?: GlobalSettingOrderByWithAggregationInput | GlobalSettingOrderByWithAggregationInput[]
    by: GlobalSettingScalarFieldEnum[] | GlobalSettingScalarFieldEnum
    having?: GlobalSettingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GlobalSettingCountAggregateInputType | true
    _min?: GlobalSettingMinAggregateInputType
    _max?: GlobalSettingMaxAggregateInputType
  }

  export type GlobalSettingGroupByOutputType = {
    id: string
    period1Start: string
    _count: GlobalSettingCountAggregateOutputType | null
    _min: GlobalSettingMinAggregateOutputType | null
    _max: GlobalSettingMaxAggregateOutputType | null
  }

  type GetGlobalSettingGroupByPayload<T extends GlobalSettingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GlobalSettingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GlobalSettingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GlobalSettingGroupByOutputType[P]>
            : GetScalarType<T[P], GlobalSettingGroupByOutputType[P]>
        }
      >
    >


  export type GlobalSettingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    period1Start?: boolean
  }, ExtArgs["result"]["globalSetting"]>



  export type GlobalSettingSelectScalar = {
    id?: boolean
    period1Start?: boolean
  }

  export type GlobalSettingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "period1Start", ExtArgs["result"]["globalSetting"]>

  export type $GlobalSettingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GlobalSetting"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      period1Start: string
    }, ExtArgs["result"]["globalSetting"]>
    composites: {}
  }

  type GlobalSettingGetPayload<S extends boolean | null | undefined | GlobalSettingDefaultArgs> = $Result.GetResult<Prisma.$GlobalSettingPayload, S>

  type GlobalSettingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GlobalSettingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GlobalSettingCountAggregateInputType | true
    }

  export interface GlobalSettingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GlobalSetting'], meta: { name: 'GlobalSetting' } }
    /**
     * Find zero or one GlobalSetting that matches the filter.
     * @param {GlobalSettingFindUniqueArgs} args - Arguments to find a GlobalSetting
     * @example
     * // Get one GlobalSetting
     * const globalSetting = await prisma.globalSetting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GlobalSettingFindUniqueArgs>(args: SelectSubset<T, GlobalSettingFindUniqueArgs<ExtArgs>>): Prisma__GlobalSettingClient<$Result.GetResult<Prisma.$GlobalSettingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GlobalSetting that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GlobalSettingFindUniqueOrThrowArgs} args - Arguments to find a GlobalSetting
     * @example
     * // Get one GlobalSetting
     * const globalSetting = await prisma.globalSetting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GlobalSettingFindUniqueOrThrowArgs>(args: SelectSubset<T, GlobalSettingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GlobalSettingClient<$Result.GetResult<Prisma.$GlobalSettingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GlobalSetting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalSettingFindFirstArgs} args - Arguments to find a GlobalSetting
     * @example
     * // Get one GlobalSetting
     * const globalSetting = await prisma.globalSetting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GlobalSettingFindFirstArgs>(args?: SelectSubset<T, GlobalSettingFindFirstArgs<ExtArgs>>): Prisma__GlobalSettingClient<$Result.GetResult<Prisma.$GlobalSettingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GlobalSetting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalSettingFindFirstOrThrowArgs} args - Arguments to find a GlobalSetting
     * @example
     * // Get one GlobalSetting
     * const globalSetting = await prisma.globalSetting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GlobalSettingFindFirstOrThrowArgs>(args?: SelectSubset<T, GlobalSettingFindFirstOrThrowArgs<ExtArgs>>): Prisma__GlobalSettingClient<$Result.GetResult<Prisma.$GlobalSettingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GlobalSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalSettingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GlobalSettings
     * const globalSettings = await prisma.globalSetting.findMany()
     * 
     * // Get first 10 GlobalSettings
     * const globalSettings = await prisma.globalSetting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const globalSettingWithIdOnly = await prisma.globalSetting.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GlobalSettingFindManyArgs>(args?: SelectSubset<T, GlobalSettingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlobalSettingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GlobalSetting.
     * @param {GlobalSettingCreateArgs} args - Arguments to create a GlobalSetting.
     * @example
     * // Create one GlobalSetting
     * const GlobalSetting = await prisma.globalSetting.create({
     *   data: {
     *     // ... data to create a GlobalSetting
     *   }
     * })
     * 
     */
    create<T extends GlobalSettingCreateArgs>(args: SelectSubset<T, GlobalSettingCreateArgs<ExtArgs>>): Prisma__GlobalSettingClient<$Result.GetResult<Prisma.$GlobalSettingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GlobalSettings.
     * @param {GlobalSettingCreateManyArgs} args - Arguments to create many GlobalSettings.
     * @example
     * // Create many GlobalSettings
     * const globalSetting = await prisma.globalSetting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GlobalSettingCreateManyArgs>(args?: SelectSubset<T, GlobalSettingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GlobalSetting.
     * @param {GlobalSettingDeleteArgs} args - Arguments to delete one GlobalSetting.
     * @example
     * // Delete one GlobalSetting
     * const GlobalSetting = await prisma.globalSetting.delete({
     *   where: {
     *     // ... filter to delete one GlobalSetting
     *   }
     * })
     * 
     */
    delete<T extends GlobalSettingDeleteArgs>(args: SelectSubset<T, GlobalSettingDeleteArgs<ExtArgs>>): Prisma__GlobalSettingClient<$Result.GetResult<Prisma.$GlobalSettingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GlobalSetting.
     * @param {GlobalSettingUpdateArgs} args - Arguments to update one GlobalSetting.
     * @example
     * // Update one GlobalSetting
     * const globalSetting = await prisma.globalSetting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GlobalSettingUpdateArgs>(args: SelectSubset<T, GlobalSettingUpdateArgs<ExtArgs>>): Prisma__GlobalSettingClient<$Result.GetResult<Prisma.$GlobalSettingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GlobalSettings.
     * @param {GlobalSettingDeleteManyArgs} args - Arguments to filter GlobalSettings to delete.
     * @example
     * // Delete a few GlobalSettings
     * const { count } = await prisma.globalSetting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GlobalSettingDeleteManyArgs>(args?: SelectSubset<T, GlobalSettingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GlobalSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalSettingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GlobalSettings
     * const globalSetting = await prisma.globalSetting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GlobalSettingUpdateManyArgs>(args: SelectSubset<T, GlobalSettingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GlobalSetting.
     * @param {GlobalSettingUpsertArgs} args - Arguments to update or create a GlobalSetting.
     * @example
     * // Update or create a GlobalSetting
     * const globalSetting = await prisma.globalSetting.upsert({
     *   create: {
     *     // ... data to create a GlobalSetting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GlobalSetting we want to update
     *   }
     * })
     */
    upsert<T extends GlobalSettingUpsertArgs>(args: SelectSubset<T, GlobalSettingUpsertArgs<ExtArgs>>): Prisma__GlobalSettingClient<$Result.GetResult<Prisma.$GlobalSettingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GlobalSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalSettingCountArgs} args - Arguments to filter GlobalSettings to count.
     * @example
     * // Count the number of GlobalSettings
     * const count = await prisma.globalSetting.count({
     *   where: {
     *     // ... the filter for the GlobalSettings we want to count
     *   }
     * })
    **/
    count<T extends GlobalSettingCountArgs>(
      args?: Subset<T, GlobalSettingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GlobalSettingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GlobalSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalSettingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GlobalSettingAggregateArgs>(args: Subset<T, GlobalSettingAggregateArgs>): Prisma.PrismaPromise<GetGlobalSettingAggregateType<T>>

    /**
     * Group by GlobalSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalSettingGroupByArgs} args - Group by arguments.
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
      T extends GlobalSettingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GlobalSettingGroupByArgs['orderBy'] }
        : { orderBy?: GlobalSettingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GlobalSettingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGlobalSettingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GlobalSetting model
   */
  readonly fields: GlobalSettingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GlobalSetting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GlobalSettingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GlobalSetting model
   */
  interface GlobalSettingFieldRefs {
    readonly id: FieldRef<"GlobalSetting", 'String'>
    readonly period1Start: FieldRef<"GlobalSetting", 'String'>
  }
    

  // Custom InputTypes
  /**
   * GlobalSetting findUnique
   */
  export type GlobalSettingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalSetting
     */
    select?: GlobalSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalSetting
     */
    omit?: GlobalSettingOmit<ExtArgs> | null
    /**
     * Filter, which GlobalSetting to fetch.
     */
    where: GlobalSettingWhereUniqueInput
  }

  /**
   * GlobalSetting findUniqueOrThrow
   */
  export type GlobalSettingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalSetting
     */
    select?: GlobalSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalSetting
     */
    omit?: GlobalSettingOmit<ExtArgs> | null
    /**
     * Filter, which GlobalSetting to fetch.
     */
    where: GlobalSettingWhereUniqueInput
  }

  /**
   * GlobalSetting findFirst
   */
  export type GlobalSettingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalSetting
     */
    select?: GlobalSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalSetting
     */
    omit?: GlobalSettingOmit<ExtArgs> | null
    /**
     * Filter, which GlobalSetting to fetch.
     */
    where?: GlobalSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlobalSettings to fetch.
     */
    orderBy?: GlobalSettingOrderByWithRelationInput | GlobalSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GlobalSettings.
     */
    cursor?: GlobalSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlobalSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlobalSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GlobalSettings.
     */
    distinct?: GlobalSettingScalarFieldEnum | GlobalSettingScalarFieldEnum[]
  }

  /**
   * GlobalSetting findFirstOrThrow
   */
  export type GlobalSettingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalSetting
     */
    select?: GlobalSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalSetting
     */
    omit?: GlobalSettingOmit<ExtArgs> | null
    /**
     * Filter, which GlobalSetting to fetch.
     */
    where?: GlobalSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlobalSettings to fetch.
     */
    orderBy?: GlobalSettingOrderByWithRelationInput | GlobalSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GlobalSettings.
     */
    cursor?: GlobalSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlobalSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlobalSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GlobalSettings.
     */
    distinct?: GlobalSettingScalarFieldEnum | GlobalSettingScalarFieldEnum[]
  }

  /**
   * GlobalSetting findMany
   */
  export type GlobalSettingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalSetting
     */
    select?: GlobalSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalSetting
     */
    omit?: GlobalSettingOmit<ExtArgs> | null
    /**
     * Filter, which GlobalSettings to fetch.
     */
    where?: GlobalSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlobalSettings to fetch.
     */
    orderBy?: GlobalSettingOrderByWithRelationInput | GlobalSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GlobalSettings.
     */
    cursor?: GlobalSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlobalSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlobalSettings.
     */
    skip?: number
    distinct?: GlobalSettingScalarFieldEnum | GlobalSettingScalarFieldEnum[]
  }

  /**
   * GlobalSetting create
   */
  export type GlobalSettingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalSetting
     */
    select?: GlobalSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalSetting
     */
    omit?: GlobalSettingOmit<ExtArgs> | null
    /**
     * The data needed to create a GlobalSetting.
     */
    data?: XOR<GlobalSettingCreateInput, GlobalSettingUncheckedCreateInput>
  }

  /**
   * GlobalSetting createMany
   */
  export type GlobalSettingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GlobalSettings.
     */
    data: GlobalSettingCreateManyInput | GlobalSettingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GlobalSetting update
   */
  export type GlobalSettingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalSetting
     */
    select?: GlobalSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalSetting
     */
    omit?: GlobalSettingOmit<ExtArgs> | null
    /**
     * The data needed to update a GlobalSetting.
     */
    data: XOR<GlobalSettingUpdateInput, GlobalSettingUncheckedUpdateInput>
    /**
     * Choose, which GlobalSetting to update.
     */
    where: GlobalSettingWhereUniqueInput
  }

  /**
   * GlobalSetting updateMany
   */
  export type GlobalSettingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GlobalSettings.
     */
    data: XOR<GlobalSettingUpdateManyMutationInput, GlobalSettingUncheckedUpdateManyInput>
    /**
     * Filter which GlobalSettings to update
     */
    where?: GlobalSettingWhereInput
    /**
     * Limit how many GlobalSettings to update.
     */
    limit?: number
  }

  /**
   * GlobalSetting upsert
   */
  export type GlobalSettingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalSetting
     */
    select?: GlobalSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalSetting
     */
    omit?: GlobalSettingOmit<ExtArgs> | null
    /**
     * The filter to search for the GlobalSetting to update in case it exists.
     */
    where: GlobalSettingWhereUniqueInput
    /**
     * In case the GlobalSetting found by the `where` argument doesn't exist, create a new GlobalSetting with this data.
     */
    create: XOR<GlobalSettingCreateInput, GlobalSettingUncheckedCreateInput>
    /**
     * In case the GlobalSetting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GlobalSettingUpdateInput, GlobalSettingUncheckedUpdateInput>
  }

  /**
   * GlobalSetting delete
   */
  export type GlobalSettingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalSetting
     */
    select?: GlobalSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalSetting
     */
    omit?: GlobalSettingOmit<ExtArgs> | null
    /**
     * Filter which GlobalSetting to delete.
     */
    where: GlobalSettingWhereUniqueInput
  }

  /**
   * GlobalSetting deleteMany
   */
  export type GlobalSettingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GlobalSettings to delete
     */
    where?: GlobalSettingWhereInput
    /**
     * Limit how many GlobalSettings to delete.
     */
    limit?: number
  }

  /**
   * GlobalSetting without action
   */
  export type GlobalSettingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalSetting
     */
    select?: GlobalSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalSetting
     */
    omit?: GlobalSettingOmit<ExtArgs> | null
  }


  /**
   * Model SchoolTiming
   */

  export type AggregateSchoolTiming = {
    _count: SchoolTimingCountAggregateOutputType | null
    _min: SchoolTimingMinAggregateOutputType | null
    _max: SchoolTimingMaxAggregateOutputType | null
  }

  export type SchoolTimingMinAggregateOutputType = {
    id: string | null
    schoolId: string | null
    period2Start: string | null
    period3Start: string | null
  }

  export type SchoolTimingMaxAggregateOutputType = {
    id: string | null
    schoolId: string | null
    period2Start: string | null
    period3Start: string | null
  }

  export type SchoolTimingCountAggregateOutputType = {
    id: number
    schoolId: number
    period2Start: number
    period3Start: number
    _all: number
  }


  export type SchoolTimingMinAggregateInputType = {
    id?: true
    schoolId?: true
    period2Start?: true
    period3Start?: true
  }

  export type SchoolTimingMaxAggregateInputType = {
    id?: true
    schoolId?: true
    period2Start?: true
    period3Start?: true
  }

  export type SchoolTimingCountAggregateInputType = {
    id?: true
    schoolId?: true
    period2Start?: true
    period3Start?: true
    _all?: true
  }

  export type SchoolTimingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SchoolTiming to aggregate.
     */
    where?: SchoolTimingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SchoolTimings to fetch.
     */
    orderBy?: SchoolTimingOrderByWithRelationInput | SchoolTimingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SchoolTimingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SchoolTimings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SchoolTimings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SchoolTimings
    **/
    _count?: true | SchoolTimingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SchoolTimingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SchoolTimingMaxAggregateInputType
  }

  export type GetSchoolTimingAggregateType<T extends SchoolTimingAggregateArgs> = {
        [P in keyof T & keyof AggregateSchoolTiming]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchoolTiming[P]>
      : GetScalarType<T[P], AggregateSchoolTiming[P]>
  }




  export type SchoolTimingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SchoolTimingWhereInput
    orderBy?: SchoolTimingOrderByWithAggregationInput | SchoolTimingOrderByWithAggregationInput[]
    by: SchoolTimingScalarFieldEnum[] | SchoolTimingScalarFieldEnum
    having?: SchoolTimingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SchoolTimingCountAggregateInputType | true
    _min?: SchoolTimingMinAggregateInputType
    _max?: SchoolTimingMaxAggregateInputType
  }

  export type SchoolTimingGroupByOutputType = {
    id: string
    schoolId: string
    period2Start: string
    period3Start: string
    _count: SchoolTimingCountAggregateOutputType | null
    _min: SchoolTimingMinAggregateOutputType | null
    _max: SchoolTimingMaxAggregateOutputType | null
  }

  type GetSchoolTimingGroupByPayload<T extends SchoolTimingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SchoolTimingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SchoolTimingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SchoolTimingGroupByOutputType[P]>
            : GetScalarType<T[P], SchoolTimingGroupByOutputType[P]>
        }
      >
    >


  export type SchoolTimingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolId?: boolean
    period2Start?: boolean
    period3Start?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schoolTiming"]>



  export type SchoolTimingSelectScalar = {
    id?: boolean
    schoolId?: boolean
    period2Start?: boolean
    period3Start?: boolean
  }

  export type SchoolTimingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "schoolId" | "period2Start" | "period3Start", ExtArgs["result"]["schoolTiming"]>
  export type SchoolTimingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }

  export type $SchoolTimingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SchoolTiming"
    objects: {
      school: Prisma.$SchoolPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      schoolId: string
      period2Start: string
      period3Start: string
    }, ExtArgs["result"]["schoolTiming"]>
    composites: {}
  }

  type SchoolTimingGetPayload<S extends boolean | null | undefined | SchoolTimingDefaultArgs> = $Result.GetResult<Prisma.$SchoolTimingPayload, S>

  type SchoolTimingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SchoolTimingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SchoolTimingCountAggregateInputType | true
    }

  export interface SchoolTimingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SchoolTiming'], meta: { name: 'SchoolTiming' } }
    /**
     * Find zero or one SchoolTiming that matches the filter.
     * @param {SchoolTimingFindUniqueArgs} args - Arguments to find a SchoolTiming
     * @example
     * // Get one SchoolTiming
     * const schoolTiming = await prisma.schoolTiming.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SchoolTimingFindUniqueArgs>(args: SelectSubset<T, SchoolTimingFindUniqueArgs<ExtArgs>>): Prisma__SchoolTimingClient<$Result.GetResult<Prisma.$SchoolTimingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SchoolTiming that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SchoolTimingFindUniqueOrThrowArgs} args - Arguments to find a SchoolTiming
     * @example
     * // Get one SchoolTiming
     * const schoolTiming = await prisma.schoolTiming.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SchoolTimingFindUniqueOrThrowArgs>(args: SelectSubset<T, SchoolTimingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SchoolTimingClient<$Result.GetResult<Prisma.$SchoolTimingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SchoolTiming that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolTimingFindFirstArgs} args - Arguments to find a SchoolTiming
     * @example
     * // Get one SchoolTiming
     * const schoolTiming = await prisma.schoolTiming.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SchoolTimingFindFirstArgs>(args?: SelectSubset<T, SchoolTimingFindFirstArgs<ExtArgs>>): Prisma__SchoolTimingClient<$Result.GetResult<Prisma.$SchoolTimingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SchoolTiming that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolTimingFindFirstOrThrowArgs} args - Arguments to find a SchoolTiming
     * @example
     * // Get one SchoolTiming
     * const schoolTiming = await prisma.schoolTiming.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SchoolTimingFindFirstOrThrowArgs>(args?: SelectSubset<T, SchoolTimingFindFirstOrThrowArgs<ExtArgs>>): Prisma__SchoolTimingClient<$Result.GetResult<Prisma.$SchoolTimingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SchoolTimings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolTimingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SchoolTimings
     * const schoolTimings = await prisma.schoolTiming.findMany()
     * 
     * // Get first 10 SchoolTimings
     * const schoolTimings = await prisma.schoolTiming.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const schoolTimingWithIdOnly = await prisma.schoolTiming.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SchoolTimingFindManyArgs>(args?: SelectSubset<T, SchoolTimingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolTimingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SchoolTiming.
     * @param {SchoolTimingCreateArgs} args - Arguments to create a SchoolTiming.
     * @example
     * // Create one SchoolTiming
     * const SchoolTiming = await prisma.schoolTiming.create({
     *   data: {
     *     // ... data to create a SchoolTiming
     *   }
     * })
     * 
     */
    create<T extends SchoolTimingCreateArgs>(args: SelectSubset<T, SchoolTimingCreateArgs<ExtArgs>>): Prisma__SchoolTimingClient<$Result.GetResult<Prisma.$SchoolTimingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SchoolTimings.
     * @param {SchoolTimingCreateManyArgs} args - Arguments to create many SchoolTimings.
     * @example
     * // Create many SchoolTimings
     * const schoolTiming = await prisma.schoolTiming.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SchoolTimingCreateManyArgs>(args?: SelectSubset<T, SchoolTimingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SchoolTiming.
     * @param {SchoolTimingDeleteArgs} args - Arguments to delete one SchoolTiming.
     * @example
     * // Delete one SchoolTiming
     * const SchoolTiming = await prisma.schoolTiming.delete({
     *   where: {
     *     // ... filter to delete one SchoolTiming
     *   }
     * })
     * 
     */
    delete<T extends SchoolTimingDeleteArgs>(args: SelectSubset<T, SchoolTimingDeleteArgs<ExtArgs>>): Prisma__SchoolTimingClient<$Result.GetResult<Prisma.$SchoolTimingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SchoolTiming.
     * @param {SchoolTimingUpdateArgs} args - Arguments to update one SchoolTiming.
     * @example
     * // Update one SchoolTiming
     * const schoolTiming = await prisma.schoolTiming.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SchoolTimingUpdateArgs>(args: SelectSubset<T, SchoolTimingUpdateArgs<ExtArgs>>): Prisma__SchoolTimingClient<$Result.GetResult<Prisma.$SchoolTimingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SchoolTimings.
     * @param {SchoolTimingDeleteManyArgs} args - Arguments to filter SchoolTimings to delete.
     * @example
     * // Delete a few SchoolTimings
     * const { count } = await prisma.schoolTiming.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SchoolTimingDeleteManyArgs>(args?: SelectSubset<T, SchoolTimingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SchoolTimings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolTimingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SchoolTimings
     * const schoolTiming = await prisma.schoolTiming.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SchoolTimingUpdateManyArgs>(args: SelectSubset<T, SchoolTimingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SchoolTiming.
     * @param {SchoolTimingUpsertArgs} args - Arguments to update or create a SchoolTiming.
     * @example
     * // Update or create a SchoolTiming
     * const schoolTiming = await prisma.schoolTiming.upsert({
     *   create: {
     *     // ... data to create a SchoolTiming
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SchoolTiming we want to update
     *   }
     * })
     */
    upsert<T extends SchoolTimingUpsertArgs>(args: SelectSubset<T, SchoolTimingUpsertArgs<ExtArgs>>): Prisma__SchoolTimingClient<$Result.GetResult<Prisma.$SchoolTimingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SchoolTimings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolTimingCountArgs} args - Arguments to filter SchoolTimings to count.
     * @example
     * // Count the number of SchoolTimings
     * const count = await prisma.schoolTiming.count({
     *   where: {
     *     // ... the filter for the SchoolTimings we want to count
     *   }
     * })
    **/
    count<T extends SchoolTimingCountArgs>(
      args?: Subset<T, SchoolTimingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SchoolTimingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SchoolTiming.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolTimingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SchoolTimingAggregateArgs>(args: Subset<T, SchoolTimingAggregateArgs>): Prisma.PrismaPromise<GetSchoolTimingAggregateType<T>>

    /**
     * Group by SchoolTiming.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolTimingGroupByArgs} args - Group by arguments.
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
      T extends SchoolTimingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SchoolTimingGroupByArgs['orderBy'] }
        : { orderBy?: SchoolTimingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SchoolTimingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSchoolTimingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SchoolTiming model
   */
  readonly fields: SchoolTimingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SchoolTiming.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SchoolTimingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    school<T extends SchoolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SchoolDefaultArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SchoolTiming model
   */
  interface SchoolTimingFieldRefs {
    readonly id: FieldRef<"SchoolTiming", 'String'>
    readonly schoolId: FieldRef<"SchoolTiming", 'String'>
    readonly period2Start: FieldRef<"SchoolTiming", 'String'>
    readonly period3Start: FieldRef<"SchoolTiming", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SchoolTiming findUnique
   */
  export type SchoolTimingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolTiming
     */
    select?: SchoolTimingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolTiming
     */
    omit?: SchoolTimingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolTimingInclude<ExtArgs> | null
    /**
     * Filter, which SchoolTiming to fetch.
     */
    where: SchoolTimingWhereUniqueInput
  }

  /**
   * SchoolTiming findUniqueOrThrow
   */
  export type SchoolTimingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolTiming
     */
    select?: SchoolTimingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolTiming
     */
    omit?: SchoolTimingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolTimingInclude<ExtArgs> | null
    /**
     * Filter, which SchoolTiming to fetch.
     */
    where: SchoolTimingWhereUniqueInput
  }

  /**
   * SchoolTiming findFirst
   */
  export type SchoolTimingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolTiming
     */
    select?: SchoolTimingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolTiming
     */
    omit?: SchoolTimingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolTimingInclude<ExtArgs> | null
    /**
     * Filter, which SchoolTiming to fetch.
     */
    where?: SchoolTimingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SchoolTimings to fetch.
     */
    orderBy?: SchoolTimingOrderByWithRelationInput | SchoolTimingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SchoolTimings.
     */
    cursor?: SchoolTimingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SchoolTimings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SchoolTimings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SchoolTimings.
     */
    distinct?: SchoolTimingScalarFieldEnum | SchoolTimingScalarFieldEnum[]
  }

  /**
   * SchoolTiming findFirstOrThrow
   */
  export type SchoolTimingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolTiming
     */
    select?: SchoolTimingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolTiming
     */
    omit?: SchoolTimingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolTimingInclude<ExtArgs> | null
    /**
     * Filter, which SchoolTiming to fetch.
     */
    where?: SchoolTimingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SchoolTimings to fetch.
     */
    orderBy?: SchoolTimingOrderByWithRelationInput | SchoolTimingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SchoolTimings.
     */
    cursor?: SchoolTimingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SchoolTimings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SchoolTimings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SchoolTimings.
     */
    distinct?: SchoolTimingScalarFieldEnum | SchoolTimingScalarFieldEnum[]
  }

  /**
   * SchoolTiming findMany
   */
  export type SchoolTimingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolTiming
     */
    select?: SchoolTimingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolTiming
     */
    omit?: SchoolTimingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolTimingInclude<ExtArgs> | null
    /**
     * Filter, which SchoolTimings to fetch.
     */
    where?: SchoolTimingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SchoolTimings to fetch.
     */
    orderBy?: SchoolTimingOrderByWithRelationInput | SchoolTimingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SchoolTimings.
     */
    cursor?: SchoolTimingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SchoolTimings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SchoolTimings.
     */
    skip?: number
    distinct?: SchoolTimingScalarFieldEnum | SchoolTimingScalarFieldEnum[]
  }

  /**
   * SchoolTiming create
   */
  export type SchoolTimingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolTiming
     */
    select?: SchoolTimingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolTiming
     */
    omit?: SchoolTimingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolTimingInclude<ExtArgs> | null
    /**
     * The data needed to create a SchoolTiming.
     */
    data: XOR<SchoolTimingCreateInput, SchoolTimingUncheckedCreateInput>
  }

  /**
   * SchoolTiming createMany
   */
  export type SchoolTimingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SchoolTimings.
     */
    data: SchoolTimingCreateManyInput | SchoolTimingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SchoolTiming update
   */
  export type SchoolTimingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolTiming
     */
    select?: SchoolTimingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolTiming
     */
    omit?: SchoolTimingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolTimingInclude<ExtArgs> | null
    /**
     * The data needed to update a SchoolTiming.
     */
    data: XOR<SchoolTimingUpdateInput, SchoolTimingUncheckedUpdateInput>
    /**
     * Choose, which SchoolTiming to update.
     */
    where: SchoolTimingWhereUniqueInput
  }

  /**
   * SchoolTiming updateMany
   */
  export type SchoolTimingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SchoolTimings.
     */
    data: XOR<SchoolTimingUpdateManyMutationInput, SchoolTimingUncheckedUpdateManyInput>
    /**
     * Filter which SchoolTimings to update
     */
    where?: SchoolTimingWhereInput
    /**
     * Limit how many SchoolTimings to update.
     */
    limit?: number
  }

  /**
   * SchoolTiming upsert
   */
  export type SchoolTimingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolTiming
     */
    select?: SchoolTimingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolTiming
     */
    omit?: SchoolTimingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolTimingInclude<ExtArgs> | null
    /**
     * The filter to search for the SchoolTiming to update in case it exists.
     */
    where: SchoolTimingWhereUniqueInput
    /**
     * In case the SchoolTiming found by the `where` argument doesn't exist, create a new SchoolTiming with this data.
     */
    create: XOR<SchoolTimingCreateInput, SchoolTimingUncheckedCreateInput>
    /**
     * In case the SchoolTiming was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SchoolTimingUpdateInput, SchoolTimingUncheckedUpdateInput>
  }

  /**
   * SchoolTiming delete
   */
  export type SchoolTimingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolTiming
     */
    select?: SchoolTimingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolTiming
     */
    omit?: SchoolTimingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolTimingInclude<ExtArgs> | null
    /**
     * Filter which SchoolTiming to delete.
     */
    where: SchoolTimingWhereUniqueInput
  }

  /**
   * SchoolTiming deleteMany
   */
  export type SchoolTimingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SchoolTimings to delete
     */
    where?: SchoolTimingWhereInput
    /**
     * Limit how many SchoolTimings to delete.
     */
    limit?: number
  }

  /**
   * SchoolTiming without action
   */
  export type SchoolTimingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolTiming
     */
    select?: SchoolTimingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolTiming
     */
    omit?: SchoolTimingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolTimingInclude<ExtArgs> | null
  }


  /**
   * Model ScheduleSession
   */

  export type AggregateScheduleSession = {
    _count: ScheduleSessionCountAggregateOutputType | null
    _avg: ScheduleSessionAvgAggregateOutputType | null
    _sum: ScheduleSessionSumAggregateOutputType | null
    _min: ScheduleSessionMinAggregateOutputType | null
    _max: ScheduleSessionMaxAggregateOutputType | null
  }

  export type ScheduleSessionAvgAggregateOutputType = {
    dayIndex: number | null
    periodIndex: number | null
  }

  export type ScheduleSessionSumAggregateOutputType = {
    dayIndex: number | null
    periodIndex: number | null
  }

  export type ScheduleSessionMinAggregateOutputType = {
    id: string | null
    weekStart: string | null
    dayIndex: number | null
    periodIndex: number | null
    schoolId: string | null
    teacherId: string | null
    taId: string | null
    note: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ScheduleSessionMaxAggregateOutputType = {
    id: string | null
    weekStart: string | null
    dayIndex: number | null
    periodIndex: number | null
    schoolId: string | null
    teacherId: string | null
    taId: string | null
    note: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ScheduleSessionCountAggregateOutputType = {
    id: number
    weekStart: number
    dayIndex: number
    periodIndex: number
    schoolId: number
    teacherId: number
    taId: number
    note: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ScheduleSessionAvgAggregateInputType = {
    dayIndex?: true
    periodIndex?: true
  }

  export type ScheduleSessionSumAggregateInputType = {
    dayIndex?: true
    periodIndex?: true
  }

  export type ScheduleSessionMinAggregateInputType = {
    id?: true
    weekStart?: true
    dayIndex?: true
    periodIndex?: true
    schoolId?: true
    teacherId?: true
    taId?: true
    note?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ScheduleSessionMaxAggregateInputType = {
    id?: true
    weekStart?: true
    dayIndex?: true
    periodIndex?: true
    schoolId?: true
    teacherId?: true
    taId?: true
    note?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ScheduleSessionCountAggregateInputType = {
    id?: true
    weekStart?: true
    dayIndex?: true
    periodIndex?: true
    schoolId?: true
    teacherId?: true
    taId?: true
    note?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ScheduleSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScheduleSession to aggregate.
     */
    where?: ScheduleSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduleSessions to fetch.
     */
    orderBy?: ScheduleSessionOrderByWithRelationInput | ScheduleSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScheduleSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduleSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduleSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ScheduleSessions
    **/
    _count?: true | ScheduleSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScheduleSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScheduleSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScheduleSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScheduleSessionMaxAggregateInputType
  }

  export type GetScheduleSessionAggregateType<T extends ScheduleSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateScheduleSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScheduleSession[P]>
      : GetScalarType<T[P], AggregateScheduleSession[P]>
  }




  export type ScheduleSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleSessionWhereInput
    orderBy?: ScheduleSessionOrderByWithAggregationInput | ScheduleSessionOrderByWithAggregationInput[]
    by: ScheduleSessionScalarFieldEnum[] | ScheduleSessionScalarFieldEnum
    having?: ScheduleSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScheduleSessionCountAggregateInputType | true
    _avg?: ScheduleSessionAvgAggregateInputType
    _sum?: ScheduleSessionSumAggregateInputType
    _min?: ScheduleSessionMinAggregateInputType
    _max?: ScheduleSessionMaxAggregateInputType
  }

  export type ScheduleSessionGroupByOutputType = {
    id: string
    weekStart: string
    dayIndex: number
    periodIndex: number
    schoolId: string
    teacherId: string | null
    taId: string | null
    note: string | null
    createdAt: Date
    updatedAt: Date
    _count: ScheduleSessionCountAggregateOutputType | null
    _avg: ScheduleSessionAvgAggregateOutputType | null
    _sum: ScheduleSessionSumAggregateOutputType | null
    _min: ScheduleSessionMinAggregateOutputType | null
    _max: ScheduleSessionMaxAggregateOutputType | null
  }

  type GetScheduleSessionGroupByPayload<T extends ScheduleSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScheduleSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScheduleSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScheduleSessionGroupByOutputType[P]>
            : GetScalarType<T[P], ScheduleSessionGroupByOutputType[P]>
        }
      >
    >


  export type ScheduleSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    weekStart?: boolean
    dayIndex?: boolean
    periodIndex?: boolean
    schoolId?: boolean
    teacherId?: boolean
    taId?: boolean
    note?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    teacher?: boolean | ScheduleSession$teacherArgs<ExtArgs>
    ta?: boolean | ScheduleSession$taArgs<ExtArgs>
  }, ExtArgs["result"]["scheduleSession"]>



  export type ScheduleSessionSelectScalar = {
    id?: boolean
    weekStart?: boolean
    dayIndex?: boolean
    periodIndex?: boolean
    schoolId?: boolean
    teacherId?: boolean
    taId?: boolean
    note?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ScheduleSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "weekStart" | "dayIndex" | "periodIndex" | "schoolId" | "teacherId" | "taId" | "note" | "createdAt" | "updatedAt", ExtArgs["result"]["scheduleSession"]>
  export type ScheduleSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    teacher?: boolean | ScheduleSession$teacherArgs<ExtArgs>
    ta?: boolean | ScheduleSession$taArgs<ExtArgs>
  }

  export type $ScheduleSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ScheduleSession"
    objects: {
      school: Prisma.$SchoolPayload<ExtArgs>
      teacher: Prisma.$TeacherPayload<ExtArgs> | null
      ta: Prisma.$TeachingAssistantPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      weekStart: string
      dayIndex: number
      periodIndex: number
      schoolId: string
      teacherId: string | null
      taId: string | null
      note: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["scheduleSession"]>
    composites: {}
  }

  type ScheduleSessionGetPayload<S extends boolean | null | undefined | ScheduleSessionDefaultArgs> = $Result.GetResult<Prisma.$ScheduleSessionPayload, S>

  type ScheduleSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScheduleSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScheduleSessionCountAggregateInputType | true
    }

  export interface ScheduleSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ScheduleSession'], meta: { name: 'ScheduleSession' } }
    /**
     * Find zero or one ScheduleSession that matches the filter.
     * @param {ScheduleSessionFindUniqueArgs} args - Arguments to find a ScheduleSession
     * @example
     * // Get one ScheduleSession
     * const scheduleSession = await prisma.scheduleSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScheduleSessionFindUniqueArgs>(args: SelectSubset<T, ScheduleSessionFindUniqueArgs<ExtArgs>>): Prisma__ScheduleSessionClient<$Result.GetResult<Prisma.$ScheduleSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ScheduleSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScheduleSessionFindUniqueOrThrowArgs} args - Arguments to find a ScheduleSession
     * @example
     * // Get one ScheduleSession
     * const scheduleSession = await prisma.scheduleSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScheduleSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, ScheduleSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScheduleSessionClient<$Result.GetResult<Prisma.$ScheduleSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScheduleSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleSessionFindFirstArgs} args - Arguments to find a ScheduleSession
     * @example
     * // Get one ScheduleSession
     * const scheduleSession = await prisma.scheduleSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScheduleSessionFindFirstArgs>(args?: SelectSubset<T, ScheduleSessionFindFirstArgs<ExtArgs>>): Prisma__ScheduleSessionClient<$Result.GetResult<Prisma.$ScheduleSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScheduleSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleSessionFindFirstOrThrowArgs} args - Arguments to find a ScheduleSession
     * @example
     * // Get one ScheduleSession
     * const scheduleSession = await prisma.scheduleSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScheduleSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, ScheduleSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScheduleSessionClient<$Result.GetResult<Prisma.$ScheduleSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ScheduleSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ScheduleSessions
     * const scheduleSessions = await prisma.scheduleSession.findMany()
     * 
     * // Get first 10 ScheduleSessions
     * const scheduleSessions = await prisma.scheduleSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scheduleSessionWithIdOnly = await prisma.scheduleSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScheduleSessionFindManyArgs>(args?: SelectSubset<T, ScheduleSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduleSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ScheduleSession.
     * @param {ScheduleSessionCreateArgs} args - Arguments to create a ScheduleSession.
     * @example
     * // Create one ScheduleSession
     * const ScheduleSession = await prisma.scheduleSession.create({
     *   data: {
     *     // ... data to create a ScheduleSession
     *   }
     * })
     * 
     */
    create<T extends ScheduleSessionCreateArgs>(args: SelectSubset<T, ScheduleSessionCreateArgs<ExtArgs>>): Prisma__ScheduleSessionClient<$Result.GetResult<Prisma.$ScheduleSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ScheduleSessions.
     * @param {ScheduleSessionCreateManyArgs} args - Arguments to create many ScheduleSessions.
     * @example
     * // Create many ScheduleSessions
     * const scheduleSession = await prisma.scheduleSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScheduleSessionCreateManyArgs>(args?: SelectSubset<T, ScheduleSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ScheduleSession.
     * @param {ScheduleSessionDeleteArgs} args - Arguments to delete one ScheduleSession.
     * @example
     * // Delete one ScheduleSession
     * const ScheduleSession = await prisma.scheduleSession.delete({
     *   where: {
     *     // ... filter to delete one ScheduleSession
     *   }
     * })
     * 
     */
    delete<T extends ScheduleSessionDeleteArgs>(args: SelectSubset<T, ScheduleSessionDeleteArgs<ExtArgs>>): Prisma__ScheduleSessionClient<$Result.GetResult<Prisma.$ScheduleSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ScheduleSession.
     * @param {ScheduleSessionUpdateArgs} args - Arguments to update one ScheduleSession.
     * @example
     * // Update one ScheduleSession
     * const scheduleSession = await prisma.scheduleSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScheduleSessionUpdateArgs>(args: SelectSubset<T, ScheduleSessionUpdateArgs<ExtArgs>>): Prisma__ScheduleSessionClient<$Result.GetResult<Prisma.$ScheduleSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ScheduleSessions.
     * @param {ScheduleSessionDeleteManyArgs} args - Arguments to filter ScheduleSessions to delete.
     * @example
     * // Delete a few ScheduleSessions
     * const { count } = await prisma.scheduleSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScheduleSessionDeleteManyArgs>(args?: SelectSubset<T, ScheduleSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScheduleSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ScheduleSessions
     * const scheduleSession = await prisma.scheduleSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScheduleSessionUpdateManyArgs>(args: SelectSubset<T, ScheduleSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ScheduleSession.
     * @param {ScheduleSessionUpsertArgs} args - Arguments to update or create a ScheduleSession.
     * @example
     * // Update or create a ScheduleSession
     * const scheduleSession = await prisma.scheduleSession.upsert({
     *   create: {
     *     // ... data to create a ScheduleSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ScheduleSession we want to update
     *   }
     * })
     */
    upsert<T extends ScheduleSessionUpsertArgs>(args: SelectSubset<T, ScheduleSessionUpsertArgs<ExtArgs>>): Prisma__ScheduleSessionClient<$Result.GetResult<Prisma.$ScheduleSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ScheduleSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleSessionCountArgs} args - Arguments to filter ScheduleSessions to count.
     * @example
     * // Count the number of ScheduleSessions
     * const count = await prisma.scheduleSession.count({
     *   where: {
     *     // ... the filter for the ScheduleSessions we want to count
     *   }
     * })
    **/
    count<T extends ScheduleSessionCountArgs>(
      args?: Subset<T, ScheduleSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScheduleSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ScheduleSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ScheduleSessionAggregateArgs>(args: Subset<T, ScheduleSessionAggregateArgs>): Prisma.PrismaPromise<GetScheduleSessionAggregateType<T>>

    /**
     * Group by ScheduleSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleSessionGroupByArgs} args - Group by arguments.
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
      T extends ScheduleSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScheduleSessionGroupByArgs['orderBy'] }
        : { orderBy?: ScheduleSessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ScheduleSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScheduleSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ScheduleSession model
   */
  readonly fields: ScheduleSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ScheduleSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScheduleSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    school<T extends SchoolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SchoolDefaultArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    teacher<T extends ScheduleSession$teacherArgs<ExtArgs> = {}>(args?: Subset<T, ScheduleSession$teacherArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    ta<T extends ScheduleSession$taArgs<ExtArgs> = {}>(args?: Subset<T, ScheduleSession$taArgs<ExtArgs>>): Prisma__TeachingAssistantClient<$Result.GetResult<Prisma.$TeachingAssistantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ScheduleSession model
   */
  interface ScheduleSessionFieldRefs {
    readonly id: FieldRef<"ScheduleSession", 'String'>
    readonly weekStart: FieldRef<"ScheduleSession", 'String'>
    readonly dayIndex: FieldRef<"ScheduleSession", 'Int'>
    readonly periodIndex: FieldRef<"ScheduleSession", 'Int'>
    readonly schoolId: FieldRef<"ScheduleSession", 'String'>
    readonly teacherId: FieldRef<"ScheduleSession", 'String'>
    readonly taId: FieldRef<"ScheduleSession", 'String'>
    readonly note: FieldRef<"ScheduleSession", 'String'>
    readonly createdAt: FieldRef<"ScheduleSession", 'DateTime'>
    readonly updatedAt: FieldRef<"ScheduleSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ScheduleSession findUnique
   */
  export type ScheduleSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleSession
     */
    select?: ScheduleSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleSession
     */
    omit?: ScheduleSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleSessionInclude<ExtArgs> | null
    /**
     * Filter, which ScheduleSession to fetch.
     */
    where: ScheduleSessionWhereUniqueInput
  }

  /**
   * ScheduleSession findUniqueOrThrow
   */
  export type ScheduleSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleSession
     */
    select?: ScheduleSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleSession
     */
    omit?: ScheduleSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleSessionInclude<ExtArgs> | null
    /**
     * Filter, which ScheduleSession to fetch.
     */
    where: ScheduleSessionWhereUniqueInput
  }

  /**
   * ScheduleSession findFirst
   */
  export type ScheduleSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleSession
     */
    select?: ScheduleSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleSession
     */
    omit?: ScheduleSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleSessionInclude<ExtArgs> | null
    /**
     * Filter, which ScheduleSession to fetch.
     */
    where?: ScheduleSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduleSessions to fetch.
     */
    orderBy?: ScheduleSessionOrderByWithRelationInput | ScheduleSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScheduleSessions.
     */
    cursor?: ScheduleSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduleSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduleSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScheduleSessions.
     */
    distinct?: ScheduleSessionScalarFieldEnum | ScheduleSessionScalarFieldEnum[]
  }

  /**
   * ScheduleSession findFirstOrThrow
   */
  export type ScheduleSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleSession
     */
    select?: ScheduleSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleSession
     */
    omit?: ScheduleSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleSessionInclude<ExtArgs> | null
    /**
     * Filter, which ScheduleSession to fetch.
     */
    where?: ScheduleSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduleSessions to fetch.
     */
    orderBy?: ScheduleSessionOrderByWithRelationInput | ScheduleSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScheduleSessions.
     */
    cursor?: ScheduleSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduleSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduleSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScheduleSessions.
     */
    distinct?: ScheduleSessionScalarFieldEnum | ScheduleSessionScalarFieldEnum[]
  }

  /**
   * ScheduleSession findMany
   */
  export type ScheduleSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleSession
     */
    select?: ScheduleSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleSession
     */
    omit?: ScheduleSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleSessionInclude<ExtArgs> | null
    /**
     * Filter, which ScheduleSessions to fetch.
     */
    where?: ScheduleSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduleSessions to fetch.
     */
    orderBy?: ScheduleSessionOrderByWithRelationInput | ScheduleSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ScheduleSessions.
     */
    cursor?: ScheduleSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduleSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduleSessions.
     */
    skip?: number
    distinct?: ScheduleSessionScalarFieldEnum | ScheduleSessionScalarFieldEnum[]
  }

  /**
   * ScheduleSession create
   */
  export type ScheduleSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleSession
     */
    select?: ScheduleSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleSession
     */
    omit?: ScheduleSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a ScheduleSession.
     */
    data: XOR<ScheduleSessionCreateInput, ScheduleSessionUncheckedCreateInput>
  }

  /**
   * ScheduleSession createMany
   */
  export type ScheduleSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ScheduleSessions.
     */
    data: ScheduleSessionCreateManyInput | ScheduleSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ScheduleSession update
   */
  export type ScheduleSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleSession
     */
    select?: ScheduleSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleSession
     */
    omit?: ScheduleSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a ScheduleSession.
     */
    data: XOR<ScheduleSessionUpdateInput, ScheduleSessionUncheckedUpdateInput>
    /**
     * Choose, which ScheduleSession to update.
     */
    where: ScheduleSessionWhereUniqueInput
  }

  /**
   * ScheduleSession updateMany
   */
  export type ScheduleSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ScheduleSessions.
     */
    data: XOR<ScheduleSessionUpdateManyMutationInput, ScheduleSessionUncheckedUpdateManyInput>
    /**
     * Filter which ScheduleSessions to update
     */
    where?: ScheduleSessionWhereInput
    /**
     * Limit how many ScheduleSessions to update.
     */
    limit?: number
  }

  /**
   * ScheduleSession upsert
   */
  export type ScheduleSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleSession
     */
    select?: ScheduleSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleSession
     */
    omit?: ScheduleSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the ScheduleSession to update in case it exists.
     */
    where: ScheduleSessionWhereUniqueInput
    /**
     * In case the ScheduleSession found by the `where` argument doesn't exist, create a new ScheduleSession with this data.
     */
    create: XOR<ScheduleSessionCreateInput, ScheduleSessionUncheckedCreateInput>
    /**
     * In case the ScheduleSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScheduleSessionUpdateInput, ScheduleSessionUncheckedUpdateInput>
  }

  /**
   * ScheduleSession delete
   */
  export type ScheduleSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleSession
     */
    select?: ScheduleSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleSession
     */
    omit?: ScheduleSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleSessionInclude<ExtArgs> | null
    /**
     * Filter which ScheduleSession to delete.
     */
    where: ScheduleSessionWhereUniqueInput
  }

  /**
   * ScheduleSession deleteMany
   */
  export type ScheduleSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScheduleSessions to delete
     */
    where?: ScheduleSessionWhereInput
    /**
     * Limit how many ScheduleSessions to delete.
     */
    limit?: number
  }

  /**
   * ScheduleSession.teacher
   */
  export type ScheduleSession$teacherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    where?: TeacherWhereInput
  }

  /**
   * ScheduleSession.ta
   */
  export type ScheduleSession$taArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingAssistant
     */
    select?: TeachingAssistantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingAssistant
     */
    omit?: TeachingAssistantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingAssistantInclude<ExtArgs> | null
    where?: TeachingAssistantWhereInput
  }

  /**
   * ScheduleSession without action
   */
  export type ScheduleSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleSession
     */
    select?: ScheduleSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleSession
     */
    omit?: ScheduleSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleSessionInclude<ExtArgs> | null
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


  export const SchoolScalarFieldEnum: {
    id: 'id',
    name: 'name',
    color: 'color',
    bg: 'bg',
    order: 'order',
    createdAt: 'createdAt'
  };

  export type SchoolScalarFieldEnum = (typeof SchoolScalarFieldEnum)[keyof typeof SchoolScalarFieldEnum]


  export const TeacherScalarFieldEnum: {
    id: 'id',
    name: 'name',
    color: 'color',
    createdAt: 'createdAt'
  };

  export type TeacherScalarFieldEnum = (typeof TeacherScalarFieldEnum)[keyof typeof TeacherScalarFieldEnum]


  export const TeachingAssistantScalarFieldEnum: {
    id: 'id',
    name: 'name',
    color: 'color',
    createdAt: 'createdAt'
  };

  export type TeachingAssistantScalarFieldEnum = (typeof TeachingAssistantScalarFieldEnum)[keyof typeof TeachingAssistantScalarFieldEnum]


  export const GlobalSettingScalarFieldEnum: {
    id: 'id',
    period1Start: 'period1Start'
  };

  export type GlobalSettingScalarFieldEnum = (typeof GlobalSettingScalarFieldEnum)[keyof typeof GlobalSettingScalarFieldEnum]


  export const SchoolTimingScalarFieldEnum: {
    id: 'id',
    schoolId: 'schoolId',
    period2Start: 'period2Start',
    period3Start: 'period3Start'
  };

  export type SchoolTimingScalarFieldEnum = (typeof SchoolTimingScalarFieldEnum)[keyof typeof SchoolTimingScalarFieldEnum]


  export const ScheduleSessionScalarFieldEnum: {
    id: 'id',
    weekStart: 'weekStart',
    dayIndex: 'dayIndex',
    periodIndex: 'periodIndex',
    schoolId: 'schoolId',
    teacherId: 'teacherId',
    taId: 'taId',
    note: 'note',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ScheduleSessionScalarFieldEnum = (typeof ScheduleSessionScalarFieldEnum)[keyof typeof ScheduleSessionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const SchoolOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    color: 'color',
    bg: 'bg'
  };

  export type SchoolOrderByRelevanceFieldEnum = (typeof SchoolOrderByRelevanceFieldEnum)[keyof typeof SchoolOrderByRelevanceFieldEnum]


  export const TeacherOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    color: 'color'
  };

  export type TeacherOrderByRelevanceFieldEnum = (typeof TeacherOrderByRelevanceFieldEnum)[keyof typeof TeacherOrderByRelevanceFieldEnum]


  export const TeachingAssistantOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    color: 'color'
  };

  export type TeachingAssistantOrderByRelevanceFieldEnum = (typeof TeachingAssistantOrderByRelevanceFieldEnum)[keyof typeof TeachingAssistantOrderByRelevanceFieldEnum]


  export const GlobalSettingOrderByRelevanceFieldEnum: {
    id: 'id',
    period1Start: 'period1Start'
  };

  export type GlobalSettingOrderByRelevanceFieldEnum = (typeof GlobalSettingOrderByRelevanceFieldEnum)[keyof typeof GlobalSettingOrderByRelevanceFieldEnum]


  export const SchoolTimingOrderByRelevanceFieldEnum: {
    id: 'id',
    schoolId: 'schoolId',
    period2Start: 'period2Start',
    period3Start: 'period3Start'
  };

  export type SchoolTimingOrderByRelevanceFieldEnum = (typeof SchoolTimingOrderByRelevanceFieldEnum)[keyof typeof SchoolTimingOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const ScheduleSessionOrderByRelevanceFieldEnum: {
    id: 'id',
    weekStart: 'weekStart',
    schoolId: 'schoolId',
    teacherId: 'teacherId',
    taId: 'taId',
    note: 'note'
  };

  export type ScheduleSessionOrderByRelevanceFieldEnum = (typeof ScheduleSessionOrderByRelevanceFieldEnum)[keyof typeof ScheduleSessionOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type SchoolWhereInput = {
    AND?: SchoolWhereInput | SchoolWhereInput[]
    OR?: SchoolWhereInput[]
    NOT?: SchoolWhereInput | SchoolWhereInput[]
    id?: StringFilter<"School"> | string
    name?: StringFilter<"School"> | string
    color?: StringFilter<"School"> | string
    bg?: StringFilter<"School"> | string
    order?: IntFilter<"School"> | number
    createdAt?: DateTimeFilter<"School"> | Date | string
    timings?: SchoolTimingListRelationFilter
    sessions?: ScheduleSessionListRelationFilter
  }

  export type SchoolOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    bg?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    timings?: SchoolTimingOrderByRelationAggregateInput
    sessions?: ScheduleSessionOrderByRelationAggregateInput
    _relevance?: SchoolOrderByRelevanceInput
  }

  export type SchoolWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SchoolWhereInput | SchoolWhereInput[]
    OR?: SchoolWhereInput[]
    NOT?: SchoolWhereInput | SchoolWhereInput[]
    name?: StringFilter<"School"> | string
    color?: StringFilter<"School"> | string
    bg?: StringFilter<"School"> | string
    order?: IntFilter<"School"> | number
    createdAt?: DateTimeFilter<"School"> | Date | string
    timings?: SchoolTimingListRelationFilter
    sessions?: ScheduleSessionListRelationFilter
  }, "id">

  export type SchoolOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    bg?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    _count?: SchoolCountOrderByAggregateInput
    _avg?: SchoolAvgOrderByAggregateInput
    _max?: SchoolMaxOrderByAggregateInput
    _min?: SchoolMinOrderByAggregateInput
    _sum?: SchoolSumOrderByAggregateInput
  }

  export type SchoolScalarWhereWithAggregatesInput = {
    AND?: SchoolScalarWhereWithAggregatesInput | SchoolScalarWhereWithAggregatesInput[]
    OR?: SchoolScalarWhereWithAggregatesInput[]
    NOT?: SchoolScalarWhereWithAggregatesInput | SchoolScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"School"> | string
    name?: StringWithAggregatesFilter<"School"> | string
    color?: StringWithAggregatesFilter<"School"> | string
    bg?: StringWithAggregatesFilter<"School"> | string
    order?: IntWithAggregatesFilter<"School"> | number
    createdAt?: DateTimeWithAggregatesFilter<"School"> | Date | string
  }

  export type TeacherWhereInput = {
    AND?: TeacherWhereInput | TeacherWhereInput[]
    OR?: TeacherWhereInput[]
    NOT?: TeacherWhereInput | TeacherWhereInput[]
    id?: StringFilter<"Teacher"> | string
    name?: StringFilter<"Teacher"> | string
    color?: StringFilter<"Teacher"> | string
    createdAt?: DateTimeFilter<"Teacher"> | Date | string
    sessions?: ScheduleSessionListRelationFilter
  }

  export type TeacherOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    sessions?: ScheduleSessionOrderByRelationAggregateInput
    _relevance?: TeacherOrderByRelevanceInput
  }

  export type TeacherWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TeacherWhereInput | TeacherWhereInput[]
    OR?: TeacherWhereInput[]
    NOT?: TeacherWhereInput | TeacherWhereInput[]
    name?: StringFilter<"Teacher"> | string
    color?: StringFilter<"Teacher"> | string
    createdAt?: DateTimeFilter<"Teacher"> | Date | string
    sessions?: ScheduleSessionListRelationFilter
  }, "id">

  export type TeacherOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    _count?: TeacherCountOrderByAggregateInput
    _max?: TeacherMaxOrderByAggregateInput
    _min?: TeacherMinOrderByAggregateInput
  }

  export type TeacherScalarWhereWithAggregatesInput = {
    AND?: TeacherScalarWhereWithAggregatesInput | TeacherScalarWhereWithAggregatesInput[]
    OR?: TeacherScalarWhereWithAggregatesInput[]
    NOT?: TeacherScalarWhereWithAggregatesInput | TeacherScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Teacher"> | string
    name?: StringWithAggregatesFilter<"Teacher"> | string
    color?: StringWithAggregatesFilter<"Teacher"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Teacher"> | Date | string
  }

  export type TeachingAssistantWhereInput = {
    AND?: TeachingAssistantWhereInput | TeachingAssistantWhereInput[]
    OR?: TeachingAssistantWhereInput[]
    NOT?: TeachingAssistantWhereInput | TeachingAssistantWhereInput[]
    id?: StringFilter<"TeachingAssistant"> | string
    name?: StringFilter<"TeachingAssistant"> | string
    color?: StringFilter<"TeachingAssistant"> | string
    createdAt?: DateTimeFilter<"TeachingAssistant"> | Date | string
    sessions?: ScheduleSessionListRelationFilter
  }

  export type TeachingAssistantOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    sessions?: ScheduleSessionOrderByRelationAggregateInput
    _relevance?: TeachingAssistantOrderByRelevanceInput
  }

  export type TeachingAssistantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TeachingAssistantWhereInput | TeachingAssistantWhereInput[]
    OR?: TeachingAssistantWhereInput[]
    NOT?: TeachingAssistantWhereInput | TeachingAssistantWhereInput[]
    name?: StringFilter<"TeachingAssistant"> | string
    color?: StringFilter<"TeachingAssistant"> | string
    createdAt?: DateTimeFilter<"TeachingAssistant"> | Date | string
    sessions?: ScheduleSessionListRelationFilter
  }, "id">

  export type TeachingAssistantOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    _count?: TeachingAssistantCountOrderByAggregateInput
    _max?: TeachingAssistantMaxOrderByAggregateInput
    _min?: TeachingAssistantMinOrderByAggregateInput
  }

  export type TeachingAssistantScalarWhereWithAggregatesInput = {
    AND?: TeachingAssistantScalarWhereWithAggregatesInput | TeachingAssistantScalarWhereWithAggregatesInput[]
    OR?: TeachingAssistantScalarWhereWithAggregatesInput[]
    NOT?: TeachingAssistantScalarWhereWithAggregatesInput | TeachingAssistantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TeachingAssistant"> | string
    name?: StringWithAggregatesFilter<"TeachingAssistant"> | string
    color?: StringWithAggregatesFilter<"TeachingAssistant"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TeachingAssistant"> | Date | string
  }

  export type GlobalSettingWhereInput = {
    AND?: GlobalSettingWhereInput | GlobalSettingWhereInput[]
    OR?: GlobalSettingWhereInput[]
    NOT?: GlobalSettingWhereInput | GlobalSettingWhereInput[]
    id?: StringFilter<"GlobalSetting"> | string
    period1Start?: StringFilter<"GlobalSetting"> | string
  }

  export type GlobalSettingOrderByWithRelationInput = {
    id?: SortOrder
    period1Start?: SortOrder
    _relevance?: GlobalSettingOrderByRelevanceInput
  }

  export type GlobalSettingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GlobalSettingWhereInput | GlobalSettingWhereInput[]
    OR?: GlobalSettingWhereInput[]
    NOT?: GlobalSettingWhereInput | GlobalSettingWhereInput[]
    period1Start?: StringFilter<"GlobalSetting"> | string
  }, "id">

  export type GlobalSettingOrderByWithAggregationInput = {
    id?: SortOrder
    period1Start?: SortOrder
    _count?: GlobalSettingCountOrderByAggregateInput
    _max?: GlobalSettingMaxOrderByAggregateInput
    _min?: GlobalSettingMinOrderByAggregateInput
  }

  export type GlobalSettingScalarWhereWithAggregatesInput = {
    AND?: GlobalSettingScalarWhereWithAggregatesInput | GlobalSettingScalarWhereWithAggregatesInput[]
    OR?: GlobalSettingScalarWhereWithAggregatesInput[]
    NOT?: GlobalSettingScalarWhereWithAggregatesInput | GlobalSettingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GlobalSetting"> | string
    period1Start?: StringWithAggregatesFilter<"GlobalSetting"> | string
  }

  export type SchoolTimingWhereInput = {
    AND?: SchoolTimingWhereInput | SchoolTimingWhereInput[]
    OR?: SchoolTimingWhereInput[]
    NOT?: SchoolTimingWhereInput | SchoolTimingWhereInput[]
    id?: StringFilter<"SchoolTiming"> | string
    schoolId?: StringFilter<"SchoolTiming"> | string
    period2Start?: StringFilter<"SchoolTiming"> | string
    period3Start?: StringFilter<"SchoolTiming"> | string
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
  }

  export type SchoolTimingOrderByWithRelationInput = {
    id?: SortOrder
    schoolId?: SortOrder
    period2Start?: SortOrder
    period3Start?: SortOrder
    school?: SchoolOrderByWithRelationInput
    _relevance?: SchoolTimingOrderByRelevanceInput
  }

  export type SchoolTimingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    schoolId?: string
    AND?: SchoolTimingWhereInput | SchoolTimingWhereInput[]
    OR?: SchoolTimingWhereInput[]
    NOT?: SchoolTimingWhereInput | SchoolTimingWhereInput[]
    period2Start?: StringFilter<"SchoolTiming"> | string
    period3Start?: StringFilter<"SchoolTiming"> | string
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
  }, "id" | "schoolId">

  export type SchoolTimingOrderByWithAggregationInput = {
    id?: SortOrder
    schoolId?: SortOrder
    period2Start?: SortOrder
    period3Start?: SortOrder
    _count?: SchoolTimingCountOrderByAggregateInput
    _max?: SchoolTimingMaxOrderByAggregateInput
    _min?: SchoolTimingMinOrderByAggregateInput
  }

  export type SchoolTimingScalarWhereWithAggregatesInput = {
    AND?: SchoolTimingScalarWhereWithAggregatesInput | SchoolTimingScalarWhereWithAggregatesInput[]
    OR?: SchoolTimingScalarWhereWithAggregatesInput[]
    NOT?: SchoolTimingScalarWhereWithAggregatesInput | SchoolTimingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SchoolTiming"> | string
    schoolId?: StringWithAggregatesFilter<"SchoolTiming"> | string
    period2Start?: StringWithAggregatesFilter<"SchoolTiming"> | string
    period3Start?: StringWithAggregatesFilter<"SchoolTiming"> | string
  }

  export type ScheduleSessionWhereInput = {
    AND?: ScheduleSessionWhereInput | ScheduleSessionWhereInput[]
    OR?: ScheduleSessionWhereInput[]
    NOT?: ScheduleSessionWhereInput | ScheduleSessionWhereInput[]
    id?: StringFilter<"ScheduleSession"> | string
    weekStart?: StringFilter<"ScheduleSession"> | string
    dayIndex?: IntFilter<"ScheduleSession"> | number
    periodIndex?: IntFilter<"ScheduleSession"> | number
    schoolId?: StringFilter<"ScheduleSession"> | string
    teacherId?: StringNullableFilter<"ScheduleSession"> | string | null
    taId?: StringNullableFilter<"ScheduleSession"> | string | null
    note?: StringNullableFilter<"ScheduleSession"> | string | null
    createdAt?: DateTimeFilter<"ScheduleSession"> | Date | string
    updatedAt?: DateTimeFilter<"ScheduleSession"> | Date | string
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
    teacher?: XOR<TeacherNullableScalarRelationFilter, TeacherWhereInput> | null
    ta?: XOR<TeachingAssistantNullableScalarRelationFilter, TeachingAssistantWhereInput> | null
  }

  export type ScheduleSessionOrderByWithRelationInput = {
    id?: SortOrder
    weekStart?: SortOrder
    dayIndex?: SortOrder
    periodIndex?: SortOrder
    schoolId?: SortOrder
    teacherId?: SortOrderInput | SortOrder
    taId?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    school?: SchoolOrderByWithRelationInput
    teacher?: TeacherOrderByWithRelationInput
    ta?: TeachingAssistantOrderByWithRelationInput
    _relevance?: ScheduleSessionOrderByRelevanceInput
  }

  export type ScheduleSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    weekStart_dayIndex_periodIndex_schoolId?: ScheduleSessionWeekStartDayIndexPeriodIndexSchoolIdCompoundUniqueInput
    AND?: ScheduleSessionWhereInput | ScheduleSessionWhereInput[]
    OR?: ScheduleSessionWhereInput[]
    NOT?: ScheduleSessionWhereInput | ScheduleSessionWhereInput[]
    weekStart?: StringFilter<"ScheduleSession"> | string
    dayIndex?: IntFilter<"ScheduleSession"> | number
    periodIndex?: IntFilter<"ScheduleSession"> | number
    schoolId?: StringFilter<"ScheduleSession"> | string
    teacherId?: StringNullableFilter<"ScheduleSession"> | string | null
    taId?: StringNullableFilter<"ScheduleSession"> | string | null
    note?: StringNullableFilter<"ScheduleSession"> | string | null
    createdAt?: DateTimeFilter<"ScheduleSession"> | Date | string
    updatedAt?: DateTimeFilter<"ScheduleSession"> | Date | string
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
    teacher?: XOR<TeacherNullableScalarRelationFilter, TeacherWhereInput> | null
    ta?: XOR<TeachingAssistantNullableScalarRelationFilter, TeachingAssistantWhereInput> | null
  }, "id" | "weekStart_dayIndex_periodIndex_schoolId">

  export type ScheduleSessionOrderByWithAggregationInput = {
    id?: SortOrder
    weekStart?: SortOrder
    dayIndex?: SortOrder
    periodIndex?: SortOrder
    schoolId?: SortOrder
    teacherId?: SortOrderInput | SortOrder
    taId?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ScheduleSessionCountOrderByAggregateInput
    _avg?: ScheduleSessionAvgOrderByAggregateInput
    _max?: ScheduleSessionMaxOrderByAggregateInput
    _min?: ScheduleSessionMinOrderByAggregateInput
    _sum?: ScheduleSessionSumOrderByAggregateInput
  }

  export type ScheduleSessionScalarWhereWithAggregatesInput = {
    AND?: ScheduleSessionScalarWhereWithAggregatesInput | ScheduleSessionScalarWhereWithAggregatesInput[]
    OR?: ScheduleSessionScalarWhereWithAggregatesInput[]
    NOT?: ScheduleSessionScalarWhereWithAggregatesInput | ScheduleSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ScheduleSession"> | string
    weekStart?: StringWithAggregatesFilter<"ScheduleSession"> | string
    dayIndex?: IntWithAggregatesFilter<"ScheduleSession"> | number
    periodIndex?: IntWithAggregatesFilter<"ScheduleSession"> | number
    schoolId?: StringWithAggregatesFilter<"ScheduleSession"> | string
    teacherId?: StringNullableWithAggregatesFilter<"ScheduleSession"> | string | null
    taId?: StringNullableWithAggregatesFilter<"ScheduleSession"> | string | null
    note?: StringNullableWithAggregatesFilter<"ScheduleSession"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ScheduleSession"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ScheduleSession"> | Date | string
  }

  export type SchoolCreateInput = {
    id?: string
    name: string
    color: string
    bg: string
    order?: number
    createdAt?: Date | string
    timings?: SchoolTimingCreateNestedManyWithoutSchoolInput
    sessions?: ScheduleSessionCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUncheckedCreateInput = {
    id?: string
    name: string
    color: string
    bg: string
    order?: number
    createdAt?: Date | string
    timings?: SchoolTimingUncheckedCreateNestedManyWithoutSchoolInput
    sessions?: ScheduleSessionUncheckedCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    bg?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timings?: SchoolTimingUpdateManyWithoutSchoolNestedInput
    sessions?: ScheduleSessionUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    bg?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timings?: SchoolTimingUncheckedUpdateManyWithoutSchoolNestedInput
    sessions?: ScheduleSessionUncheckedUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolCreateManyInput = {
    id?: string
    name: string
    color: string
    bg: string
    order?: number
    createdAt?: Date | string
  }

  export type SchoolUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    bg?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchoolUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    bg?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherCreateInput = {
    id?: string
    name: string
    color: string
    createdAt?: Date | string
    sessions?: ScheduleSessionCreateNestedManyWithoutTeacherInput
  }

  export type TeacherUncheckedCreateInput = {
    id?: string
    name: string
    color: string
    createdAt?: Date | string
    sessions?: ScheduleSessionUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type TeacherUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: ScheduleSessionUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: ScheduleSessionUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherCreateManyInput = {
    id?: string
    name: string
    color: string
    createdAt?: Date | string
  }

  export type TeacherUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeachingAssistantCreateInput = {
    id?: string
    name: string
    color: string
    createdAt?: Date | string
    sessions?: ScheduleSessionCreateNestedManyWithoutTaInput
  }

  export type TeachingAssistantUncheckedCreateInput = {
    id?: string
    name: string
    color: string
    createdAt?: Date | string
    sessions?: ScheduleSessionUncheckedCreateNestedManyWithoutTaInput
  }

  export type TeachingAssistantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: ScheduleSessionUpdateManyWithoutTaNestedInput
  }

  export type TeachingAssistantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: ScheduleSessionUncheckedUpdateManyWithoutTaNestedInput
  }

  export type TeachingAssistantCreateManyInput = {
    id?: string
    name: string
    color: string
    createdAt?: Date | string
  }

  export type TeachingAssistantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeachingAssistantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GlobalSettingCreateInput = {
    id?: string
    period1Start?: string
  }

  export type GlobalSettingUncheckedCreateInput = {
    id?: string
    period1Start?: string
  }

  export type GlobalSettingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    period1Start?: StringFieldUpdateOperationsInput | string
  }

  export type GlobalSettingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    period1Start?: StringFieldUpdateOperationsInput | string
  }

  export type GlobalSettingCreateManyInput = {
    id?: string
    period1Start?: string
  }

  export type GlobalSettingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    period1Start?: StringFieldUpdateOperationsInput | string
  }

  export type GlobalSettingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    period1Start?: StringFieldUpdateOperationsInput | string
  }

  export type SchoolTimingCreateInput = {
    id?: string
    period2Start: string
    period3Start: string
    school: SchoolCreateNestedOneWithoutTimingsInput
  }

  export type SchoolTimingUncheckedCreateInput = {
    id?: string
    schoolId: string
    period2Start: string
    period3Start: string
  }

  export type SchoolTimingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    period2Start?: StringFieldUpdateOperationsInput | string
    period3Start?: StringFieldUpdateOperationsInput | string
    school?: SchoolUpdateOneRequiredWithoutTimingsNestedInput
  }

  export type SchoolTimingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    period2Start?: StringFieldUpdateOperationsInput | string
    period3Start?: StringFieldUpdateOperationsInput | string
  }

  export type SchoolTimingCreateManyInput = {
    id?: string
    schoolId: string
    period2Start: string
    period3Start: string
  }

  export type SchoolTimingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    period2Start?: StringFieldUpdateOperationsInput | string
    period3Start?: StringFieldUpdateOperationsInput | string
  }

  export type SchoolTimingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    period2Start?: StringFieldUpdateOperationsInput | string
    period3Start?: StringFieldUpdateOperationsInput | string
  }

  export type ScheduleSessionCreateInput = {
    id?: string
    weekStart: string
    dayIndex: number
    periodIndex: number
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    school: SchoolCreateNestedOneWithoutSessionsInput
    teacher?: TeacherCreateNestedOneWithoutSessionsInput
    ta?: TeachingAssistantCreateNestedOneWithoutSessionsInput
  }

  export type ScheduleSessionUncheckedCreateInput = {
    id?: string
    weekStart: string
    dayIndex: number
    periodIndex: number
    schoolId: string
    teacherId?: string | null
    taId?: string | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekStart?: StringFieldUpdateOperationsInput | string
    dayIndex?: IntFieldUpdateOperationsInput | number
    periodIndex?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: SchoolUpdateOneRequiredWithoutSessionsNestedInput
    teacher?: TeacherUpdateOneWithoutSessionsNestedInput
    ta?: TeachingAssistantUpdateOneWithoutSessionsNestedInput
  }

  export type ScheduleSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekStart?: StringFieldUpdateOperationsInput | string
    dayIndex?: IntFieldUpdateOperationsInput | number
    periodIndex?: IntFieldUpdateOperationsInput | number
    schoolId?: StringFieldUpdateOperationsInput | string
    teacherId?: NullableStringFieldUpdateOperationsInput | string | null
    taId?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleSessionCreateManyInput = {
    id?: string
    weekStart: string
    dayIndex: number
    periodIndex: number
    schoolId: string
    teacherId?: string | null
    taId?: string | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekStart?: StringFieldUpdateOperationsInput | string
    dayIndex?: IntFieldUpdateOperationsInput | number
    periodIndex?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekStart?: StringFieldUpdateOperationsInput | string
    dayIndex?: IntFieldUpdateOperationsInput | number
    periodIndex?: IntFieldUpdateOperationsInput | number
    schoolId?: StringFieldUpdateOperationsInput | string
    teacherId?: NullableStringFieldUpdateOperationsInput | string | null
    taId?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SchoolTimingListRelationFilter = {
    every?: SchoolTimingWhereInput
    some?: SchoolTimingWhereInput
    none?: SchoolTimingWhereInput
  }

  export type ScheduleSessionListRelationFilter = {
    every?: ScheduleSessionWhereInput
    some?: ScheduleSessionWhereInput
    none?: ScheduleSessionWhereInput
  }

  export type SchoolTimingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ScheduleSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SchoolOrderByRelevanceInput = {
    fields: SchoolOrderByRelevanceFieldEnum | SchoolOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SchoolCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    bg?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
  }

  export type SchoolAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type SchoolMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    bg?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
  }

  export type SchoolMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    bg?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
  }

  export type SchoolSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type TeacherOrderByRelevanceInput = {
    fields: TeacherOrderByRelevanceFieldEnum | TeacherOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TeacherCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
  }

  export type TeacherMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
  }

  export type TeacherMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
  }

  export type TeachingAssistantOrderByRelevanceInput = {
    fields: TeachingAssistantOrderByRelevanceFieldEnum | TeachingAssistantOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TeachingAssistantCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
  }

  export type TeachingAssistantMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
  }

  export type TeachingAssistantMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
  }

  export type GlobalSettingOrderByRelevanceInput = {
    fields: GlobalSettingOrderByRelevanceFieldEnum | GlobalSettingOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type GlobalSettingCountOrderByAggregateInput = {
    id?: SortOrder
    period1Start?: SortOrder
  }

  export type GlobalSettingMaxOrderByAggregateInput = {
    id?: SortOrder
    period1Start?: SortOrder
  }

  export type GlobalSettingMinOrderByAggregateInput = {
    id?: SortOrder
    period1Start?: SortOrder
  }

  export type SchoolScalarRelationFilter = {
    is?: SchoolWhereInput
    isNot?: SchoolWhereInput
  }

  export type SchoolTimingOrderByRelevanceInput = {
    fields: SchoolTimingOrderByRelevanceFieldEnum | SchoolTimingOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SchoolTimingCountOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    period2Start?: SortOrder
    period3Start?: SortOrder
  }

  export type SchoolTimingMaxOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    period2Start?: SortOrder
    period3Start?: SortOrder
  }

  export type SchoolTimingMinOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    period2Start?: SortOrder
    period3Start?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type TeacherNullableScalarRelationFilter = {
    is?: TeacherWhereInput | null
    isNot?: TeacherWhereInput | null
  }

  export type TeachingAssistantNullableScalarRelationFilter = {
    is?: TeachingAssistantWhereInput | null
    isNot?: TeachingAssistantWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ScheduleSessionOrderByRelevanceInput = {
    fields: ScheduleSessionOrderByRelevanceFieldEnum | ScheduleSessionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ScheduleSessionWeekStartDayIndexPeriodIndexSchoolIdCompoundUniqueInput = {
    weekStart: string
    dayIndex: number
    periodIndex: number
    schoolId: string
  }

  export type ScheduleSessionCountOrderByAggregateInput = {
    id?: SortOrder
    weekStart?: SortOrder
    dayIndex?: SortOrder
    periodIndex?: SortOrder
    schoolId?: SortOrder
    teacherId?: SortOrder
    taId?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScheduleSessionAvgOrderByAggregateInput = {
    dayIndex?: SortOrder
    periodIndex?: SortOrder
  }

  export type ScheduleSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    weekStart?: SortOrder
    dayIndex?: SortOrder
    periodIndex?: SortOrder
    schoolId?: SortOrder
    teacherId?: SortOrder
    taId?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScheduleSessionMinOrderByAggregateInput = {
    id?: SortOrder
    weekStart?: SortOrder
    dayIndex?: SortOrder
    periodIndex?: SortOrder
    schoolId?: SortOrder
    teacherId?: SortOrder
    taId?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScheduleSessionSumOrderByAggregateInput = {
    dayIndex?: SortOrder
    periodIndex?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type SchoolTimingCreateNestedManyWithoutSchoolInput = {
    create?: XOR<SchoolTimingCreateWithoutSchoolInput, SchoolTimingUncheckedCreateWithoutSchoolInput> | SchoolTimingCreateWithoutSchoolInput[] | SchoolTimingUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: SchoolTimingCreateOrConnectWithoutSchoolInput | SchoolTimingCreateOrConnectWithoutSchoolInput[]
    createMany?: SchoolTimingCreateManySchoolInputEnvelope
    connect?: SchoolTimingWhereUniqueInput | SchoolTimingWhereUniqueInput[]
  }

  export type ScheduleSessionCreateNestedManyWithoutSchoolInput = {
    create?: XOR<ScheduleSessionCreateWithoutSchoolInput, ScheduleSessionUncheckedCreateWithoutSchoolInput> | ScheduleSessionCreateWithoutSchoolInput[] | ScheduleSessionUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: ScheduleSessionCreateOrConnectWithoutSchoolInput | ScheduleSessionCreateOrConnectWithoutSchoolInput[]
    createMany?: ScheduleSessionCreateManySchoolInputEnvelope
    connect?: ScheduleSessionWhereUniqueInput | ScheduleSessionWhereUniqueInput[]
  }

  export type SchoolTimingUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: XOR<SchoolTimingCreateWithoutSchoolInput, SchoolTimingUncheckedCreateWithoutSchoolInput> | SchoolTimingCreateWithoutSchoolInput[] | SchoolTimingUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: SchoolTimingCreateOrConnectWithoutSchoolInput | SchoolTimingCreateOrConnectWithoutSchoolInput[]
    createMany?: SchoolTimingCreateManySchoolInputEnvelope
    connect?: SchoolTimingWhereUniqueInput | SchoolTimingWhereUniqueInput[]
  }

  export type ScheduleSessionUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: XOR<ScheduleSessionCreateWithoutSchoolInput, ScheduleSessionUncheckedCreateWithoutSchoolInput> | ScheduleSessionCreateWithoutSchoolInput[] | ScheduleSessionUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: ScheduleSessionCreateOrConnectWithoutSchoolInput | ScheduleSessionCreateOrConnectWithoutSchoolInput[]
    createMany?: ScheduleSessionCreateManySchoolInputEnvelope
    connect?: ScheduleSessionWhereUniqueInput | ScheduleSessionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SchoolTimingUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<SchoolTimingCreateWithoutSchoolInput, SchoolTimingUncheckedCreateWithoutSchoolInput> | SchoolTimingCreateWithoutSchoolInput[] | SchoolTimingUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: SchoolTimingCreateOrConnectWithoutSchoolInput | SchoolTimingCreateOrConnectWithoutSchoolInput[]
    upsert?: SchoolTimingUpsertWithWhereUniqueWithoutSchoolInput | SchoolTimingUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: SchoolTimingCreateManySchoolInputEnvelope
    set?: SchoolTimingWhereUniqueInput | SchoolTimingWhereUniqueInput[]
    disconnect?: SchoolTimingWhereUniqueInput | SchoolTimingWhereUniqueInput[]
    delete?: SchoolTimingWhereUniqueInput | SchoolTimingWhereUniqueInput[]
    connect?: SchoolTimingWhereUniqueInput | SchoolTimingWhereUniqueInput[]
    update?: SchoolTimingUpdateWithWhereUniqueWithoutSchoolInput | SchoolTimingUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: SchoolTimingUpdateManyWithWhereWithoutSchoolInput | SchoolTimingUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: SchoolTimingScalarWhereInput | SchoolTimingScalarWhereInput[]
  }

  export type ScheduleSessionUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<ScheduleSessionCreateWithoutSchoolInput, ScheduleSessionUncheckedCreateWithoutSchoolInput> | ScheduleSessionCreateWithoutSchoolInput[] | ScheduleSessionUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: ScheduleSessionCreateOrConnectWithoutSchoolInput | ScheduleSessionCreateOrConnectWithoutSchoolInput[]
    upsert?: ScheduleSessionUpsertWithWhereUniqueWithoutSchoolInput | ScheduleSessionUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: ScheduleSessionCreateManySchoolInputEnvelope
    set?: ScheduleSessionWhereUniqueInput | ScheduleSessionWhereUniqueInput[]
    disconnect?: ScheduleSessionWhereUniqueInput | ScheduleSessionWhereUniqueInput[]
    delete?: ScheduleSessionWhereUniqueInput | ScheduleSessionWhereUniqueInput[]
    connect?: ScheduleSessionWhereUniqueInput | ScheduleSessionWhereUniqueInput[]
    update?: ScheduleSessionUpdateWithWhereUniqueWithoutSchoolInput | ScheduleSessionUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: ScheduleSessionUpdateManyWithWhereWithoutSchoolInput | ScheduleSessionUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: ScheduleSessionScalarWhereInput | ScheduleSessionScalarWhereInput[]
  }

  export type SchoolTimingUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<SchoolTimingCreateWithoutSchoolInput, SchoolTimingUncheckedCreateWithoutSchoolInput> | SchoolTimingCreateWithoutSchoolInput[] | SchoolTimingUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: SchoolTimingCreateOrConnectWithoutSchoolInput | SchoolTimingCreateOrConnectWithoutSchoolInput[]
    upsert?: SchoolTimingUpsertWithWhereUniqueWithoutSchoolInput | SchoolTimingUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: SchoolTimingCreateManySchoolInputEnvelope
    set?: SchoolTimingWhereUniqueInput | SchoolTimingWhereUniqueInput[]
    disconnect?: SchoolTimingWhereUniqueInput | SchoolTimingWhereUniqueInput[]
    delete?: SchoolTimingWhereUniqueInput | SchoolTimingWhereUniqueInput[]
    connect?: SchoolTimingWhereUniqueInput | SchoolTimingWhereUniqueInput[]
    update?: SchoolTimingUpdateWithWhereUniqueWithoutSchoolInput | SchoolTimingUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: SchoolTimingUpdateManyWithWhereWithoutSchoolInput | SchoolTimingUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: SchoolTimingScalarWhereInput | SchoolTimingScalarWhereInput[]
  }

  export type ScheduleSessionUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<ScheduleSessionCreateWithoutSchoolInput, ScheduleSessionUncheckedCreateWithoutSchoolInput> | ScheduleSessionCreateWithoutSchoolInput[] | ScheduleSessionUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: ScheduleSessionCreateOrConnectWithoutSchoolInput | ScheduleSessionCreateOrConnectWithoutSchoolInput[]
    upsert?: ScheduleSessionUpsertWithWhereUniqueWithoutSchoolInput | ScheduleSessionUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: ScheduleSessionCreateManySchoolInputEnvelope
    set?: ScheduleSessionWhereUniqueInput | ScheduleSessionWhereUniqueInput[]
    disconnect?: ScheduleSessionWhereUniqueInput | ScheduleSessionWhereUniqueInput[]
    delete?: ScheduleSessionWhereUniqueInput | ScheduleSessionWhereUniqueInput[]
    connect?: ScheduleSessionWhereUniqueInput | ScheduleSessionWhereUniqueInput[]
    update?: ScheduleSessionUpdateWithWhereUniqueWithoutSchoolInput | ScheduleSessionUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: ScheduleSessionUpdateManyWithWhereWithoutSchoolInput | ScheduleSessionUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: ScheduleSessionScalarWhereInput | ScheduleSessionScalarWhereInput[]
  }

  export type ScheduleSessionCreateNestedManyWithoutTeacherInput = {
    create?: XOR<ScheduleSessionCreateWithoutTeacherInput, ScheduleSessionUncheckedCreateWithoutTeacherInput> | ScheduleSessionCreateWithoutTeacherInput[] | ScheduleSessionUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: ScheduleSessionCreateOrConnectWithoutTeacherInput | ScheduleSessionCreateOrConnectWithoutTeacherInput[]
    createMany?: ScheduleSessionCreateManyTeacherInputEnvelope
    connect?: ScheduleSessionWhereUniqueInput | ScheduleSessionWhereUniqueInput[]
  }

  export type ScheduleSessionUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<ScheduleSessionCreateWithoutTeacherInput, ScheduleSessionUncheckedCreateWithoutTeacherInput> | ScheduleSessionCreateWithoutTeacherInput[] | ScheduleSessionUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: ScheduleSessionCreateOrConnectWithoutTeacherInput | ScheduleSessionCreateOrConnectWithoutTeacherInput[]
    createMany?: ScheduleSessionCreateManyTeacherInputEnvelope
    connect?: ScheduleSessionWhereUniqueInput | ScheduleSessionWhereUniqueInput[]
  }

  export type ScheduleSessionUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<ScheduleSessionCreateWithoutTeacherInput, ScheduleSessionUncheckedCreateWithoutTeacherInput> | ScheduleSessionCreateWithoutTeacherInput[] | ScheduleSessionUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: ScheduleSessionCreateOrConnectWithoutTeacherInput | ScheduleSessionCreateOrConnectWithoutTeacherInput[]
    upsert?: ScheduleSessionUpsertWithWhereUniqueWithoutTeacherInput | ScheduleSessionUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: ScheduleSessionCreateManyTeacherInputEnvelope
    set?: ScheduleSessionWhereUniqueInput | ScheduleSessionWhereUniqueInput[]
    disconnect?: ScheduleSessionWhereUniqueInput | ScheduleSessionWhereUniqueInput[]
    delete?: ScheduleSessionWhereUniqueInput | ScheduleSessionWhereUniqueInput[]
    connect?: ScheduleSessionWhereUniqueInput | ScheduleSessionWhereUniqueInput[]
    update?: ScheduleSessionUpdateWithWhereUniqueWithoutTeacherInput | ScheduleSessionUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: ScheduleSessionUpdateManyWithWhereWithoutTeacherInput | ScheduleSessionUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: ScheduleSessionScalarWhereInput | ScheduleSessionScalarWhereInput[]
  }

  export type ScheduleSessionUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<ScheduleSessionCreateWithoutTeacherInput, ScheduleSessionUncheckedCreateWithoutTeacherInput> | ScheduleSessionCreateWithoutTeacherInput[] | ScheduleSessionUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: ScheduleSessionCreateOrConnectWithoutTeacherInput | ScheduleSessionCreateOrConnectWithoutTeacherInput[]
    upsert?: ScheduleSessionUpsertWithWhereUniqueWithoutTeacherInput | ScheduleSessionUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: ScheduleSessionCreateManyTeacherInputEnvelope
    set?: ScheduleSessionWhereUniqueInput | ScheduleSessionWhereUniqueInput[]
    disconnect?: ScheduleSessionWhereUniqueInput | ScheduleSessionWhereUniqueInput[]
    delete?: ScheduleSessionWhereUniqueInput | ScheduleSessionWhereUniqueInput[]
    connect?: ScheduleSessionWhereUniqueInput | ScheduleSessionWhereUniqueInput[]
    update?: ScheduleSessionUpdateWithWhereUniqueWithoutTeacherInput | ScheduleSessionUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: ScheduleSessionUpdateManyWithWhereWithoutTeacherInput | ScheduleSessionUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: ScheduleSessionScalarWhereInput | ScheduleSessionScalarWhereInput[]
  }

  export type ScheduleSessionCreateNestedManyWithoutTaInput = {
    create?: XOR<ScheduleSessionCreateWithoutTaInput, ScheduleSessionUncheckedCreateWithoutTaInput> | ScheduleSessionCreateWithoutTaInput[] | ScheduleSessionUncheckedCreateWithoutTaInput[]
    connectOrCreate?: ScheduleSessionCreateOrConnectWithoutTaInput | ScheduleSessionCreateOrConnectWithoutTaInput[]
    createMany?: ScheduleSessionCreateManyTaInputEnvelope
    connect?: ScheduleSessionWhereUniqueInput | ScheduleSessionWhereUniqueInput[]
  }

  export type ScheduleSessionUncheckedCreateNestedManyWithoutTaInput = {
    create?: XOR<ScheduleSessionCreateWithoutTaInput, ScheduleSessionUncheckedCreateWithoutTaInput> | ScheduleSessionCreateWithoutTaInput[] | ScheduleSessionUncheckedCreateWithoutTaInput[]
    connectOrCreate?: ScheduleSessionCreateOrConnectWithoutTaInput | ScheduleSessionCreateOrConnectWithoutTaInput[]
    createMany?: ScheduleSessionCreateManyTaInputEnvelope
    connect?: ScheduleSessionWhereUniqueInput | ScheduleSessionWhereUniqueInput[]
  }

  export type ScheduleSessionUpdateManyWithoutTaNestedInput = {
    create?: XOR<ScheduleSessionCreateWithoutTaInput, ScheduleSessionUncheckedCreateWithoutTaInput> | ScheduleSessionCreateWithoutTaInput[] | ScheduleSessionUncheckedCreateWithoutTaInput[]
    connectOrCreate?: ScheduleSessionCreateOrConnectWithoutTaInput | ScheduleSessionCreateOrConnectWithoutTaInput[]
    upsert?: ScheduleSessionUpsertWithWhereUniqueWithoutTaInput | ScheduleSessionUpsertWithWhereUniqueWithoutTaInput[]
    createMany?: ScheduleSessionCreateManyTaInputEnvelope
    set?: ScheduleSessionWhereUniqueInput | ScheduleSessionWhereUniqueInput[]
    disconnect?: ScheduleSessionWhereUniqueInput | ScheduleSessionWhereUniqueInput[]
    delete?: ScheduleSessionWhereUniqueInput | ScheduleSessionWhereUniqueInput[]
    connect?: ScheduleSessionWhereUniqueInput | ScheduleSessionWhereUniqueInput[]
    update?: ScheduleSessionUpdateWithWhereUniqueWithoutTaInput | ScheduleSessionUpdateWithWhereUniqueWithoutTaInput[]
    updateMany?: ScheduleSessionUpdateManyWithWhereWithoutTaInput | ScheduleSessionUpdateManyWithWhereWithoutTaInput[]
    deleteMany?: ScheduleSessionScalarWhereInput | ScheduleSessionScalarWhereInput[]
  }

  export type ScheduleSessionUncheckedUpdateManyWithoutTaNestedInput = {
    create?: XOR<ScheduleSessionCreateWithoutTaInput, ScheduleSessionUncheckedCreateWithoutTaInput> | ScheduleSessionCreateWithoutTaInput[] | ScheduleSessionUncheckedCreateWithoutTaInput[]
    connectOrCreate?: ScheduleSessionCreateOrConnectWithoutTaInput | ScheduleSessionCreateOrConnectWithoutTaInput[]
    upsert?: ScheduleSessionUpsertWithWhereUniqueWithoutTaInput | ScheduleSessionUpsertWithWhereUniqueWithoutTaInput[]
    createMany?: ScheduleSessionCreateManyTaInputEnvelope
    set?: ScheduleSessionWhereUniqueInput | ScheduleSessionWhereUniqueInput[]
    disconnect?: ScheduleSessionWhereUniqueInput | ScheduleSessionWhereUniqueInput[]
    delete?: ScheduleSessionWhereUniqueInput | ScheduleSessionWhereUniqueInput[]
    connect?: ScheduleSessionWhereUniqueInput | ScheduleSessionWhereUniqueInput[]
    update?: ScheduleSessionUpdateWithWhereUniqueWithoutTaInput | ScheduleSessionUpdateWithWhereUniqueWithoutTaInput[]
    updateMany?: ScheduleSessionUpdateManyWithWhereWithoutTaInput | ScheduleSessionUpdateManyWithWhereWithoutTaInput[]
    deleteMany?: ScheduleSessionScalarWhereInput | ScheduleSessionScalarWhereInput[]
  }

  export type SchoolCreateNestedOneWithoutTimingsInput = {
    create?: XOR<SchoolCreateWithoutTimingsInput, SchoolUncheckedCreateWithoutTimingsInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutTimingsInput
    connect?: SchoolWhereUniqueInput
  }

  export type SchoolUpdateOneRequiredWithoutTimingsNestedInput = {
    create?: XOR<SchoolCreateWithoutTimingsInput, SchoolUncheckedCreateWithoutTimingsInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutTimingsInput
    upsert?: SchoolUpsertWithoutTimingsInput
    connect?: SchoolWhereUniqueInput
    update?: XOR<XOR<SchoolUpdateToOneWithWhereWithoutTimingsInput, SchoolUpdateWithoutTimingsInput>, SchoolUncheckedUpdateWithoutTimingsInput>
  }

  export type SchoolCreateNestedOneWithoutSessionsInput = {
    create?: XOR<SchoolCreateWithoutSessionsInput, SchoolUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutSessionsInput
    connect?: SchoolWhereUniqueInput
  }

  export type TeacherCreateNestedOneWithoutSessionsInput = {
    create?: XOR<TeacherCreateWithoutSessionsInput, TeacherUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutSessionsInput
    connect?: TeacherWhereUniqueInput
  }

  export type TeachingAssistantCreateNestedOneWithoutSessionsInput = {
    create?: XOR<TeachingAssistantCreateWithoutSessionsInput, TeachingAssistantUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: TeachingAssistantCreateOrConnectWithoutSessionsInput
    connect?: TeachingAssistantWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type SchoolUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<SchoolCreateWithoutSessionsInput, SchoolUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutSessionsInput
    upsert?: SchoolUpsertWithoutSessionsInput
    connect?: SchoolWhereUniqueInput
    update?: XOR<XOR<SchoolUpdateToOneWithWhereWithoutSessionsInput, SchoolUpdateWithoutSessionsInput>, SchoolUncheckedUpdateWithoutSessionsInput>
  }

  export type TeacherUpdateOneWithoutSessionsNestedInput = {
    create?: XOR<TeacherCreateWithoutSessionsInput, TeacherUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutSessionsInput
    upsert?: TeacherUpsertWithoutSessionsInput
    disconnect?: TeacherWhereInput | boolean
    delete?: TeacherWhereInput | boolean
    connect?: TeacherWhereUniqueInput
    update?: XOR<XOR<TeacherUpdateToOneWithWhereWithoutSessionsInput, TeacherUpdateWithoutSessionsInput>, TeacherUncheckedUpdateWithoutSessionsInput>
  }

  export type TeachingAssistantUpdateOneWithoutSessionsNestedInput = {
    create?: XOR<TeachingAssistantCreateWithoutSessionsInput, TeachingAssistantUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: TeachingAssistantCreateOrConnectWithoutSessionsInput
    upsert?: TeachingAssistantUpsertWithoutSessionsInput
    disconnect?: TeachingAssistantWhereInput | boolean
    delete?: TeachingAssistantWhereInput | boolean
    connect?: TeachingAssistantWhereUniqueInput
    update?: XOR<XOR<TeachingAssistantUpdateToOneWithWhereWithoutSessionsInput, TeachingAssistantUpdateWithoutSessionsInput>, TeachingAssistantUncheckedUpdateWithoutSessionsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type SchoolTimingCreateWithoutSchoolInput = {
    id?: string
    period2Start: string
    period3Start: string
  }

  export type SchoolTimingUncheckedCreateWithoutSchoolInput = {
    id?: string
    period2Start: string
    period3Start: string
  }

  export type SchoolTimingCreateOrConnectWithoutSchoolInput = {
    where: SchoolTimingWhereUniqueInput
    create: XOR<SchoolTimingCreateWithoutSchoolInput, SchoolTimingUncheckedCreateWithoutSchoolInput>
  }

  export type SchoolTimingCreateManySchoolInputEnvelope = {
    data: SchoolTimingCreateManySchoolInput | SchoolTimingCreateManySchoolInput[]
    skipDuplicates?: boolean
  }

  export type ScheduleSessionCreateWithoutSchoolInput = {
    id?: string
    weekStart: string
    dayIndex: number
    periodIndex: number
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    teacher?: TeacherCreateNestedOneWithoutSessionsInput
    ta?: TeachingAssistantCreateNestedOneWithoutSessionsInput
  }

  export type ScheduleSessionUncheckedCreateWithoutSchoolInput = {
    id?: string
    weekStart: string
    dayIndex: number
    periodIndex: number
    teacherId?: string | null
    taId?: string | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleSessionCreateOrConnectWithoutSchoolInput = {
    where: ScheduleSessionWhereUniqueInput
    create: XOR<ScheduleSessionCreateWithoutSchoolInput, ScheduleSessionUncheckedCreateWithoutSchoolInput>
  }

  export type ScheduleSessionCreateManySchoolInputEnvelope = {
    data: ScheduleSessionCreateManySchoolInput | ScheduleSessionCreateManySchoolInput[]
    skipDuplicates?: boolean
  }

  export type SchoolTimingUpsertWithWhereUniqueWithoutSchoolInput = {
    where: SchoolTimingWhereUniqueInput
    update: XOR<SchoolTimingUpdateWithoutSchoolInput, SchoolTimingUncheckedUpdateWithoutSchoolInput>
    create: XOR<SchoolTimingCreateWithoutSchoolInput, SchoolTimingUncheckedCreateWithoutSchoolInput>
  }

  export type SchoolTimingUpdateWithWhereUniqueWithoutSchoolInput = {
    where: SchoolTimingWhereUniqueInput
    data: XOR<SchoolTimingUpdateWithoutSchoolInput, SchoolTimingUncheckedUpdateWithoutSchoolInput>
  }

  export type SchoolTimingUpdateManyWithWhereWithoutSchoolInput = {
    where: SchoolTimingScalarWhereInput
    data: XOR<SchoolTimingUpdateManyMutationInput, SchoolTimingUncheckedUpdateManyWithoutSchoolInput>
  }

  export type SchoolTimingScalarWhereInput = {
    AND?: SchoolTimingScalarWhereInput | SchoolTimingScalarWhereInput[]
    OR?: SchoolTimingScalarWhereInput[]
    NOT?: SchoolTimingScalarWhereInput | SchoolTimingScalarWhereInput[]
    id?: StringFilter<"SchoolTiming"> | string
    schoolId?: StringFilter<"SchoolTiming"> | string
    period2Start?: StringFilter<"SchoolTiming"> | string
    period3Start?: StringFilter<"SchoolTiming"> | string
  }

  export type ScheduleSessionUpsertWithWhereUniqueWithoutSchoolInput = {
    where: ScheduleSessionWhereUniqueInput
    update: XOR<ScheduleSessionUpdateWithoutSchoolInput, ScheduleSessionUncheckedUpdateWithoutSchoolInput>
    create: XOR<ScheduleSessionCreateWithoutSchoolInput, ScheduleSessionUncheckedCreateWithoutSchoolInput>
  }

  export type ScheduleSessionUpdateWithWhereUniqueWithoutSchoolInput = {
    where: ScheduleSessionWhereUniqueInput
    data: XOR<ScheduleSessionUpdateWithoutSchoolInput, ScheduleSessionUncheckedUpdateWithoutSchoolInput>
  }

  export type ScheduleSessionUpdateManyWithWhereWithoutSchoolInput = {
    where: ScheduleSessionScalarWhereInput
    data: XOR<ScheduleSessionUpdateManyMutationInput, ScheduleSessionUncheckedUpdateManyWithoutSchoolInput>
  }

  export type ScheduleSessionScalarWhereInput = {
    AND?: ScheduleSessionScalarWhereInput | ScheduleSessionScalarWhereInput[]
    OR?: ScheduleSessionScalarWhereInput[]
    NOT?: ScheduleSessionScalarWhereInput | ScheduleSessionScalarWhereInput[]
    id?: StringFilter<"ScheduleSession"> | string
    weekStart?: StringFilter<"ScheduleSession"> | string
    dayIndex?: IntFilter<"ScheduleSession"> | number
    periodIndex?: IntFilter<"ScheduleSession"> | number
    schoolId?: StringFilter<"ScheduleSession"> | string
    teacherId?: StringNullableFilter<"ScheduleSession"> | string | null
    taId?: StringNullableFilter<"ScheduleSession"> | string | null
    note?: StringNullableFilter<"ScheduleSession"> | string | null
    createdAt?: DateTimeFilter<"ScheduleSession"> | Date | string
    updatedAt?: DateTimeFilter<"ScheduleSession"> | Date | string
  }

  export type ScheduleSessionCreateWithoutTeacherInput = {
    id?: string
    weekStart: string
    dayIndex: number
    periodIndex: number
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    school: SchoolCreateNestedOneWithoutSessionsInput
    ta?: TeachingAssistantCreateNestedOneWithoutSessionsInput
  }

  export type ScheduleSessionUncheckedCreateWithoutTeacherInput = {
    id?: string
    weekStart: string
    dayIndex: number
    periodIndex: number
    schoolId: string
    taId?: string | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleSessionCreateOrConnectWithoutTeacherInput = {
    where: ScheduleSessionWhereUniqueInput
    create: XOR<ScheduleSessionCreateWithoutTeacherInput, ScheduleSessionUncheckedCreateWithoutTeacherInput>
  }

  export type ScheduleSessionCreateManyTeacherInputEnvelope = {
    data: ScheduleSessionCreateManyTeacherInput | ScheduleSessionCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type ScheduleSessionUpsertWithWhereUniqueWithoutTeacherInput = {
    where: ScheduleSessionWhereUniqueInput
    update: XOR<ScheduleSessionUpdateWithoutTeacherInput, ScheduleSessionUncheckedUpdateWithoutTeacherInput>
    create: XOR<ScheduleSessionCreateWithoutTeacherInput, ScheduleSessionUncheckedCreateWithoutTeacherInput>
  }

  export type ScheduleSessionUpdateWithWhereUniqueWithoutTeacherInput = {
    where: ScheduleSessionWhereUniqueInput
    data: XOR<ScheduleSessionUpdateWithoutTeacherInput, ScheduleSessionUncheckedUpdateWithoutTeacherInput>
  }

  export type ScheduleSessionUpdateManyWithWhereWithoutTeacherInput = {
    where: ScheduleSessionScalarWhereInput
    data: XOR<ScheduleSessionUpdateManyMutationInput, ScheduleSessionUncheckedUpdateManyWithoutTeacherInput>
  }

  export type ScheduleSessionCreateWithoutTaInput = {
    id?: string
    weekStart: string
    dayIndex: number
    periodIndex: number
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    school: SchoolCreateNestedOneWithoutSessionsInput
    teacher?: TeacherCreateNestedOneWithoutSessionsInput
  }

  export type ScheduleSessionUncheckedCreateWithoutTaInput = {
    id?: string
    weekStart: string
    dayIndex: number
    periodIndex: number
    schoolId: string
    teacherId?: string | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleSessionCreateOrConnectWithoutTaInput = {
    where: ScheduleSessionWhereUniqueInput
    create: XOR<ScheduleSessionCreateWithoutTaInput, ScheduleSessionUncheckedCreateWithoutTaInput>
  }

  export type ScheduleSessionCreateManyTaInputEnvelope = {
    data: ScheduleSessionCreateManyTaInput | ScheduleSessionCreateManyTaInput[]
    skipDuplicates?: boolean
  }

  export type ScheduleSessionUpsertWithWhereUniqueWithoutTaInput = {
    where: ScheduleSessionWhereUniqueInput
    update: XOR<ScheduleSessionUpdateWithoutTaInput, ScheduleSessionUncheckedUpdateWithoutTaInput>
    create: XOR<ScheduleSessionCreateWithoutTaInput, ScheduleSessionUncheckedCreateWithoutTaInput>
  }

  export type ScheduleSessionUpdateWithWhereUniqueWithoutTaInput = {
    where: ScheduleSessionWhereUniqueInput
    data: XOR<ScheduleSessionUpdateWithoutTaInput, ScheduleSessionUncheckedUpdateWithoutTaInput>
  }

  export type ScheduleSessionUpdateManyWithWhereWithoutTaInput = {
    where: ScheduleSessionScalarWhereInput
    data: XOR<ScheduleSessionUpdateManyMutationInput, ScheduleSessionUncheckedUpdateManyWithoutTaInput>
  }

  export type SchoolCreateWithoutTimingsInput = {
    id?: string
    name: string
    color: string
    bg: string
    order?: number
    createdAt?: Date | string
    sessions?: ScheduleSessionCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUncheckedCreateWithoutTimingsInput = {
    id?: string
    name: string
    color: string
    bg: string
    order?: number
    createdAt?: Date | string
    sessions?: ScheduleSessionUncheckedCreateNestedManyWithoutSchoolInput
  }

  export type SchoolCreateOrConnectWithoutTimingsInput = {
    where: SchoolWhereUniqueInput
    create: XOR<SchoolCreateWithoutTimingsInput, SchoolUncheckedCreateWithoutTimingsInput>
  }

  export type SchoolUpsertWithoutTimingsInput = {
    update: XOR<SchoolUpdateWithoutTimingsInput, SchoolUncheckedUpdateWithoutTimingsInput>
    create: XOR<SchoolCreateWithoutTimingsInput, SchoolUncheckedCreateWithoutTimingsInput>
    where?: SchoolWhereInput
  }

  export type SchoolUpdateToOneWithWhereWithoutTimingsInput = {
    where?: SchoolWhereInput
    data: XOR<SchoolUpdateWithoutTimingsInput, SchoolUncheckedUpdateWithoutTimingsInput>
  }

  export type SchoolUpdateWithoutTimingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    bg?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: ScheduleSessionUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateWithoutTimingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    bg?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: ScheduleSessionUncheckedUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolCreateWithoutSessionsInput = {
    id?: string
    name: string
    color: string
    bg: string
    order?: number
    createdAt?: Date | string
    timings?: SchoolTimingCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUncheckedCreateWithoutSessionsInput = {
    id?: string
    name: string
    color: string
    bg: string
    order?: number
    createdAt?: Date | string
    timings?: SchoolTimingUncheckedCreateNestedManyWithoutSchoolInput
  }

  export type SchoolCreateOrConnectWithoutSessionsInput = {
    where: SchoolWhereUniqueInput
    create: XOR<SchoolCreateWithoutSessionsInput, SchoolUncheckedCreateWithoutSessionsInput>
  }

  export type TeacherCreateWithoutSessionsInput = {
    id?: string
    name: string
    color: string
    createdAt?: Date | string
  }

  export type TeacherUncheckedCreateWithoutSessionsInput = {
    id?: string
    name: string
    color: string
    createdAt?: Date | string
  }

  export type TeacherCreateOrConnectWithoutSessionsInput = {
    where: TeacherWhereUniqueInput
    create: XOR<TeacherCreateWithoutSessionsInput, TeacherUncheckedCreateWithoutSessionsInput>
  }

  export type TeachingAssistantCreateWithoutSessionsInput = {
    id?: string
    name: string
    color: string
    createdAt?: Date | string
  }

  export type TeachingAssistantUncheckedCreateWithoutSessionsInput = {
    id?: string
    name: string
    color: string
    createdAt?: Date | string
  }

  export type TeachingAssistantCreateOrConnectWithoutSessionsInput = {
    where: TeachingAssistantWhereUniqueInput
    create: XOR<TeachingAssistantCreateWithoutSessionsInput, TeachingAssistantUncheckedCreateWithoutSessionsInput>
  }

  export type SchoolUpsertWithoutSessionsInput = {
    update: XOR<SchoolUpdateWithoutSessionsInput, SchoolUncheckedUpdateWithoutSessionsInput>
    create: XOR<SchoolCreateWithoutSessionsInput, SchoolUncheckedCreateWithoutSessionsInput>
    where?: SchoolWhereInput
  }

  export type SchoolUpdateToOneWithWhereWithoutSessionsInput = {
    where?: SchoolWhereInput
    data: XOR<SchoolUpdateWithoutSessionsInput, SchoolUncheckedUpdateWithoutSessionsInput>
  }

  export type SchoolUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    bg?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timings?: SchoolTimingUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    bg?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timings?: SchoolTimingUncheckedUpdateManyWithoutSchoolNestedInput
  }

  export type TeacherUpsertWithoutSessionsInput = {
    update: XOR<TeacherUpdateWithoutSessionsInput, TeacherUncheckedUpdateWithoutSessionsInput>
    create: XOR<TeacherCreateWithoutSessionsInput, TeacherUncheckedCreateWithoutSessionsInput>
    where?: TeacherWhereInput
  }

  export type TeacherUpdateToOneWithWhereWithoutSessionsInput = {
    where?: TeacherWhereInput
    data: XOR<TeacherUpdateWithoutSessionsInput, TeacherUncheckedUpdateWithoutSessionsInput>
  }

  export type TeacherUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeachingAssistantUpsertWithoutSessionsInput = {
    update: XOR<TeachingAssistantUpdateWithoutSessionsInput, TeachingAssistantUncheckedUpdateWithoutSessionsInput>
    create: XOR<TeachingAssistantCreateWithoutSessionsInput, TeachingAssistantUncheckedCreateWithoutSessionsInput>
    where?: TeachingAssistantWhereInput
  }

  export type TeachingAssistantUpdateToOneWithWhereWithoutSessionsInput = {
    where?: TeachingAssistantWhereInput
    data: XOR<TeachingAssistantUpdateWithoutSessionsInput, TeachingAssistantUncheckedUpdateWithoutSessionsInput>
  }

  export type TeachingAssistantUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeachingAssistantUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchoolTimingCreateManySchoolInput = {
    id?: string
    period2Start: string
    period3Start: string
  }

  export type ScheduleSessionCreateManySchoolInput = {
    id?: string
    weekStart: string
    dayIndex: number
    periodIndex: number
    teacherId?: string | null
    taId?: string | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SchoolTimingUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    period2Start?: StringFieldUpdateOperationsInput | string
    period3Start?: StringFieldUpdateOperationsInput | string
  }

  export type SchoolTimingUncheckedUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    period2Start?: StringFieldUpdateOperationsInput | string
    period3Start?: StringFieldUpdateOperationsInput | string
  }

  export type SchoolTimingUncheckedUpdateManyWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    period2Start?: StringFieldUpdateOperationsInput | string
    period3Start?: StringFieldUpdateOperationsInput | string
  }

  export type ScheduleSessionUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekStart?: StringFieldUpdateOperationsInput | string
    dayIndex?: IntFieldUpdateOperationsInput | number
    periodIndex?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher?: TeacherUpdateOneWithoutSessionsNestedInput
    ta?: TeachingAssistantUpdateOneWithoutSessionsNestedInput
  }

  export type ScheduleSessionUncheckedUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekStart?: StringFieldUpdateOperationsInput | string
    dayIndex?: IntFieldUpdateOperationsInput | number
    periodIndex?: IntFieldUpdateOperationsInput | number
    teacherId?: NullableStringFieldUpdateOperationsInput | string | null
    taId?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleSessionUncheckedUpdateManyWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekStart?: StringFieldUpdateOperationsInput | string
    dayIndex?: IntFieldUpdateOperationsInput | number
    periodIndex?: IntFieldUpdateOperationsInput | number
    teacherId?: NullableStringFieldUpdateOperationsInput | string | null
    taId?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleSessionCreateManyTeacherInput = {
    id?: string
    weekStart: string
    dayIndex: number
    periodIndex: number
    schoolId: string
    taId?: string | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleSessionUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekStart?: StringFieldUpdateOperationsInput | string
    dayIndex?: IntFieldUpdateOperationsInput | number
    periodIndex?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: SchoolUpdateOneRequiredWithoutSessionsNestedInput
    ta?: TeachingAssistantUpdateOneWithoutSessionsNestedInput
  }

  export type ScheduleSessionUncheckedUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekStart?: StringFieldUpdateOperationsInput | string
    dayIndex?: IntFieldUpdateOperationsInput | number
    periodIndex?: IntFieldUpdateOperationsInput | number
    schoolId?: StringFieldUpdateOperationsInput | string
    taId?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleSessionUncheckedUpdateManyWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekStart?: StringFieldUpdateOperationsInput | string
    dayIndex?: IntFieldUpdateOperationsInput | number
    periodIndex?: IntFieldUpdateOperationsInput | number
    schoolId?: StringFieldUpdateOperationsInput | string
    taId?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleSessionCreateManyTaInput = {
    id?: string
    weekStart: string
    dayIndex: number
    periodIndex: number
    schoolId: string
    teacherId?: string | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleSessionUpdateWithoutTaInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekStart?: StringFieldUpdateOperationsInput | string
    dayIndex?: IntFieldUpdateOperationsInput | number
    periodIndex?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: SchoolUpdateOneRequiredWithoutSessionsNestedInput
    teacher?: TeacherUpdateOneWithoutSessionsNestedInput
  }

  export type ScheduleSessionUncheckedUpdateWithoutTaInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekStart?: StringFieldUpdateOperationsInput | string
    dayIndex?: IntFieldUpdateOperationsInput | number
    periodIndex?: IntFieldUpdateOperationsInput | number
    schoolId?: StringFieldUpdateOperationsInput | string
    teacherId?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleSessionUncheckedUpdateManyWithoutTaInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekStart?: StringFieldUpdateOperationsInput | string
    dayIndex?: IntFieldUpdateOperationsInput | number
    periodIndex?: IntFieldUpdateOperationsInput | number
    schoolId?: StringFieldUpdateOperationsInput | string
    teacherId?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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