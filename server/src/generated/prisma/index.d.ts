
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Libro
 * 
 */
export type Libro = $Result.DefaultSelection<Prisma.$LibroPayload>
/**
 * Model Pagina
 * 
 */
export type Pagina = $Result.DefaultSelection<Prisma.$PaginaPayload>
/**
 * Model Progreso
 * 
 */
export type Progreso = $Result.DefaultSelection<Prisma.$ProgresoPayload>
/**
 * Model Auditoria
 * 
 */
export type Auditoria = $Result.DefaultSelection<Prisma.$AuditoriaPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Rol: {
  USUARIO: 'USUARIO',
  ADMIN: 'ADMIN'
};

export type Rol = (typeof Rol)[keyof typeof Rol]


export const EstadoLectura: {
  LEYENDO: 'LEYENDO',
  TERMINADO: 'TERMINADO'
};

export type EstadoLectura = (typeof EstadoLectura)[keyof typeof EstadoLectura]

}

export type Rol = $Enums.Rol

export const Rol: typeof $Enums.Rol

export type EstadoLectura = $Enums.EstadoLectura

export const EstadoLectura: typeof $Enums.EstadoLectura

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
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
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.libro`: Exposes CRUD operations for the **Libro** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Libros
    * const libros = await prisma.libro.findMany()
    * ```
    */
  get libro(): Prisma.LibroDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pagina`: Exposes CRUD operations for the **Pagina** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Paginas
    * const paginas = await prisma.pagina.findMany()
    * ```
    */
  get pagina(): Prisma.PaginaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.progreso`: Exposes CRUD operations for the **Progreso** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Progresos
    * const progresos = await prisma.progreso.findMany()
    * ```
    */
  get progreso(): Prisma.ProgresoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditoria`: Exposes CRUD operations for the **Auditoria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Auditorias
    * const auditorias = await prisma.auditoria.findMany()
    * ```
    */
  get auditoria(): Prisma.AuditoriaDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.10.1
   * Query Engine version: d1b3f377ca835d73fd50954a5e22128b9ebdd6b8
   */
  export type PrismaVersion = {
    client: string
    engine: string
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
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

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
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
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
    Usuario: 'Usuario',
    Libro: 'Libro',
    Pagina: 'Pagina',
    Progreso: 'Progreso',
    Auditoria: 'Auditoria'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "usuario" | "libro" | "pagina" | "progreso" | "auditoria"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Libro: {
        payload: Prisma.$LibroPayload<ExtArgs>
        fields: Prisma.LibroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LibroFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LibroFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibroPayload>
          }
          findFirst: {
            args: Prisma.LibroFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LibroFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibroPayload>
          }
          findMany: {
            args: Prisma.LibroFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibroPayload>[]
          }
          create: {
            args: Prisma.LibroCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibroPayload>
          }
          createMany: {
            args: Prisma.LibroCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LibroCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibroPayload>[]
          }
          delete: {
            args: Prisma.LibroDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibroPayload>
          }
          update: {
            args: Prisma.LibroUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibroPayload>
          }
          deleteMany: {
            args: Prisma.LibroDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LibroUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LibroUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibroPayload>[]
          }
          upsert: {
            args: Prisma.LibroUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibroPayload>
          }
          aggregate: {
            args: Prisma.LibroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLibro>
          }
          groupBy: {
            args: Prisma.LibroGroupByArgs<ExtArgs>
            result: $Utils.Optional<LibroGroupByOutputType>[]
          }
          count: {
            args: Prisma.LibroCountArgs<ExtArgs>
            result: $Utils.Optional<LibroCountAggregateOutputType> | number
          }
        }
      }
      Pagina: {
        payload: Prisma.$PaginaPayload<ExtArgs>
        fields: Prisma.PaginaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaginaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaginaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaginaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaginaPayload>
          }
          findFirst: {
            args: Prisma.PaginaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaginaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaginaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaginaPayload>
          }
          findMany: {
            args: Prisma.PaginaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaginaPayload>[]
          }
          create: {
            args: Prisma.PaginaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaginaPayload>
          }
          createMany: {
            args: Prisma.PaginaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaginaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaginaPayload>[]
          }
          delete: {
            args: Prisma.PaginaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaginaPayload>
          }
          update: {
            args: Prisma.PaginaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaginaPayload>
          }
          deleteMany: {
            args: Prisma.PaginaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaginaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaginaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaginaPayload>[]
          }
          upsert: {
            args: Prisma.PaginaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaginaPayload>
          }
          aggregate: {
            args: Prisma.PaginaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePagina>
          }
          groupBy: {
            args: Prisma.PaginaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaginaGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaginaCountArgs<ExtArgs>
            result: $Utils.Optional<PaginaCountAggregateOutputType> | number
          }
        }
      }
      Progreso: {
        payload: Prisma.$ProgresoPayload<ExtArgs>
        fields: Prisma.ProgresoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProgresoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProgresoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoPayload>
          }
          findFirst: {
            args: Prisma.ProgresoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProgresoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoPayload>
          }
          findMany: {
            args: Prisma.ProgresoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoPayload>[]
          }
          create: {
            args: Prisma.ProgresoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoPayload>
          }
          createMany: {
            args: Prisma.ProgresoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProgresoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoPayload>[]
          }
          delete: {
            args: Prisma.ProgresoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoPayload>
          }
          update: {
            args: Prisma.ProgresoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoPayload>
          }
          deleteMany: {
            args: Prisma.ProgresoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProgresoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProgresoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoPayload>[]
          }
          upsert: {
            args: Prisma.ProgresoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoPayload>
          }
          aggregate: {
            args: Prisma.ProgresoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProgreso>
          }
          groupBy: {
            args: Prisma.ProgresoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProgresoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProgresoCountArgs<ExtArgs>
            result: $Utils.Optional<ProgresoCountAggregateOutputType> | number
          }
        }
      }
      Auditoria: {
        payload: Prisma.$AuditoriaPayload<ExtArgs>
        fields: Prisma.AuditoriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditoriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditoriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditoriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditoriaPayload>
          }
          findFirst: {
            args: Prisma.AuditoriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditoriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditoriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditoriaPayload>
          }
          findMany: {
            args: Prisma.AuditoriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditoriaPayload>[]
          }
          create: {
            args: Prisma.AuditoriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditoriaPayload>
          }
          createMany: {
            args: Prisma.AuditoriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditoriaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditoriaPayload>[]
          }
          delete: {
            args: Prisma.AuditoriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditoriaPayload>
          }
          update: {
            args: Prisma.AuditoriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditoriaPayload>
          }
          deleteMany: {
            args: Prisma.AuditoriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditoriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditoriaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditoriaPayload>[]
          }
          upsert: {
            args: Prisma.AuditoriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditoriaPayload>
          }
          aggregate: {
            args: Prisma.AuditoriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditoria>
          }
          groupBy: {
            args: Prisma.AuditoriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditoriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditoriaCountArgs<ExtArgs>
            result: $Utils.Optional<AuditoriaCountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    usuario?: UsuarioOmit
    libro?: LibroOmit
    pagina?: PaginaOmit
    progreso?: ProgresoOmit
    auditoria?: AuditoriaOmit
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
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    progresos: number
    auditorias: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    progresos?: boolean | UsuarioCountOutputTypeCountProgresosArgs
    auditorias?: boolean | UsuarioCountOutputTypeCountAuditoriasArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountProgresosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgresoWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountAuditoriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditoriaWhereInput
  }


  /**
   * Count Type LibroCountOutputType
   */

  export type LibroCountOutputType = {
    paginas: number
    progresos: number
  }

  export type LibroCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paginas?: boolean | LibroCountOutputTypeCountPaginasArgs
    progresos?: boolean | LibroCountOutputTypeCountProgresosArgs
  }

  // Custom InputTypes
  /**
   * LibroCountOutputType without action
   */
  export type LibroCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibroCountOutputType
     */
    select?: LibroCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LibroCountOutputType without action
   */
  export type LibroCountOutputTypeCountPaginasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaginaWhereInput
  }

  /**
   * LibroCountOutputType without action
   */
  export type LibroCountOutputTypeCountProgresosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgresoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    intentosFallidos: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    intentosFallidos: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    nombre: string | null
    rol: $Enums.Rol | null
    intentosFallidos: number | null
    bloqueadoHasta: Date | null
    ultimoAcceso: Date | null
    creadoEn: Date | null
    actualizadoEn: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    nombre: string | null
    rol: $Enums.Rol | null
    intentosFallidos: number | null
    bloqueadoHasta: Date | null
    ultimoAcceso: Date | null
    creadoEn: Date | null
    actualizadoEn: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    nombre: number
    rol: number
    intentosFallidos: number
    bloqueadoHasta: number
    ultimoAcceso: number
    creadoEn: number
    actualizadoEn: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    intentosFallidos?: true
  }

  export type UsuarioSumAggregateInputType = {
    intentosFallidos?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    nombre?: true
    rol?: true
    intentosFallidos?: true
    bloqueadoHasta?: true
    ultimoAcceso?: true
    creadoEn?: true
    actualizadoEn?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    nombre?: true
    rol?: true
    intentosFallidos?: true
    bloqueadoHasta?: true
    ultimoAcceso?: true
    creadoEn?: true
    actualizadoEn?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    nombre?: true
    rol?: true
    intentosFallidos?: true
    bloqueadoHasta?: true
    ultimoAcceso?: true
    creadoEn?: true
    actualizadoEn?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: string
    email: string
    passwordHash: string
    nombre: string
    rol: $Enums.Rol
    intentosFallidos: number
    bloqueadoHasta: Date | null
    ultimoAcceso: Date | null
    creadoEn: Date
    actualizadoEn: Date
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    nombre?: boolean
    rol?: boolean
    intentosFallidos?: boolean
    bloqueadoHasta?: boolean
    ultimoAcceso?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
    progresos?: boolean | Usuario$progresosArgs<ExtArgs>
    auditorias?: boolean | Usuario$auditoriasArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    nombre?: boolean
    rol?: boolean
    intentosFallidos?: boolean
    bloqueadoHasta?: boolean
    ultimoAcceso?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    nombre?: boolean
    rol?: boolean
    intentosFallidos?: boolean
    bloqueadoHasta?: boolean
    ultimoAcceso?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    nombre?: boolean
    rol?: boolean
    intentosFallidos?: boolean
    bloqueadoHasta?: boolean
    ultimoAcceso?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "passwordHash" | "nombre" | "rol" | "intentosFallidos" | "bloqueadoHasta" | "ultimoAcceso" | "creadoEn" | "actualizadoEn", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    progresos?: boolean | Usuario$progresosArgs<ExtArgs>
    auditorias?: boolean | Usuario$auditoriasArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      progresos: Prisma.$ProgresoPayload<ExtArgs>[]
      auditorias: Prisma.$AuditoriaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      passwordHash: string
      nombre: string
      rol: $Enums.Rol
      intentosFallidos: number
      bloqueadoHasta: Date | null
      ultimoAcceso: Date | null
      creadoEn: Date
      actualizadoEn: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    progresos<T extends Usuario$progresosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$progresosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgresoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    auditorias<T extends Usuario$auditoriasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$auditoriasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly passwordHash: FieldRef<"Usuario", 'String'>
    readonly nombre: FieldRef<"Usuario", 'String'>
    readonly rol: FieldRef<"Usuario", 'Rol'>
    readonly intentosFallidos: FieldRef<"Usuario", 'Int'>
    readonly bloqueadoHasta: FieldRef<"Usuario", 'DateTime'>
    readonly ultimoAcceso: FieldRef<"Usuario", 'DateTime'>
    readonly creadoEn: FieldRef<"Usuario", 'DateTime'>
    readonly actualizadoEn: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.progresos
   */
  export type Usuario$progresosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progreso
     */
    select?: ProgresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progreso
     */
    omit?: ProgresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoInclude<ExtArgs> | null
    where?: ProgresoWhereInput
    orderBy?: ProgresoOrderByWithRelationInput | ProgresoOrderByWithRelationInput[]
    cursor?: ProgresoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgresoScalarFieldEnum | ProgresoScalarFieldEnum[]
  }

  /**
   * Usuario.auditorias
   */
  export type Usuario$auditoriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auditoria
     */
    select?: AuditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auditoria
     */
    omit?: AuditoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditoriaInclude<ExtArgs> | null
    where?: AuditoriaWhereInput
    orderBy?: AuditoriaOrderByWithRelationInput | AuditoriaOrderByWithRelationInput[]
    cursor?: AuditoriaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditoriaScalarFieldEnum | AuditoriaScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Libro
   */

  export type AggregateLibro = {
    _count: LibroCountAggregateOutputType | null
    _min: LibroMinAggregateOutputType | null
    _max: LibroMaxAggregateOutputType | null
  }

  export type LibroMinAggregateOutputType = {
    id: string | null
    titulo: string | null
    autor: string | null
    descripcion: string | null
    portadaUrl: string | null
    publicado: boolean | null
    creadoEn: Date | null
  }

  export type LibroMaxAggregateOutputType = {
    id: string | null
    titulo: string | null
    autor: string | null
    descripcion: string | null
    portadaUrl: string | null
    publicado: boolean | null
    creadoEn: Date | null
  }

  export type LibroCountAggregateOutputType = {
    id: number
    titulo: number
    autor: number
    descripcion: number
    portadaUrl: number
    publicado: number
    creadoEn: number
    _all: number
  }


  export type LibroMinAggregateInputType = {
    id?: true
    titulo?: true
    autor?: true
    descripcion?: true
    portadaUrl?: true
    publicado?: true
    creadoEn?: true
  }

  export type LibroMaxAggregateInputType = {
    id?: true
    titulo?: true
    autor?: true
    descripcion?: true
    portadaUrl?: true
    publicado?: true
    creadoEn?: true
  }

  export type LibroCountAggregateInputType = {
    id?: true
    titulo?: true
    autor?: true
    descripcion?: true
    portadaUrl?: true
    publicado?: true
    creadoEn?: true
    _all?: true
  }

  export type LibroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Libro to aggregate.
     */
    where?: LibroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Libros to fetch.
     */
    orderBy?: LibroOrderByWithRelationInput | LibroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LibroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Libros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Libros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Libros
    **/
    _count?: true | LibroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LibroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LibroMaxAggregateInputType
  }

  export type GetLibroAggregateType<T extends LibroAggregateArgs> = {
        [P in keyof T & keyof AggregateLibro]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLibro[P]>
      : GetScalarType<T[P], AggregateLibro[P]>
  }




  export type LibroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LibroWhereInput
    orderBy?: LibroOrderByWithAggregationInput | LibroOrderByWithAggregationInput[]
    by: LibroScalarFieldEnum[] | LibroScalarFieldEnum
    having?: LibroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LibroCountAggregateInputType | true
    _min?: LibroMinAggregateInputType
    _max?: LibroMaxAggregateInputType
  }

  export type LibroGroupByOutputType = {
    id: string
    titulo: string
    autor: string
    descripcion: string
    portadaUrl: string | null
    publicado: boolean
    creadoEn: Date
    _count: LibroCountAggregateOutputType | null
    _min: LibroMinAggregateOutputType | null
    _max: LibroMaxAggregateOutputType | null
  }

  type GetLibroGroupByPayload<T extends LibroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LibroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LibroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LibroGroupByOutputType[P]>
            : GetScalarType<T[P], LibroGroupByOutputType[P]>
        }
      >
    >


  export type LibroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    autor?: boolean
    descripcion?: boolean
    portadaUrl?: boolean
    publicado?: boolean
    creadoEn?: boolean
    paginas?: boolean | Libro$paginasArgs<ExtArgs>
    progresos?: boolean | Libro$progresosArgs<ExtArgs>
    _count?: boolean | LibroCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["libro"]>

  export type LibroSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    autor?: boolean
    descripcion?: boolean
    portadaUrl?: boolean
    publicado?: boolean
    creadoEn?: boolean
  }, ExtArgs["result"]["libro"]>

  export type LibroSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    autor?: boolean
    descripcion?: boolean
    portadaUrl?: boolean
    publicado?: boolean
    creadoEn?: boolean
  }, ExtArgs["result"]["libro"]>

  export type LibroSelectScalar = {
    id?: boolean
    titulo?: boolean
    autor?: boolean
    descripcion?: boolean
    portadaUrl?: boolean
    publicado?: boolean
    creadoEn?: boolean
  }

  export type LibroOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "autor" | "descripcion" | "portadaUrl" | "publicado" | "creadoEn", ExtArgs["result"]["libro"]>
  export type LibroInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paginas?: boolean | Libro$paginasArgs<ExtArgs>
    progresos?: boolean | Libro$progresosArgs<ExtArgs>
    _count?: boolean | LibroCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LibroIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LibroIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LibroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Libro"
    objects: {
      paginas: Prisma.$PaginaPayload<ExtArgs>[]
      progresos: Prisma.$ProgresoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      titulo: string
      autor: string
      descripcion: string
      portadaUrl: string | null
      publicado: boolean
      creadoEn: Date
    }, ExtArgs["result"]["libro"]>
    composites: {}
  }

  type LibroGetPayload<S extends boolean | null | undefined | LibroDefaultArgs> = $Result.GetResult<Prisma.$LibroPayload, S>

  type LibroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LibroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LibroCountAggregateInputType | true
    }

  export interface LibroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Libro'], meta: { name: 'Libro' } }
    /**
     * Find zero or one Libro that matches the filter.
     * @param {LibroFindUniqueArgs} args - Arguments to find a Libro
     * @example
     * // Get one Libro
     * const libro = await prisma.libro.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LibroFindUniqueArgs>(args: SelectSubset<T, LibroFindUniqueArgs<ExtArgs>>): Prisma__LibroClient<$Result.GetResult<Prisma.$LibroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Libro that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LibroFindUniqueOrThrowArgs} args - Arguments to find a Libro
     * @example
     * // Get one Libro
     * const libro = await prisma.libro.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LibroFindUniqueOrThrowArgs>(args: SelectSubset<T, LibroFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LibroClient<$Result.GetResult<Prisma.$LibroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Libro that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibroFindFirstArgs} args - Arguments to find a Libro
     * @example
     * // Get one Libro
     * const libro = await prisma.libro.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LibroFindFirstArgs>(args?: SelectSubset<T, LibroFindFirstArgs<ExtArgs>>): Prisma__LibroClient<$Result.GetResult<Prisma.$LibroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Libro that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibroFindFirstOrThrowArgs} args - Arguments to find a Libro
     * @example
     * // Get one Libro
     * const libro = await prisma.libro.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LibroFindFirstOrThrowArgs>(args?: SelectSubset<T, LibroFindFirstOrThrowArgs<ExtArgs>>): Prisma__LibroClient<$Result.GetResult<Prisma.$LibroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Libros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Libros
     * const libros = await prisma.libro.findMany()
     * 
     * // Get first 10 Libros
     * const libros = await prisma.libro.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const libroWithIdOnly = await prisma.libro.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LibroFindManyArgs>(args?: SelectSubset<T, LibroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LibroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Libro.
     * @param {LibroCreateArgs} args - Arguments to create a Libro.
     * @example
     * // Create one Libro
     * const Libro = await prisma.libro.create({
     *   data: {
     *     // ... data to create a Libro
     *   }
     * })
     * 
     */
    create<T extends LibroCreateArgs>(args: SelectSubset<T, LibroCreateArgs<ExtArgs>>): Prisma__LibroClient<$Result.GetResult<Prisma.$LibroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Libros.
     * @param {LibroCreateManyArgs} args - Arguments to create many Libros.
     * @example
     * // Create many Libros
     * const libro = await prisma.libro.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LibroCreateManyArgs>(args?: SelectSubset<T, LibroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Libros and returns the data saved in the database.
     * @param {LibroCreateManyAndReturnArgs} args - Arguments to create many Libros.
     * @example
     * // Create many Libros
     * const libro = await prisma.libro.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Libros and only return the `id`
     * const libroWithIdOnly = await prisma.libro.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LibroCreateManyAndReturnArgs>(args?: SelectSubset<T, LibroCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LibroPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Libro.
     * @param {LibroDeleteArgs} args - Arguments to delete one Libro.
     * @example
     * // Delete one Libro
     * const Libro = await prisma.libro.delete({
     *   where: {
     *     // ... filter to delete one Libro
     *   }
     * })
     * 
     */
    delete<T extends LibroDeleteArgs>(args: SelectSubset<T, LibroDeleteArgs<ExtArgs>>): Prisma__LibroClient<$Result.GetResult<Prisma.$LibroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Libro.
     * @param {LibroUpdateArgs} args - Arguments to update one Libro.
     * @example
     * // Update one Libro
     * const libro = await prisma.libro.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LibroUpdateArgs>(args: SelectSubset<T, LibroUpdateArgs<ExtArgs>>): Prisma__LibroClient<$Result.GetResult<Prisma.$LibroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Libros.
     * @param {LibroDeleteManyArgs} args - Arguments to filter Libros to delete.
     * @example
     * // Delete a few Libros
     * const { count } = await prisma.libro.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LibroDeleteManyArgs>(args?: SelectSubset<T, LibroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Libros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Libros
     * const libro = await prisma.libro.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LibroUpdateManyArgs>(args: SelectSubset<T, LibroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Libros and returns the data updated in the database.
     * @param {LibroUpdateManyAndReturnArgs} args - Arguments to update many Libros.
     * @example
     * // Update many Libros
     * const libro = await prisma.libro.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Libros and only return the `id`
     * const libroWithIdOnly = await prisma.libro.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LibroUpdateManyAndReturnArgs>(args: SelectSubset<T, LibroUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LibroPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Libro.
     * @param {LibroUpsertArgs} args - Arguments to update or create a Libro.
     * @example
     * // Update or create a Libro
     * const libro = await prisma.libro.upsert({
     *   create: {
     *     // ... data to create a Libro
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Libro we want to update
     *   }
     * })
     */
    upsert<T extends LibroUpsertArgs>(args: SelectSubset<T, LibroUpsertArgs<ExtArgs>>): Prisma__LibroClient<$Result.GetResult<Prisma.$LibroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Libros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibroCountArgs} args - Arguments to filter Libros to count.
     * @example
     * // Count the number of Libros
     * const count = await prisma.libro.count({
     *   where: {
     *     // ... the filter for the Libros we want to count
     *   }
     * })
    **/
    count<T extends LibroCountArgs>(
      args?: Subset<T, LibroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LibroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Libro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LibroAggregateArgs>(args: Subset<T, LibroAggregateArgs>): Prisma.PrismaPromise<GetLibroAggregateType<T>>

    /**
     * Group by Libro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibroGroupByArgs} args - Group by arguments.
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
      T extends LibroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LibroGroupByArgs['orderBy'] }
        : { orderBy?: LibroGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LibroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLibroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Libro model
   */
  readonly fields: LibroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Libro.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LibroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    paginas<T extends Libro$paginasArgs<ExtArgs> = {}>(args?: Subset<T, Libro$paginasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaginaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    progresos<T extends Libro$progresosArgs<ExtArgs> = {}>(args?: Subset<T, Libro$progresosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgresoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Libro model
   */
  interface LibroFieldRefs {
    readonly id: FieldRef<"Libro", 'String'>
    readonly titulo: FieldRef<"Libro", 'String'>
    readonly autor: FieldRef<"Libro", 'String'>
    readonly descripcion: FieldRef<"Libro", 'String'>
    readonly portadaUrl: FieldRef<"Libro", 'String'>
    readonly publicado: FieldRef<"Libro", 'Boolean'>
    readonly creadoEn: FieldRef<"Libro", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Libro findUnique
   */
  export type LibroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Libro
     */
    select?: LibroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Libro
     */
    omit?: LibroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibroInclude<ExtArgs> | null
    /**
     * Filter, which Libro to fetch.
     */
    where: LibroWhereUniqueInput
  }

  /**
   * Libro findUniqueOrThrow
   */
  export type LibroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Libro
     */
    select?: LibroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Libro
     */
    omit?: LibroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibroInclude<ExtArgs> | null
    /**
     * Filter, which Libro to fetch.
     */
    where: LibroWhereUniqueInput
  }

  /**
   * Libro findFirst
   */
  export type LibroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Libro
     */
    select?: LibroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Libro
     */
    omit?: LibroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibroInclude<ExtArgs> | null
    /**
     * Filter, which Libro to fetch.
     */
    where?: LibroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Libros to fetch.
     */
    orderBy?: LibroOrderByWithRelationInput | LibroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Libros.
     */
    cursor?: LibroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Libros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Libros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Libros.
     */
    distinct?: LibroScalarFieldEnum | LibroScalarFieldEnum[]
  }

  /**
   * Libro findFirstOrThrow
   */
  export type LibroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Libro
     */
    select?: LibroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Libro
     */
    omit?: LibroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibroInclude<ExtArgs> | null
    /**
     * Filter, which Libro to fetch.
     */
    where?: LibroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Libros to fetch.
     */
    orderBy?: LibroOrderByWithRelationInput | LibroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Libros.
     */
    cursor?: LibroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Libros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Libros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Libros.
     */
    distinct?: LibroScalarFieldEnum | LibroScalarFieldEnum[]
  }

  /**
   * Libro findMany
   */
  export type LibroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Libro
     */
    select?: LibroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Libro
     */
    omit?: LibroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibroInclude<ExtArgs> | null
    /**
     * Filter, which Libros to fetch.
     */
    where?: LibroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Libros to fetch.
     */
    orderBy?: LibroOrderByWithRelationInput | LibroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Libros.
     */
    cursor?: LibroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Libros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Libros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Libros.
     */
    distinct?: LibroScalarFieldEnum | LibroScalarFieldEnum[]
  }

  /**
   * Libro create
   */
  export type LibroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Libro
     */
    select?: LibroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Libro
     */
    omit?: LibroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibroInclude<ExtArgs> | null
    /**
     * The data needed to create a Libro.
     */
    data: XOR<LibroCreateInput, LibroUncheckedCreateInput>
  }

  /**
   * Libro createMany
   */
  export type LibroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Libros.
     */
    data: LibroCreateManyInput | LibroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Libro createManyAndReturn
   */
  export type LibroCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Libro
     */
    select?: LibroSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Libro
     */
    omit?: LibroOmit<ExtArgs> | null
    /**
     * The data used to create many Libros.
     */
    data: LibroCreateManyInput | LibroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Libro update
   */
  export type LibroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Libro
     */
    select?: LibroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Libro
     */
    omit?: LibroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibroInclude<ExtArgs> | null
    /**
     * The data needed to update a Libro.
     */
    data: XOR<LibroUpdateInput, LibroUncheckedUpdateInput>
    /**
     * Choose, which Libro to update.
     */
    where: LibroWhereUniqueInput
  }

  /**
   * Libro updateMany
   */
  export type LibroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Libros.
     */
    data: XOR<LibroUpdateManyMutationInput, LibroUncheckedUpdateManyInput>
    /**
     * Filter which Libros to update
     */
    where?: LibroWhereInput
    /**
     * Limit how many Libros to update.
     */
    limit?: number
  }

  /**
   * Libro updateManyAndReturn
   */
  export type LibroUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Libro
     */
    select?: LibroSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Libro
     */
    omit?: LibroOmit<ExtArgs> | null
    /**
     * The data used to update Libros.
     */
    data: XOR<LibroUpdateManyMutationInput, LibroUncheckedUpdateManyInput>
    /**
     * Filter which Libros to update
     */
    where?: LibroWhereInput
    /**
     * Limit how many Libros to update.
     */
    limit?: number
  }

  /**
   * Libro upsert
   */
  export type LibroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Libro
     */
    select?: LibroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Libro
     */
    omit?: LibroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibroInclude<ExtArgs> | null
    /**
     * The filter to search for the Libro to update in case it exists.
     */
    where: LibroWhereUniqueInput
    /**
     * In case the Libro found by the `where` argument doesn't exist, create a new Libro with this data.
     */
    create: XOR<LibroCreateInput, LibroUncheckedCreateInput>
    /**
     * In case the Libro was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LibroUpdateInput, LibroUncheckedUpdateInput>
  }

  /**
   * Libro delete
   */
  export type LibroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Libro
     */
    select?: LibroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Libro
     */
    omit?: LibroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibroInclude<ExtArgs> | null
    /**
     * Filter which Libro to delete.
     */
    where: LibroWhereUniqueInput
  }

  /**
   * Libro deleteMany
   */
  export type LibroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Libros to delete
     */
    where?: LibroWhereInput
    /**
     * Limit how many Libros to delete.
     */
    limit?: number
  }

  /**
   * Libro.paginas
   */
  export type Libro$paginasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagina
     */
    select?: PaginaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagina
     */
    omit?: PaginaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaginaInclude<ExtArgs> | null
    where?: PaginaWhereInput
    orderBy?: PaginaOrderByWithRelationInput | PaginaOrderByWithRelationInput[]
    cursor?: PaginaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaginaScalarFieldEnum | PaginaScalarFieldEnum[]
  }

  /**
   * Libro.progresos
   */
  export type Libro$progresosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progreso
     */
    select?: ProgresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progreso
     */
    omit?: ProgresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoInclude<ExtArgs> | null
    where?: ProgresoWhereInput
    orderBy?: ProgresoOrderByWithRelationInput | ProgresoOrderByWithRelationInput[]
    cursor?: ProgresoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgresoScalarFieldEnum | ProgresoScalarFieldEnum[]
  }

  /**
   * Libro without action
   */
  export type LibroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Libro
     */
    select?: LibroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Libro
     */
    omit?: LibroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibroInclude<ExtArgs> | null
  }


  /**
   * Model Pagina
   */

  export type AggregatePagina = {
    _count: PaginaCountAggregateOutputType | null
    _avg: PaginaAvgAggregateOutputType | null
    _sum: PaginaSumAggregateOutputType | null
    _min: PaginaMinAggregateOutputType | null
    _max: PaginaMaxAggregateOutputType | null
  }

  export type PaginaAvgAggregateOutputType = {
    numero: number | null
  }

  export type PaginaSumAggregateOutputType = {
    numero: number | null
  }

  export type PaginaMinAggregateOutputType = {
    id: string | null
    libroId: string | null
    numero: number | null
    contenido: string | null
  }

  export type PaginaMaxAggregateOutputType = {
    id: string | null
    libroId: string | null
    numero: number | null
    contenido: string | null
  }

  export type PaginaCountAggregateOutputType = {
    id: number
    libroId: number
    numero: number
    contenido: number
    _all: number
  }


  export type PaginaAvgAggregateInputType = {
    numero?: true
  }

  export type PaginaSumAggregateInputType = {
    numero?: true
  }

  export type PaginaMinAggregateInputType = {
    id?: true
    libroId?: true
    numero?: true
    contenido?: true
  }

  export type PaginaMaxAggregateInputType = {
    id?: true
    libroId?: true
    numero?: true
    contenido?: true
  }

  export type PaginaCountAggregateInputType = {
    id?: true
    libroId?: true
    numero?: true
    contenido?: true
    _all?: true
  }

  export type PaginaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pagina to aggregate.
     */
    where?: PaginaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Paginas to fetch.
     */
    orderBy?: PaginaOrderByWithRelationInput | PaginaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaginaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Paginas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Paginas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Paginas
    **/
    _count?: true | PaginaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaginaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaginaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaginaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaginaMaxAggregateInputType
  }

  export type GetPaginaAggregateType<T extends PaginaAggregateArgs> = {
        [P in keyof T & keyof AggregatePagina]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePagina[P]>
      : GetScalarType<T[P], AggregatePagina[P]>
  }




  export type PaginaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaginaWhereInput
    orderBy?: PaginaOrderByWithAggregationInput | PaginaOrderByWithAggregationInput[]
    by: PaginaScalarFieldEnum[] | PaginaScalarFieldEnum
    having?: PaginaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaginaCountAggregateInputType | true
    _avg?: PaginaAvgAggregateInputType
    _sum?: PaginaSumAggregateInputType
    _min?: PaginaMinAggregateInputType
    _max?: PaginaMaxAggregateInputType
  }

  export type PaginaGroupByOutputType = {
    id: string
    libroId: string
    numero: number
    contenido: string
    _count: PaginaCountAggregateOutputType | null
    _avg: PaginaAvgAggregateOutputType | null
    _sum: PaginaSumAggregateOutputType | null
    _min: PaginaMinAggregateOutputType | null
    _max: PaginaMaxAggregateOutputType | null
  }

  type GetPaginaGroupByPayload<T extends PaginaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaginaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaginaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaginaGroupByOutputType[P]>
            : GetScalarType<T[P], PaginaGroupByOutputType[P]>
        }
      >
    >


  export type PaginaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    libroId?: boolean
    numero?: boolean
    contenido?: boolean
    libro?: boolean | LibroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pagina"]>

  export type PaginaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    libroId?: boolean
    numero?: boolean
    contenido?: boolean
    libro?: boolean | LibroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pagina"]>

  export type PaginaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    libroId?: boolean
    numero?: boolean
    contenido?: boolean
    libro?: boolean | LibroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pagina"]>

  export type PaginaSelectScalar = {
    id?: boolean
    libroId?: boolean
    numero?: boolean
    contenido?: boolean
  }

  export type PaginaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "libroId" | "numero" | "contenido", ExtArgs["result"]["pagina"]>
  export type PaginaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    libro?: boolean | LibroDefaultArgs<ExtArgs>
  }
  export type PaginaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    libro?: boolean | LibroDefaultArgs<ExtArgs>
  }
  export type PaginaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    libro?: boolean | LibroDefaultArgs<ExtArgs>
  }

  export type $PaginaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pagina"
    objects: {
      libro: Prisma.$LibroPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      libroId: string
      numero: number
      contenido: string
    }, ExtArgs["result"]["pagina"]>
    composites: {}
  }

  type PaginaGetPayload<S extends boolean | null | undefined | PaginaDefaultArgs> = $Result.GetResult<Prisma.$PaginaPayload, S>

  type PaginaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaginaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaginaCountAggregateInputType | true
    }

  export interface PaginaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pagina'], meta: { name: 'Pagina' } }
    /**
     * Find zero or one Pagina that matches the filter.
     * @param {PaginaFindUniqueArgs} args - Arguments to find a Pagina
     * @example
     * // Get one Pagina
     * const pagina = await prisma.pagina.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaginaFindUniqueArgs>(args: SelectSubset<T, PaginaFindUniqueArgs<ExtArgs>>): Prisma__PaginaClient<$Result.GetResult<Prisma.$PaginaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pagina that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaginaFindUniqueOrThrowArgs} args - Arguments to find a Pagina
     * @example
     * // Get one Pagina
     * const pagina = await prisma.pagina.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaginaFindUniqueOrThrowArgs>(args: SelectSubset<T, PaginaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaginaClient<$Result.GetResult<Prisma.$PaginaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pagina that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaginaFindFirstArgs} args - Arguments to find a Pagina
     * @example
     * // Get one Pagina
     * const pagina = await prisma.pagina.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaginaFindFirstArgs>(args?: SelectSubset<T, PaginaFindFirstArgs<ExtArgs>>): Prisma__PaginaClient<$Result.GetResult<Prisma.$PaginaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pagina that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaginaFindFirstOrThrowArgs} args - Arguments to find a Pagina
     * @example
     * // Get one Pagina
     * const pagina = await prisma.pagina.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaginaFindFirstOrThrowArgs>(args?: SelectSubset<T, PaginaFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaginaClient<$Result.GetResult<Prisma.$PaginaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Paginas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaginaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Paginas
     * const paginas = await prisma.pagina.findMany()
     * 
     * // Get first 10 Paginas
     * const paginas = await prisma.pagina.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paginaWithIdOnly = await prisma.pagina.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaginaFindManyArgs>(args?: SelectSubset<T, PaginaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaginaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pagina.
     * @param {PaginaCreateArgs} args - Arguments to create a Pagina.
     * @example
     * // Create one Pagina
     * const Pagina = await prisma.pagina.create({
     *   data: {
     *     // ... data to create a Pagina
     *   }
     * })
     * 
     */
    create<T extends PaginaCreateArgs>(args: SelectSubset<T, PaginaCreateArgs<ExtArgs>>): Prisma__PaginaClient<$Result.GetResult<Prisma.$PaginaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Paginas.
     * @param {PaginaCreateManyArgs} args - Arguments to create many Paginas.
     * @example
     * // Create many Paginas
     * const pagina = await prisma.pagina.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaginaCreateManyArgs>(args?: SelectSubset<T, PaginaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Paginas and returns the data saved in the database.
     * @param {PaginaCreateManyAndReturnArgs} args - Arguments to create many Paginas.
     * @example
     * // Create many Paginas
     * const pagina = await prisma.pagina.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Paginas and only return the `id`
     * const paginaWithIdOnly = await prisma.pagina.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaginaCreateManyAndReturnArgs>(args?: SelectSubset<T, PaginaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaginaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pagina.
     * @param {PaginaDeleteArgs} args - Arguments to delete one Pagina.
     * @example
     * // Delete one Pagina
     * const Pagina = await prisma.pagina.delete({
     *   where: {
     *     // ... filter to delete one Pagina
     *   }
     * })
     * 
     */
    delete<T extends PaginaDeleteArgs>(args: SelectSubset<T, PaginaDeleteArgs<ExtArgs>>): Prisma__PaginaClient<$Result.GetResult<Prisma.$PaginaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pagina.
     * @param {PaginaUpdateArgs} args - Arguments to update one Pagina.
     * @example
     * // Update one Pagina
     * const pagina = await prisma.pagina.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaginaUpdateArgs>(args: SelectSubset<T, PaginaUpdateArgs<ExtArgs>>): Prisma__PaginaClient<$Result.GetResult<Prisma.$PaginaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Paginas.
     * @param {PaginaDeleteManyArgs} args - Arguments to filter Paginas to delete.
     * @example
     * // Delete a few Paginas
     * const { count } = await prisma.pagina.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaginaDeleteManyArgs>(args?: SelectSubset<T, PaginaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Paginas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaginaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Paginas
     * const pagina = await prisma.pagina.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaginaUpdateManyArgs>(args: SelectSubset<T, PaginaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Paginas and returns the data updated in the database.
     * @param {PaginaUpdateManyAndReturnArgs} args - Arguments to update many Paginas.
     * @example
     * // Update many Paginas
     * const pagina = await prisma.pagina.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Paginas and only return the `id`
     * const paginaWithIdOnly = await prisma.pagina.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaginaUpdateManyAndReturnArgs>(args: SelectSubset<T, PaginaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaginaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pagina.
     * @param {PaginaUpsertArgs} args - Arguments to update or create a Pagina.
     * @example
     * // Update or create a Pagina
     * const pagina = await prisma.pagina.upsert({
     *   create: {
     *     // ... data to create a Pagina
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pagina we want to update
     *   }
     * })
     */
    upsert<T extends PaginaUpsertArgs>(args: SelectSubset<T, PaginaUpsertArgs<ExtArgs>>): Prisma__PaginaClient<$Result.GetResult<Prisma.$PaginaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Paginas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaginaCountArgs} args - Arguments to filter Paginas to count.
     * @example
     * // Count the number of Paginas
     * const count = await prisma.pagina.count({
     *   where: {
     *     // ... the filter for the Paginas we want to count
     *   }
     * })
    **/
    count<T extends PaginaCountArgs>(
      args?: Subset<T, PaginaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaginaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pagina.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaginaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaginaAggregateArgs>(args: Subset<T, PaginaAggregateArgs>): Prisma.PrismaPromise<GetPaginaAggregateType<T>>

    /**
     * Group by Pagina.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaginaGroupByArgs} args - Group by arguments.
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
      T extends PaginaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaginaGroupByArgs['orderBy'] }
        : { orderBy?: PaginaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaginaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaginaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pagina model
   */
  readonly fields: PaginaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pagina.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaginaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    libro<T extends LibroDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LibroDefaultArgs<ExtArgs>>): Prisma__LibroClient<$Result.GetResult<Prisma.$LibroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Pagina model
   */
  interface PaginaFieldRefs {
    readonly id: FieldRef<"Pagina", 'String'>
    readonly libroId: FieldRef<"Pagina", 'String'>
    readonly numero: FieldRef<"Pagina", 'Int'>
    readonly contenido: FieldRef<"Pagina", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Pagina findUnique
   */
  export type PaginaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagina
     */
    select?: PaginaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagina
     */
    omit?: PaginaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaginaInclude<ExtArgs> | null
    /**
     * Filter, which Pagina to fetch.
     */
    where: PaginaWhereUniqueInput
  }

  /**
   * Pagina findUniqueOrThrow
   */
  export type PaginaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagina
     */
    select?: PaginaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagina
     */
    omit?: PaginaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaginaInclude<ExtArgs> | null
    /**
     * Filter, which Pagina to fetch.
     */
    where: PaginaWhereUniqueInput
  }

  /**
   * Pagina findFirst
   */
  export type PaginaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagina
     */
    select?: PaginaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagina
     */
    omit?: PaginaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaginaInclude<ExtArgs> | null
    /**
     * Filter, which Pagina to fetch.
     */
    where?: PaginaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Paginas to fetch.
     */
    orderBy?: PaginaOrderByWithRelationInput | PaginaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Paginas.
     */
    cursor?: PaginaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Paginas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Paginas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Paginas.
     */
    distinct?: PaginaScalarFieldEnum | PaginaScalarFieldEnum[]
  }

  /**
   * Pagina findFirstOrThrow
   */
  export type PaginaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagina
     */
    select?: PaginaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagina
     */
    omit?: PaginaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaginaInclude<ExtArgs> | null
    /**
     * Filter, which Pagina to fetch.
     */
    where?: PaginaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Paginas to fetch.
     */
    orderBy?: PaginaOrderByWithRelationInput | PaginaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Paginas.
     */
    cursor?: PaginaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Paginas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Paginas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Paginas.
     */
    distinct?: PaginaScalarFieldEnum | PaginaScalarFieldEnum[]
  }

  /**
   * Pagina findMany
   */
  export type PaginaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagina
     */
    select?: PaginaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagina
     */
    omit?: PaginaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaginaInclude<ExtArgs> | null
    /**
     * Filter, which Paginas to fetch.
     */
    where?: PaginaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Paginas to fetch.
     */
    orderBy?: PaginaOrderByWithRelationInput | PaginaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Paginas.
     */
    cursor?: PaginaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Paginas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Paginas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Paginas.
     */
    distinct?: PaginaScalarFieldEnum | PaginaScalarFieldEnum[]
  }

  /**
   * Pagina create
   */
  export type PaginaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagina
     */
    select?: PaginaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagina
     */
    omit?: PaginaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaginaInclude<ExtArgs> | null
    /**
     * The data needed to create a Pagina.
     */
    data: XOR<PaginaCreateInput, PaginaUncheckedCreateInput>
  }

  /**
   * Pagina createMany
   */
  export type PaginaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Paginas.
     */
    data: PaginaCreateManyInput | PaginaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pagina createManyAndReturn
   */
  export type PaginaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagina
     */
    select?: PaginaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pagina
     */
    omit?: PaginaOmit<ExtArgs> | null
    /**
     * The data used to create many Paginas.
     */
    data: PaginaCreateManyInput | PaginaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaginaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pagina update
   */
  export type PaginaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagina
     */
    select?: PaginaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagina
     */
    omit?: PaginaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaginaInclude<ExtArgs> | null
    /**
     * The data needed to update a Pagina.
     */
    data: XOR<PaginaUpdateInput, PaginaUncheckedUpdateInput>
    /**
     * Choose, which Pagina to update.
     */
    where: PaginaWhereUniqueInput
  }

  /**
   * Pagina updateMany
   */
  export type PaginaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Paginas.
     */
    data: XOR<PaginaUpdateManyMutationInput, PaginaUncheckedUpdateManyInput>
    /**
     * Filter which Paginas to update
     */
    where?: PaginaWhereInput
    /**
     * Limit how many Paginas to update.
     */
    limit?: number
  }

  /**
   * Pagina updateManyAndReturn
   */
  export type PaginaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagina
     */
    select?: PaginaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pagina
     */
    omit?: PaginaOmit<ExtArgs> | null
    /**
     * The data used to update Paginas.
     */
    data: XOR<PaginaUpdateManyMutationInput, PaginaUncheckedUpdateManyInput>
    /**
     * Filter which Paginas to update
     */
    where?: PaginaWhereInput
    /**
     * Limit how many Paginas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaginaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pagina upsert
   */
  export type PaginaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagina
     */
    select?: PaginaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagina
     */
    omit?: PaginaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaginaInclude<ExtArgs> | null
    /**
     * The filter to search for the Pagina to update in case it exists.
     */
    where: PaginaWhereUniqueInput
    /**
     * In case the Pagina found by the `where` argument doesn't exist, create a new Pagina with this data.
     */
    create: XOR<PaginaCreateInput, PaginaUncheckedCreateInput>
    /**
     * In case the Pagina was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaginaUpdateInput, PaginaUncheckedUpdateInput>
  }

  /**
   * Pagina delete
   */
  export type PaginaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagina
     */
    select?: PaginaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagina
     */
    omit?: PaginaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaginaInclude<ExtArgs> | null
    /**
     * Filter which Pagina to delete.
     */
    where: PaginaWhereUniqueInput
  }

  /**
   * Pagina deleteMany
   */
  export type PaginaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Paginas to delete
     */
    where?: PaginaWhereInput
    /**
     * Limit how many Paginas to delete.
     */
    limit?: number
  }

  /**
   * Pagina without action
   */
  export type PaginaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagina
     */
    select?: PaginaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagina
     */
    omit?: PaginaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaginaInclude<ExtArgs> | null
  }


  /**
   * Model Progreso
   */

  export type AggregateProgreso = {
    _count: ProgresoCountAggregateOutputType | null
    _avg: ProgresoAvgAggregateOutputType | null
    _sum: ProgresoSumAggregateOutputType | null
    _min: ProgresoMinAggregateOutputType | null
    _max: ProgresoMaxAggregateOutputType | null
  }

  export type ProgresoAvgAggregateOutputType = {
    paginaActual: number | null
  }

  export type ProgresoSumAggregateOutputType = {
    paginaActual: number | null
  }

  export type ProgresoMinAggregateOutputType = {
    id: string | null
    usuarioId: string | null
    libroId: string | null
    paginaActual: number | null
    estado: $Enums.EstadoLectura | null
    resumen: string | null
    observaciones: string | null
    iniciadoEn: Date | null
    actualizadoEn: Date | null
  }

  export type ProgresoMaxAggregateOutputType = {
    id: string | null
    usuarioId: string | null
    libroId: string | null
    paginaActual: number | null
    estado: $Enums.EstadoLectura | null
    resumen: string | null
    observaciones: string | null
    iniciadoEn: Date | null
    actualizadoEn: Date | null
  }

  export type ProgresoCountAggregateOutputType = {
    id: number
    usuarioId: number
    libroId: number
    paginaActual: number
    estado: number
    resumen: number
    observaciones: number
    iniciadoEn: number
    actualizadoEn: number
    _all: number
  }


  export type ProgresoAvgAggregateInputType = {
    paginaActual?: true
  }

  export type ProgresoSumAggregateInputType = {
    paginaActual?: true
  }

  export type ProgresoMinAggregateInputType = {
    id?: true
    usuarioId?: true
    libroId?: true
    paginaActual?: true
    estado?: true
    resumen?: true
    observaciones?: true
    iniciadoEn?: true
    actualizadoEn?: true
  }

  export type ProgresoMaxAggregateInputType = {
    id?: true
    usuarioId?: true
    libroId?: true
    paginaActual?: true
    estado?: true
    resumen?: true
    observaciones?: true
    iniciadoEn?: true
    actualizadoEn?: true
  }

  export type ProgresoCountAggregateInputType = {
    id?: true
    usuarioId?: true
    libroId?: true
    paginaActual?: true
    estado?: true
    resumen?: true
    observaciones?: true
    iniciadoEn?: true
    actualizadoEn?: true
    _all?: true
  }

  export type ProgresoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Progreso to aggregate.
     */
    where?: ProgresoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Progresos to fetch.
     */
    orderBy?: ProgresoOrderByWithRelationInput | ProgresoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProgresoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Progresos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Progresos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Progresos
    **/
    _count?: true | ProgresoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProgresoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProgresoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProgresoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProgresoMaxAggregateInputType
  }

  export type GetProgresoAggregateType<T extends ProgresoAggregateArgs> = {
        [P in keyof T & keyof AggregateProgreso]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProgreso[P]>
      : GetScalarType<T[P], AggregateProgreso[P]>
  }




  export type ProgresoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgresoWhereInput
    orderBy?: ProgresoOrderByWithAggregationInput | ProgresoOrderByWithAggregationInput[]
    by: ProgresoScalarFieldEnum[] | ProgresoScalarFieldEnum
    having?: ProgresoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProgresoCountAggregateInputType | true
    _avg?: ProgresoAvgAggregateInputType
    _sum?: ProgresoSumAggregateInputType
    _min?: ProgresoMinAggregateInputType
    _max?: ProgresoMaxAggregateInputType
  }

  export type ProgresoGroupByOutputType = {
    id: string
    usuarioId: string
    libroId: string
    paginaActual: number
    estado: $Enums.EstadoLectura
    resumen: string | null
    observaciones: string | null
    iniciadoEn: Date
    actualizadoEn: Date
    _count: ProgresoCountAggregateOutputType | null
    _avg: ProgresoAvgAggregateOutputType | null
    _sum: ProgresoSumAggregateOutputType | null
    _min: ProgresoMinAggregateOutputType | null
    _max: ProgresoMaxAggregateOutputType | null
  }

  type GetProgresoGroupByPayload<T extends ProgresoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProgresoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProgresoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProgresoGroupByOutputType[P]>
            : GetScalarType<T[P], ProgresoGroupByOutputType[P]>
        }
      >
    >


  export type ProgresoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    libroId?: boolean
    paginaActual?: boolean
    estado?: boolean
    resumen?: boolean
    observaciones?: boolean
    iniciadoEn?: boolean
    actualizadoEn?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    libro?: boolean | LibroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["progreso"]>

  export type ProgresoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    libroId?: boolean
    paginaActual?: boolean
    estado?: boolean
    resumen?: boolean
    observaciones?: boolean
    iniciadoEn?: boolean
    actualizadoEn?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    libro?: boolean | LibroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["progreso"]>

  export type ProgresoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    libroId?: boolean
    paginaActual?: boolean
    estado?: boolean
    resumen?: boolean
    observaciones?: boolean
    iniciadoEn?: boolean
    actualizadoEn?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    libro?: boolean | LibroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["progreso"]>

  export type ProgresoSelectScalar = {
    id?: boolean
    usuarioId?: boolean
    libroId?: boolean
    paginaActual?: boolean
    estado?: boolean
    resumen?: boolean
    observaciones?: boolean
    iniciadoEn?: boolean
    actualizadoEn?: boolean
  }

  export type ProgresoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuarioId" | "libroId" | "paginaActual" | "estado" | "resumen" | "observaciones" | "iniciadoEn" | "actualizadoEn", ExtArgs["result"]["progreso"]>
  export type ProgresoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    libro?: boolean | LibroDefaultArgs<ExtArgs>
  }
  export type ProgresoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    libro?: boolean | LibroDefaultArgs<ExtArgs>
  }
  export type ProgresoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    libro?: boolean | LibroDefaultArgs<ExtArgs>
  }

  export type $ProgresoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Progreso"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      libro: Prisma.$LibroPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      usuarioId: string
      libroId: string
      paginaActual: number
      estado: $Enums.EstadoLectura
      resumen: string | null
      observaciones: string | null
      iniciadoEn: Date
      actualizadoEn: Date
    }, ExtArgs["result"]["progreso"]>
    composites: {}
  }

  type ProgresoGetPayload<S extends boolean | null | undefined | ProgresoDefaultArgs> = $Result.GetResult<Prisma.$ProgresoPayload, S>

  type ProgresoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProgresoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProgresoCountAggregateInputType | true
    }

  export interface ProgresoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Progreso'], meta: { name: 'Progreso' } }
    /**
     * Find zero or one Progreso that matches the filter.
     * @param {ProgresoFindUniqueArgs} args - Arguments to find a Progreso
     * @example
     * // Get one Progreso
     * const progreso = await prisma.progreso.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProgresoFindUniqueArgs>(args: SelectSubset<T, ProgresoFindUniqueArgs<ExtArgs>>): Prisma__ProgresoClient<$Result.GetResult<Prisma.$ProgresoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Progreso that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProgresoFindUniqueOrThrowArgs} args - Arguments to find a Progreso
     * @example
     * // Get one Progreso
     * const progreso = await prisma.progreso.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProgresoFindUniqueOrThrowArgs>(args: SelectSubset<T, ProgresoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProgresoClient<$Result.GetResult<Prisma.$ProgresoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Progreso that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgresoFindFirstArgs} args - Arguments to find a Progreso
     * @example
     * // Get one Progreso
     * const progreso = await prisma.progreso.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProgresoFindFirstArgs>(args?: SelectSubset<T, ProgresoFindFirstArgs<ExtArgs>>): Prisma__ProgresoClient<$Result.GetResult<Prisma.$ProgresoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Progreso that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgresoFindFirstOrThrowArgs} args - Arguments to find a Progreso
     * @example
     * // Get one Progreso
     * const progreso = await prisma.progreso.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProgresoFindFirstOrThrowArgs>(args?: SelectSubset<T, ProgresoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProgresoClient<$Result.GetResult<Prisma.$ProgresoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Progresos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgresoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Progresos
     * const progresos = await prisma.progreso.findMany()
     * 
     * // Get first 10 Progresos
     * const progresos = await prisma.progreso.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const progresoWithIdOnly = await prisma.progreso.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProgresoFindManyArgs>(args?: SelectSubset<T, ProgresoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgresoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Progreso.
     * @param {ProgresoCreateArgs} args - Arguments to create a Progreso.
     * @example
     * // Create one Progreso
     * const Progreso = await prisma.progreso.create({
     *   data: {
     *     // ... data to create a Progreso
     *   }
     * })
     * 
     */
    create<T extends ProgresoCreateArgs>(args: SelectSubset<T, ProgresoCreateArgs<ExtArgs>>): Prisma__ProgresoClient<$Result.GetResult<Prisma.$ProgresoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Progresos.
     * @param {ProgresoCreateManyArgs} args - Arguments to create many Progresos.
     * @example
     * // Create many Progresos
     * const progreso = await prisma.progreso.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProgresoCreateManyArgs>(args?: SelectSubset<T, ProgresoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Progresos and returns the data saved in the database.
     * @param {ProgresoCreateManyAndReturnArgs} args - Arguments to create many Progresos.
     * @example
     * // Create many Progresos
     * const progreso = await prisma.progreso.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Progresos and only return the `id`
     * const progresoWithIdOnly = await prisma.progreso.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProgresoCreateManyAndReturnArgs>(args?: SelectSubset<T, ProgresoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgresoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Progreso.
     * @param {ProgresoDeleteArgs} args - Arguments to delete one Progreso.
     * @example
     * // Delete one Progreso
     * const Progreso = await prisma.progreso.delete({
     *   where: {
     *     // ... filter to delete one Progreso
     *   }
     * })
     * 
     */
    delete<T extends ProgresoDeleteArgs>(args: SelectSubset<T, ProgresoDeleteArgs<ExtArgs>>): Prisma__ProgresoClient<$Result.GetResult<Prisma.$ProgresoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Progreso.
     * @param {ProgresoUpdateArgs} args - Arguments to update one Progreso.
     * @example
     * // Update one Progreso
     * const progreso = await prisma.progreso.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProgresoUpdateArgs>(args: SelectSubset<T, ProgresoUpdateArgs<ExtArgs>>): Prisma__ProgresoClient<$Result.GetResult<Prisma.$ProgresoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Progresos.
     * @param {ProgresoDeleteManyArgs} args - Arguments to filter Progresos to delete.
     * @example
     * // Delete a few Progresos
     * const { count } = await prisma.progreso.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProgresoDeleteManyArgs>(args?: SelectSubset<T, ProgresoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Progresos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgresoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Progresos
     * const progreso = await prisma.progreso.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProgresoUpdateManyArgs>(args: SelectSubset<T, ProgresoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Progresos and returns the data updated in the database.
     * @param {ProgresoUpdateManyAndReturnArgs} args - Arguments to update many Progresos.
     * @example
     * // Update many Progresos
     * const progreso = await prisma.progreso.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Progresos and only return the `id`
     * const progresoWithIdOnly = await prisma.progreso.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProgresoUpdateManyAndReturnArgs>(args: SelectSubset<T, ProgresoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgresoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Progreso.
     * @param {ProgresoUpsertArgs} args - Arguments to update or create a Progreso.
     * @example
     * // Update or create a Progreso
     * const progreso = await prisma.progreso.upsert({
     *   create: {
     *     // ... data to create a Progreso
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Progreso we want to update
     *   }
     * })
     */
    upsert<T extends ProgresoUpsertArgs>(args: SelectSubset<T, ProgresoUpsertArgs<ExtArgs>>): Prisma__ProgresoClient<$Result.GetResult<Prisma.$ProgresoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Progresos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgresoCountArgs} args - Arguments to filter Progresos to count.
     * @example
     * // Count the number of Progresos
     * const count = await prisma.progreso.count({
     *   where: {
     *     // ... the filter for the Progresos we want to count
     *   }
     * })
    **/
    count<T extends ProgresoCountArgs>(
      args?: Subset<T, ProgresoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProgresoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Progreso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgresoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProgresoAggregateArgs>(args: Subset<T, ProgresoAggregateArgs>): Prisma.PrismaPromise<GetProgresoAggregateType<T>>

    /**
     * Group by Progreso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgresoGroupByArgs} args - Group by arguments.
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
      T extends ProgresoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProgresoGroupByArgs['orderBy'] }
        : { orderBy?: ProgresoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProgresoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgresoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Progreso model
   */
  readonly fields: ProgresoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Progreso.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProgresoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    libro<T extends LibroDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LibroDefaultArgs<ExtArgs>>): Prisma__LibroClient<$Result.GetResult<Prisma.$LibroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Progreso model
   */
  interface ProgresoFieldRefs {
    readonly id: FieldRef<"Progreso", 'String'>
    readonly usuarioId: FieldRef<"Progreso", 'String'>
    readonly libroId: FieldRef<"Progreso", 'String'>
    readonly paginaActual: FieldRef<"Progreso", 'Int'>
    readonly estado: FieldRef<"Progreso", 'EstadoLectura'>
    readonly resumen: FieldRef<"Progreso", 'String'>
    readonly observaciones: FieldRef<"Progreso", 'String'>
    readonly iniciadoEn: FieldRef<"Progreso", 'DateTime'>
    readonly actualizadoEn: FieldRef<"Progreso", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Progreso findUnique
   */
  export type ProgresoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progreso
     */
    select?: ProgresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progreso
     */
    omit?: ProgresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoInclude<ExtArgs> | null
    /**
     * Filter, which Progreso to fetch.
     */
    where: ProgresoWhereUniqueInput
  }

  /**
   * Progreso findUniqueOrThrow
   */
  export type ProgresoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progreso
     */
    select?: ProgresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progreso
     */
    omit?: ProgresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoInclude<ExtArgs> | null
    /**
     * Filter, which Progreso to fetch.
     */
    where: ProgresoWhereUniqueInput
  }

  /**
   * Progreso findFirst
   */
  export type ProgresoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progreso
     */
    select?: ProgresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progreso
     */
    omit?: ProgresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoInclude<ExtArgs> | null
    /**
     * Filter, which Progreso to fetch.
     */
    where?: ProgresoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Progresos to fetch.
     */
    orderBy?: ProgresoOrderByWithRelationInput | ProgresoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Progresos.
     */
    cursor?: ProgresoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Progresos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Progresos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Progresos.
     */
    distinct?: ProgresoScalarFieldEnum | ProgresoScalarFieldEnum[]
  }

  /**
   * Progreso findFirstOrThrow
   */
  export type ProgresoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progreso
     */
    select?: ProgresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progreso
     */
    omit?: ProgresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoInclude<ExtArgs> | null
    /**
     * Filter, which Progreso to fetch.
     */
    where?: ProgresoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Progresos to fetch.
     */
    orderBy?: ProgresoOrderByWithRelationInput | ProgresoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Progresos.
     */
    cursor?: ProgresoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Progresos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Progresos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Progresos.
     */
    distinct?: ProgresoScalarFieldEnum | ProgresoScalarFieldEnum[]
  }

  /**
   * Progreso findMany
   */
  export type ProgresoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progreso
     */
    select?: ProgresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progreso
     */
    omit?: ProgresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoInclude<ExtArgs> | null
    /**
     * Filter, which Progresos to fetch.
     */
    where?: ProgresoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Progresos to fetch.
     */
    orderBy?: ProgresoOrderByWithRelationInput | ProgresoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Progresos.
     */
    cursor?: ProgresoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Progresos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Progresos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Progresos.
     */
    distinct?: ProgresoScalarFieldEnum | ProgresoScalarFieldEnum[]
  }

  /**
   * Progreso create
   */
  export type ProgresoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progreso
     */
    select?: ProgresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progreso
     */
    omit?: ProgresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoInclude<ExtArgs> | null
    /**
     * The data needed to create a Progreso.
     */
    data: XOR<ProgresoCreateInput, ProgresoUncheckedCreateInput>
  }

  /**
   * Progreso createMany
   */
  export type ProgresoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Progresos.
     */
    data: ProgresoCreateManyInput | ProgresoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Progreso createManyAndReturn
   */
  export type ProgresoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progreso
     */
    select?: ProgresoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Progreso
     */
    omit?: ProgresoOmit<ExtArgs> | null
    /**
     * The data used to create many Progresos.
     */
    data: ProgresoCreateManyInput | ProgresoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Progreso update
   */
  export type ProgresoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progreso
     */
    select?: ProgresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progreso
     */
    omit?: ProgresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoInclude<ExtArgs> | null
    /**
     * The data needed to update a Progreso.
     */
    data: XOR<ProgresoUpdateInput, ProgresoUncheckedUpdateInput>
    /**
     * Choose, which Progreso to update.
     */
    where: ProgresoWhereUniqueInput
  }

  /**
   * Progreso updateMany
   */
  export type ProgresoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Progresos.
     */
    data: XOR<ProgresoUpdateManyMutationInput, ProgresoUncheckedUpdateManyInput>
    /**
     * Filter which Progresos to update
     */
    where?: ProgresoWhereInput
    /**
     * Limit how many Progresos to update.
     */
    limit?: number
  }

  /**
   * Progreso updateManyAndReturn
   */
  export type ProgresoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progreso
     */
    select?: ProgresoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Progreso
     */
    omit?: ProgresoOmit<ExtArgs> | null
    /**
     * The data used to update Progresos.
     */
    data: XOR<ProgresoUpdateManyMutationInput, ProgresoUncheckedUpdateManyInput>
    /**
     * Filter which Progresos to update
     */
    where?: ProgresoWhereInput
    /**
     * Limit how many Progresos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Progreso upsert
   */
  export type ProgresoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progreso
     */
    select?: ProgresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progreso
     */
    omit?: ProgresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoInclude<ExtArgs> | null
    /**
     * The filter to search for the Progreso to update in case it exists.
     */
    where: ProgresoWhereUniqueInput
    /**
     * In case the Progreso found by the `where` argument doesn't exist, create a new Progreso with this data.
     */
    create: XOR<ProgresoCreateInput, ProgresoUncheckedCreateInput>
    /**
     * In case the Progreso was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProgresoUpdateInput, ProgresoUncheckedUpdateInput>
  }

  /**
   * Progreso delete
   */
  export type ProgresoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progreso
     */
    select?: ProgresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progreso
     */
    omit?: ProgresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoInclude<ExtArgs> | null
    /**
     * Filter which Progreso to delete.
     */
    where: ProgresoWhereUniqueInput
  }

  /**
   * Progreso deleteMany
   */
  export type ProgresoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Progresos to delete
     */
    where?: ProgresoWhereInput
    /**
     * Limit how many Progresos to delete.
     */
    limit?: number
  }

  /**
   * Progreso without action
   */
  export type ProgresoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progreso
     */
    select?: ProgresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progreso
     */
    omit?: ProgresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoInclude<ExtArgs> | null
  }


  /**
   * Model Auditoria
   */

  export type AggregateAuditoria = {
    _count: AuditoriaCountAggregateOutputType | null
    _min: AuditoriaMinAggregateOutputType | null
    _max: AuditoriaMaxAggregateOutputType | null
  }

  export type AuditoriaMinAggregateOutputType = {
    id: string | null
    usuarioId: string | null
    accion: string | null
    exito: boolean | null
    ip: string | null
    userAgent: string | null
    detalle: string | null
    creadoEn: Date | null
  }

  export type AuditoriaMaxAggregateOutputType = {
    id: string | null
    usuarioId: string | null
    accion: string | null
    exito: boolean | null
    ip: string | null
    userAgent: string | null
    detalle: string | null
    creadoEn: Date | null
  }

  export type AuditoriaCountAggregateOutputType = {
    id: number
    usuarioId: number
    accion: number
    exito: number
    ip: number
    userAgent: number
    detalle: number
    creadoEn: number
    _all: number
  }


  export type AuditoriaMinAggregateInputType = {
    id?: true
    usuarioId?: true
    accion?: true
    exito?: true
    ip?: true
    userAgent?: true
    detalle?: true
    creadoEn?: true
  }

  export type AuditoriaMaxAggregateInputType = {
    id?: true
    usuarioId?: true
    accion?: true
    exito?: true
    ip?: true
    userAgent?: true
    detalle?: true
    creadoEn?: true
  }

  export type AuditoriaCountAggregateInputType = {
    id?: true
    usuarioId?: true
    accion?: true
    exito?: true
    ip?: true
    userAgent?: true
    detalle?: true
    creadoEn?: true
    _all?: true
  }

  export type AuditoriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Auditoria to aggregate.
     */
    where?: AuditoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Auditorias to fetch.
     */
    orderBy?: AuditoriaOrderByWithRelationInput | AuditoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Auditorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Auditorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Auditorias
    **/
    _count?: true | AuditoriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditoriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditoriaMaxAggregateInputType
  }

  export type GetAuditoriaAggregateType<T extends AuditoriaAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditoria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditoria[P]>
      : GetScalarType<T[P], AggregateAuditoria[P]>
  }




  export type AuditoriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditoriaWhereInput
    orderBy?: AuditoriaOrderByWithAggregationInput | AuditoriaOrderByWithAggregationInput[]
    by: AuditoriaScalarFieldEnum[] | AuditoriaScalarFieldEnum
    having?: AuditoriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditoriaCountAggregateInputType | true
    _min?: AuditoriaMinAggregateInputType
    _max?: AuditoriaMaxAggregateInputType
  }

  export type AuditoriaGroupByOutputType = {
    id: string
    usuarioId: string | null
    accion: string
    exito: boolean
    ip: string | null
    userAgent: string | null
    detalle: string | null
    creadoEn: Date
    _count: AuditoriaCountAggregateOutputType | null
    _min: AuditoriaMinAggregateOutputType | null
    _max: AuditoriaMaxAggregateOutputType | null
  }

  type GetAuditoriaGroupByPayload<T extends AuditoriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditoriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditoriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditoriaGroupByOutputType[P]>
            : GetScalarType<T[P], AuditoriaGroupByOutputType[P]>
        }
      >
    >


  export type AuditoriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    accion?: boolean
    exito?: boolean
    ip?: boolean
    userAgent?: boolean
    detalle?: boolean
    creadoEn?: boolean
    usuario?: boolean | Auditoria$usuarioArgs<ExtArgs>
  }, ExtArgs["result"]["auditoria"]>

  export type AuditoriaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    accion?: boolean
    exito?: boolean
    ip?: boolean
    userAgent?: boolean
    detalle?: boolean
    creadoEn?: boolean
    usuario?: boolean | Auditoria$usuarioArgs<ExtArgs>
  }, ExtArgs["result"]["auditoria"]>

  export type AuditoriaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    accion?: boolean
    exito?: boolean
    ip?: boolean
    userAgent?: boolean
    detalle?: boolean
    creadoEn?: boolean
    usuario?: boolean | Auditoria$usuarioArgs<ExtArgs>
  }, ExtArgs["result"]["auditoria"]>

  export type AuditoriaSelectScalar = {
    id?: boolean
    usuarioId?: boolean
    accion?: boolean
    exito?: boolean
    ip?: boolean
    userAgent?: boolean
    detalle?: boolean
    creadoEn?: boolean
  }

  export type AuditoriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuarioId" | "accion" | "exito" | "ip" | "userAgent" | "detalle" | "creadoEn", ExtArgs["result"]["auditoria"]>
  export type AuditoriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | Auditoria$usuarioArgs<ExtArgs>
  }
  export type AuditoriaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | Auditoria$usuarioArgs<ExtArgs>
  }
  export type AuditoriaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | Auditoria$usuarioArgs<ExtArgs>
  }

  export type $AuditoriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Auditoria"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      usuarioId: string | null
      accion: string
      exito: boolean
      ip: string | null
      userAgent: string | null
      detalle: string | null
      creadoEn: Date
    }, ExtArgs["result"]["auditoria"]>
    composites: {}
  }

  type AuditoriaGetPayload<S extends boolean | null | undefined | AuditoriaDefaultArgs> = $Result.GetResult<Prisma.$AuditoriaPayload, S>

  type AuditoriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditoriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditoriaCountAggregateInputType | true
    }

  export interface AuditoriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Auditoria'], meta: { name: 'Auditoria' } }
    /**
     * Find zero or one Auditoria that matches the filter.
     * @param {AuditoriaFindUniqueArgs} args - Arguments to find a Auditoria
     * @example
     * // Get one Auditoria
     * const auditoria = await prisma.auditoria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditoriaFindUniqueArgs>(args: SelectSubset<T, AuditoriaFindUniqueArgs<ExtArgs>>): Prisma__AuditoriaClient<$Result.GetResult<Prisma.$AuditoriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Auditoria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditoriaFindUniqueOrThrowArgs} args - Arguments to find a Auditoria
     * @example
     * // Get one Auditoria
     * const auditoria = await prisma.auditoria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditoriaFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditoriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditoriaClient<$Result.GetResult<Prisma.$AuditoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Auditoria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditoriaFindFirstArgs} args - Arguments to find a Auditoria
     * @example
     * // Get one Auditoria
     * const auditoria = await prisma.auditoria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditoriaFindFirstArgs>(args?: SelectSubset<T, AuditoriaFindFirstArgs<ExtArgs>>): Prisma__AuditoriaClient<$Result.GetResult<Prisma.$AuditoriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Auditoria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditoriaFindFirstOrThrowArgs} args - Arguments to find a Auditoria
     * @example
     * // Get one Auditoria
     * const auditoria = await prisma.auditoria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditoriaFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditoriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditoriaClient<$Result.GetResult<Prisma.$AuditoriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Auditorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditoriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Auditorias
     * const auditorias = await prisma.auditoria.findMany()
     * 
     * // Get first 10 Auditorias
     * const auditorias = await prisma.auditoria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditoriaWithIdOnly = await prisma.auditoria.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditoriaFindManyArgs>(args?: SelectSubset<T, AuditoriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Auditoria.
     * @param {AuditoriaCreateArgs} args - Arguments to create a Auditoria.
     * @example
     * // Create one Auditoria
     * const Auditoria = await prisma.auditoria.create({
     *   data: {
     *     // ... data to create a Auditoria
     *   }
     * })
     * 
     */
    create<T extends AuditoriaCreateArgs>(args: SelectSubset<T, AuditoriaCreateArgs<ExtArgs>>): Prisma__AuditoriaClient<$Result.GetResult<Prisma.$AuditoriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Auditorias.
     * @param {AuditoriaCreateManyArgs} args - Arguments to create many Auditorias.
     * @example
     * // Create many Auditorias
     * const auditoria = await prisma.auditoria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditoriaCreateManyArgs>(args?: SelectSubset<T, AuditoriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Auditorias and returns the data saved in the database.
     * @param {AuditoriaCreateManyAndReturnArgs} args - Arguments to create many Auditorias.
     * @example
     * // Create many Auditorias
     * const auditoria = await prisma.auditoria.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Auditorias and only return the `id`
     * const auditoriaWithIdOnly = await prisma.auditoria.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditoriaCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditoriaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditoriaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Auditoria.
     * @param {AuditoriaDeleteArgs} args - Arguments to delete one Auditoria.
     * @example
     * // Delete one Auditoria
     * const Auditoria = await prisma.auditoria.delete({
     *   where: {
     *     // ... filter to delete one Auditoria
     *   }
     * })
     * 
     */
    delete<T extends AuditoriaDeleteArgs>(args: SelectSubset<T, AuditoriaDeleteArgs<ExtArgs>>): Prisma__AuditoriaClient<$Result.GetResult<Prisma.$AuditoriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Auditoria.
     * @param {AuditoriaUpdateArgs} args - Arguments to update one Auditoria.
     * @example
     * // Update one Auditoria
     * const auditoria = await prisma.auditoria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditoriaUpdateArgs>(args: SelectSubset<T, AuditoriaUpdateArgs<ExtArgs>>): Prisma__AuditoriaClient<$Result.GetResult<Prisma.$AuditoriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Auditorias.
     * @param {AuditoriaDeleteManyArgs} args - Arguments to filter Auditorias to delete.
     * @example
     * // Delete a few Auditorias
     * const { count } = await prisma.auditoria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditoriaDeleteManyArgs>(args?: SelectSubset<T, AuditoriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Auditorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditoriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Auditorias
     * const auditoria = await prisma.auditoria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditoriaUpdateManyArgs>(args: SelectSubset<T, AuditoriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Auditorias and returns the data updated in the database.
     * @param {AuditoriaUpdateManyAndReturnArgs} args - Arguments to update many Auditorias.
     * @example
     * // Update many Auditorias
     * const auditoria = await prisma.auditoria.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Auditorias and only return the `id`
     * const auditoriaWithIdOnly = await prisma.auditoria.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuditoriaUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditoriaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditoriaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Auditoria.
     * @param {AuditoriaUpsertArgs} args - Arguments to update or create a Auditoria.
     * @example
     * // Update or create a Auditoria
     * const auditoria = await prisma.auditoria.upsert({
     *   create: {
     *     // ... data to create a Auditoria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Auditoria we want to update
     *   }
     * })
     */
    upsert<T extends AuditoriaUpsertArgs>(args: SelectSubset<T, AuditoriaUpsertArgs<ExtArgs>>): Prisma__AuditoriaClient<$Result.GetResult<Prisma.$AuditoriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Auditorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditoriaCountArgs} args - Arguments to filter Auditorias to count.
     * @example
     * // Count the number of Auditorias
     * const count = await prisma.auditoria.count({
     *   where: {
     *     // ... the filter for the Auditorias we want to count
     *   }
     * })
    **/
    count<T extends AuditoriaCountArgs>(
      args?: Subset<T, AuditoriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditoriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Auditoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditoriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuditoriaAggregateArgs>(args: Subset<T, AuditoriaAggregateArgs>): Prisma.PrismaPromise<GetAuditoriaAggregateType<T>>

    /**
     * Group by Auditoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditoriaGroupByArgs} args - Group by arguments.
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
      T extends AuditoriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditoriaGroupByArgs['orderBy'] }
        : { orderBy?: AuditoriaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuditoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Auditoria model
   */
  readonly fields: AuditoriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Auditoria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditoriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends Auditoria$usuarioArgs<ExtArgs> = {}>(args?: Subset<T, Auditoria$usuarioArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Auditoria model
   */
  interface AuditoriaFieldRefs {
    readonly id: FieldRef<"Auditoria", 'String'>
    readonly usuarioId: FieldRef<"Auditoria", 'String'>
    readonly accion: FieldRef<"Auditoria", 'String'>
    readonly exito: FieldRef<"Auditoria", 'Boolean'>
    readonly ip: FieldRef<"Auditoria", 'String'>
    readonly userAgent: FieldRef<"Auditoria", 'String'>
    readonly detalle: FieldRef<"Auditoria", 'String'>
    readonly creadoEn: FieldRef<"Auditoria", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Auditoria findUnique
   */
  export type AuditoriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auditoria
     */
    select?: AuditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auditoria
     */
    omit?: AuditoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditoriaInclude<ExtArgs> | null
    /**
     * Filter, which Auditoria to fetch.
     */
    where: AuditoriaWhereUniqueInput
  }

  /**
   * Auditoria findUniqueOrThrow
   */
  export type AuditoriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auditoria
     */
    select?: AuditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auditoria
     */
    omit?: AuditoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditoriaInclude<ExtArgs> | null
    /**
     * Filter, which Auditoria to fetch.
     */
    where: AuditoriaWhereUniqueInput
  }

  /**
   * Auditoria findFirst
   */
  export type AuditoriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auditoria
     */
    select?: AuditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auditoria
     */
    omit?: AuditoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditoriaInclude<ExtArgs> | null
    /**
     * Filter, which Auditoria to fetch.
     */
    where?: AuditoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Auditorias to fetch.
     */
    orderBy?: AuditoriaOrderByWithRelationInput | AuditoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Auditorias.
     */
    cursor?: AuditoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Auditorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Auditorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Auditorias.
     */
    distinct?: AuditoriaScalarFieldEnum | AuditoriaScalarFieldEnum[]
  }

  /**
   * Auditoria findFirstOrThrow
   */
  export type AuditoriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auditoria
     */
    select?: AuditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auditoria
     */
    omit?: AuditoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditoriaInclude<ExtArgs> | null
    /**
     * Filter, which Auditoria to fetch.
     */
    where?: AuditoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Auditorias to fetch.
     */
    orderBy?: AuditoriaOrderByWithRelationInput | AuditoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Auditorias.
     */
    cursor?: AuditoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Auditorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Auditorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Auditorias.
     */
    distinct?: AuditoriaScalarFieldEnum | AuditoriaScalarFieldEnum[]
  }

  /**
   * Auditoria findMany
   */
  export type AuditoriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auditoria
     */
    select?: AuditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auditoria
     */
    omit?: AuditoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditoriaInclude<ExtArgs> | null
    /**
     * Filter, which Auditorias to fetch.
     */
    where?: AuditoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Auditorias to fetch.
     */
    orderBy?: AuditoriaOrderByWithRelationInput | AuditoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Auditorias.
     */
    cursor?: AuditoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Auditorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Auditorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Auditorias.
     */
    distinct?: AuditoriaScalarFieldEnum | AuditoriaScalarFieldEnum[]
  }

  /**
   * Auditoria create
   */
  export type AuditoriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auditoria
     */
    select?: AuditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auditoria
     */
    omit?: AuditoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditoriaInclude<ExtArgs> | null
    /**
     * The data needed to create a Auditoria.
     */
    data: XOR<AuditoriaCreateInput, AuditoriaUncheckedCreateInput>
  }

  /**
   * Auditoria createMany
   */
  export type AuditoriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Auditorias.
     */
    data: AuditoriaCreateManyInput | AuditoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Auditoria createManyAndReturn
   */
  export type AuditoriaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auditoria
     */
    select?: AuditoriaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Auditoria
     */
    omit?: AuditoriaOmit<ExtArgs> | null
    /**
     * The data used to create many Auditorias.
     */
    data: AuditoriaCreateManyInput | AuditoriaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditoriaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Auditoria update
   */
  export type AuditoriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auditoria
     */
    select?: AuditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auditoria
     */
    omit?: AuditoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditoriaInclude<ExtArgs> | null
    /**
     * The data needed to update a Auditoria.
     */
    data: XOR<AuditoriaUpdateInput, AuditoriaUncheckedUpdateInput>
    /**
     * Choose, which Auditoria to update.
     */
    where: AuditoriaWhereUniqueInput
  }

  /**
   * Auditoria updateMany
   */
  export type AuditoriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Auditorias.
     */
    data: XOR<AuditoriaUpdateManyMutationInput, AuditoriaUncheckedUpdateManyInput>
    /**
     * Filter which Auditorias to update
     */
    where?: AuditoriaWhereInput
    /**
     * Limit how many Auditorias to update.
     */
    limit?: number
  }

  /**
   * Auditoria updateManyAndReturn
   */
  export type AuditoriaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auditoria
     */
    select?: AuditoriaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Auditoria
     */
    omit?: AuditoriaOmit<ExtArgs> | null
    /**
     * The data used to update Auditorias.
     */
    data: XOR<AuditoriaUpdateManyMutationInput, AuditoriaUncheckedUpdateManyInput>
    /**
     * Filter which Auditorias to update
     */
    where?: AuditoriaWhereInput
    /**
     * Limit how many Auditorias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditoriaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Auditoria upsert
   */
  export type AuditoriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auditoria
     */
    select?: AuditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auditoria
     */
    omit?: AuditoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditoriaInclude<ExtArgs> | null
    /**
     * The filter to search for the Auditoria to update in case it exists.
     */
    where: AuditoriaWhereUniqueInput
    /**
     * In case the Auditoria found by the `where` argument doesn't exist, create a new Auditoria with this data.
     */
    create: XOR<AuditoriaCreateInput, AuditoriaUncheckedCreateInput>
    /**
     * In case the Auditoria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditoriaUpdateInput, AuditoriaUncheckedUpdateInput>
  }

  /**
   * Auditoria delete
   */
  export type AuditoriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auditoria
     */
    select?: AuditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auditoria
     */
    omit?: AuditoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditoriaInclude<ExtArgs> | null
    /**
     * Filter which Auditoria to delete.
     */
    where: AuditoriaWhereUniqueInput
  }

  /**
   * Auditoria deleteMany
   */
  export type AuditoriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Auditorias to delete
     */
    where?: AuditoriaWhereInput
    /**
     * Limit how many Auditorias to delete.
     */
    limit?: number
  }

  /**
   * Auditoria.usuario
   */
  export type Auditoria$usuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
  }

  /**
   * Auditoria without action
   */
  export type AuditoriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auditoria
     */
    select?: AuditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auditoria
     */
    omit?: AuditoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditoriaInclude<ExtArgs> | null
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


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    nombre: 'nombre',
    rol: 'rol',
    intentosFallidos: 'intentosFallidos',
    bloqueadoHasta: 'bloqueadoHasta',
    ultimoAcceso: 'ultimoAcceso',
    creadoEn: 'creadoEn',
    actualizadoEn: 'actualizadoEn'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const LibroScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    autor: 'autor',
    descripcion: 'descripcion',
    portadaUrl: 'portadaUrl',
    publicado: 'publicado',
    creadoEn: 'creadoEn'
  };

  export type LibroScalarFieldEnum = (typeof LibroScalarFieldEnum)[keyof typeof LibroScalarFieldEnum]


  export const PaginaScalarFieldEnum: {
    id: 'id',
    libroId: 'libroId',
    numero: 'numero',
    contenido: 'contenido'
  };

  export type PaginaScalarFieldEnum = (typeof PaginaScalarFieldEnum)[keyof typeof PaginaScalarFieldEnum]


  export const ProgresoScalarFieldEnum: {
    id: 'id',
    usuarioId: 'usuarioId',
    libroId: 'libroId',
    paginaActual: 'paginaActual',
    estado: 'estado',
    resumen: 'resumen',
    observaciones: 'observaciones',
    iniciadoEn: 'iniciadoEn',
    actualizadoEn: 'actualizadoEn'
  };

  export type ProgresoScalarFieldEnum = (typeof ProgresoScalarFieldEnum)[keyof typeof ProgresoScalarFieldEnum]


  export const AuditoriaScalarFieldEnum: {
    id: 'id',
    usuarioId: 'usuarioId',
    accion: 'accion',
    exito: 'exito',
    ip: 'ip',
    userAgent: 'userAgent',
    detalle: 'detalle',
    creadoEn: 'creadoEn'
  };

  export type AuditoriaScalarFieldEnum = (typeof AuditoriaScalarFieldEnum)[keyof typeof AuditoriaScalarFieldEnum]


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
   * Reference to a field of type 'Rol'
   */
  export type EnumRolFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Rol'>
    


  /**
   * Reference to a field of type 'Rol[]'
   */
  export type ListEnumRolFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Rol[]'>
    


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'EstadoLectura'
   */
  export type EnumEstadoLecturaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoLectura'>
    


  /**
   * Reference to a field of type 'EstadoLectura[]'
   */
  export type ListEnumEstadoLecturaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoLectura[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    passwordHash?: StringFilter<"Usuario"> | string
    nombre?: StringFilter<"Usuario"> | string
    rol?: EnumRolFilter<"Usuario"> | $Enums.Rol
    intentosFallidos?: IntFilter<"Usuario"> | number
    bloqueadoHasta?: DateTimeNullableFilter<"Usuario"> | Date | string | null
    ultimoAcceso?: DateTimeNullableFilter<"Usuario"> | Date | string | null
    creadoEn?: DateTimeFilter<"Usuario"> | Date | string
    actualizadoEn?: DateTimeFilter<"Usuario"> | Date | string
    progresos?: ProgresoListRelationFilter
    auditorias?: AuditoriaListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    nombre?: SortOrder
    rol?: SortOrder
    intentosFallidos?: SortOrder
    bloqueadoHasta?: SortOrderInput | SortOrder
    ultimoAcceso?: SortOrderInput | SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    progresos?: ProgresoOrderByRelationAggregateInput
    auditorias?: AuditoriaOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    passwordHash?: StringFilter<"Usuario"> | string
    nombre?: StringFilter<"Usuario"> | string
    rol?: EnumRolFilter<"Usuario"> | $Enums.Rol
    intentosFallidos?: IntFilter<"Usuario"> | number
    bloqueadoHasta?: DateTimeNullableFilter<"Usuario"> | Date | string | null
    ultimoAcceso?: DateTimeNullableFilter<"Usuario"> | Date | string | null
    creadoEn?: DateTimeFilter<"Usuario"> | Date | string
    actualizadoEn?: DateTimeFilter<"Usuario"> | Date | string
    progresos?: ProgresoListRelationFilter
    auditorias?: AuditoriaListRelationFilter
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    nombre?: SortOrder
    rol?: SortOrder
    intentosFallidos?: SortOrder
    bloqueadoHasta?: SortOrderInput | SortOrder
    ultimoAcceso?: SortOrderInput | SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    passwordHash?: StringWithAggregatesFilter<"Usuario"> | string
    nombre?: StringWithAggregatesFilter<"Usuario"> | string
    rol?: EnumRolWithAggregatesFilter<"Usuario"> | $Enums.Rol
    intentosFallidos?: IntWithAggregatesFilter<"Usuario"> | number
    bloqueadoHasta?: DateTimeNullableWithAggregatesFilter<"Usuario"> | Date | string | null
    ultimoAcceso?: DateTimeNullableWithAggregatesFilter<"Usuario"> | Date | string | null
    creadoEn?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    actualizadoEn?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
  }

  export type LibroWhereInput = {
    AND?: LibroWhereInput | LibroWhereInput[]
    OR?: LibroWhereInput[]
    NOT?: LibroWhereInput | LibroWhereInput[]
    id?: StringFilter<"Libro"> | string
    titulo?: StringFilter<"Libro"> | string
    autor?: StringFilter<"Libro"> | string
    descripcion?: StringFilter<"Libro"> | string
    portadaUrl?: StringNullableFilter<"Libro"> | string | null
    publicado?: BoolFilter<"Libro"> | boolean
    creadoEn?: DateTimeFilter<"Libro"> | Date | string
    paginas?: PaginaListRelationFilter
    progresos?: ProgresoListRelationFilter
  }

  export type LibroOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    autor?: SortOrder
    descripcion?: SortOrder
    portadaUrl?: SortOrderInput | SortOrder
    publicado?: SortOrder
    creadoEn?: SortOrder
    paginas?: PaginaOrderByRelationAggregateInput
    progresos?: ProgresoOrderByRelationAggregateInput
  }

  export type LibroWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LibroWhereInput | LibroWhereInput[]
    OR?: LibroWhereInput[]
    NOT?: LibroWhereInput | LibroWhereInput[]
    titulo?: StringFilter<"Libro"> | string
    autor?: StringFilter<"Libro"> | string
    descripcion?: StringFilter<"Libro"> | string
    portadaUrl?: StringNullableFilter<"Libro"> | string | null
    publicado?: BoolFilter<"Libro"> | boolean
    creadoEn?: DateTimeFilter<"Libro"> | Date | string
    paginas?: PaginaListRelationFilter
    progresos?: ProgresoListRelationFilter
  }, "id">

  export type LibroOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    autor?: SortOrder
    descripcion?: SortOrder
    portadaUrl?: SortOrderInput | SortOrder
    publicado?: SortOrder
    creadoEn?: SortOrder
    _count?: LibroCountOrderByAggregateInput
    _max?: LibroMaxOrderByAggregateInput
    _min?: LibroMinOrderByAggregateInput
  }

  export type LibroScalarWhereWithAggregatesInput = {
    AND?: LibroScalarWhereWithAggregatesInput | LibroScalarWhereWithAggregatesInput[]
    OR?: LibroScalarWhereWithAggregatesInput[]
    NOT?: LibroScalarWhereWithAggregatesInput | LibroScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Libro"> | string
    titulo?: StringWithAggregatesFilter<"Libro"> | string
    autor?: StringWithAggregatesFilter<"Libro"> | string
    descripcion?: StringWithAggregatesFilter<"Libro"> | string
    portadaUrl?: StringNullableWithAggregatesFilter<"Libro"> | string | null
    publicado?: BoolWithAggregatesFilter<"Libro"> | boolean
    creadoEn?: DateTimeWithAggregatesFilter<"Libro"> | Date | string
  }

  export type PaginaWhereInput = {
    AND?: PaginaWhereInput | PaginaWhereInput[]
    OR?: PaginaWhereInput[]
    NOT?: PaginaWhereInput | PaginaWhereInput[]
    id?: StringFilter<"Pagina"> | string
    libroId?: StringFilter<"Pagina"> | string
    numero?: IntFilter<"Pagina"> | number
    contenido?: StringFilter<"Pagina"> | string
    libro?: XOR<LibroScalarRelationFilter, LibroWhereInput>
  }

  export type PaginaOrderByWithRelationInput = {
    id?: SortOrder
    libroId?: SortOrder
    numero?: SortOrder
    contenido?: SortOrder
    libro?: LibroOrderByWithRelationInput
  }

  export type PaginaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    libroId_numero?: PaginaLibroIdNumeroCompoundUniqueInput
    AND?: PaginaWhereInput | PaginaWhereInput[]
    OR?: PaginaWhereInput[]
    NOT?: PaginaWhereInput | PaginaWhereInput[]
    libroId?: StringFilter<"Pagina"> | string
    numero?: IntFilter<"Pagina"> | number
    contenido?: StringFilter<"Pagina"> | string
    libro?: XOR<LibroScalarRelationFilter, LibroWhereInput>
  }, "id" | "libroId_numero">

  export type PaginaOrderByWithAggregationInput = {
    id?: SortOrder
    libroId?: SortOrder
    numero?: SortOrder
    contenido?: SortOrder
    _count?: PaginaCountOrderByAggregateInput
    _avg?: PaginaAvgOrderByAggregateInput
    _max?: PaginaMaxOrderByAggregateInput
    _min?: PaginaMinOrderByAggregateInput
    _sum?: PaginaSumOrderByAggregateInput
  }

  export type PaginaScalarWhereWithAggregatesInput = {
    AND?: PaginaScalarWhereWithAggregatesInput | PaginaScalarWhereWithAggregatesInput[]
    OR?: PaginaScalarWhereWithAggregatesInput[]
    NOT?: PaginaScalarWhereWithAggregatesInput | PaginaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Pagina"> | string
    libroId?: StringWithAggregatesFilter<"Pagina"> | string
    numero?: IntWithAggregatesFilter<"Pagina"> | number
    contenido?: StringWithAggregatesFilter<"Pagina"> | string
  }

  export type ProgresoWhereInput = {
    AND?: ProgresoWhereInput | ProgresoWhereInput[]
    OR?: ProgresoWhereInput[]
    NOT?: ProgresoWhereInput | ProgresoWhereInput[]
    id?: StringFilter<"Progreso"> | string
    usuarioId?: StringFilter<"Progreso"> | string
    libroId?: StringFilter<"Progreso"> | string
    paginaActual?: IntFilter<"Progreso"> | number
    estado?: EnumEstadoLecturaFilter<"Progreso"> | $Enums.EstadoLectura
    resumen?: StringNullableFilter<"Progreso"> | string | null
    observaciones?: StringNullableFilter<"Progreso"> | string | null
    iniciadoEn?: DateTimeFilter<"Progreso"> | Date | string
    actualizadoEn?: DateTimeFilter<"Progreso"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    libro?: XOR<LibroScalarRelationFilter, LibroWhereInput>
  }

  export type ProgresoOrderByWithRelationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    libroId?: SortOrder
    paginaActual?: SortOrder
    estado?: SortOrder
    resumen?: SortOrderInput | SortOrder
    observaciones?: SortOrderInput | SortOrder
    iniciadoEn?: SortOrder
    actualizadoEn?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    libro?: LibroOrderByWithRelationInput
  }

  export type ProgresoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    usuarioId_libroId?: ProgresoUsuarioIdLibroIdCompoundUniqueInput
    AND?: ProgresoWhereInput | ProgresoWhereInput[]
    OR?: ProgresoWhereInput[]
    NOT?: ProgresoWhereInput | ProgresoWhereInput[]
    usuarioId?: StringFilter<"Progreso"> | string
    libroId?: StringFilter<"Progreso"> | string
    paginaActual?: IntFilter<"Progreso"> | number
    estado?: EnumEstadoLecturaFilter<"Progreso"> | $Enums.EstadoLectura
    resumen?: StringNullableFilter<"Progreso"> | string | null
    observaciones?: StringNullableFilter<"Progreso"> | string | null
    iniciadoEn?: DateTimeFilter<"Progreso"> | Date | string
    actualizadoEn?: DateTimeFilter<"Progreso"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    libro?: XOR<LibroScalarRelationFilter, LibroWhereInput>
  }, "id" | "usuarioId_libroId">

  export type ProgresoOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    libroId?: SortOrder
    paginaActual?: SortOrder
    estado?: SortOrder
    resumen?: SortOrderInput | SortOrder
    observaciones?: SortOrderInput | SortOrder
    iniciadoEn?: SortOrder
    actualizadoEn?: SortOrder
    _count?: ProgresoCountOrderByAggregateInput
    _avg?: ProgresoAvgOrderByAggregateInput
    _max?: ProgresoMaxOrderByAggregateInput
    _min?: ProgresoMinOrderByAggregateInput
    _sum?: ProgresoSumOrderByAggregateInput
  }

  export type ProgresoScalarWhereWithAggregatesInput = {
    AND?: ProgresoScalarWhereWithAggregatesInput | ProgresoScalarWhereWithAggregatesInput[]
    OR?: ProgresoScalarWhereWithAggregatesInput[]
    NOT?: ProgresoScalarWhereWithAggregatesInput | ProgresoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Progreso"> | string
    usuarioId?: StringWithAggregatesFilter<"Progreso"> | string
    libroId?: StringWithAggregatesFilter<"Progreso"> | string
    paginaActual?: IntWithAggregatesFilter<"Progreso"> | number
    estado?: EnumEstadoLecturaWithAggregatesFilter<"Progreso"> | $Enums.EstadoLectura
    resumen?: StringNullableWithAggregatesFilter<"Progreso"> | string | null
    observaciones?: StringNullableWithAggregatesFilter<"Progreso"> | string | null
    iniciadoEn?: DateTimeWithAggregatesFilter<"Progreso"> | Date | string
    actualizadoEn?: DateTimeWithAggregatesFilter<"Progreso"> | Date | string
  }

  export type AuditoriaWhereInput = {
    AND?: AuditoriaWhereInput | AuditoriaWhereInput[]
    OR?: AuditoriaWhereInput[]
    NOT?: AuditoriaWhereInput | AuditoriaWhereInput[]
    id?: StringFilter<"Auditoria"> | string
    usuarioId?: StringNullableFilter<"Auditoria"> | string | null
    accion?: StringFilter<"Auditoria"> | string
    exito?: BoolFilter<"Auditoria"> | boolean
    ip?: StringNullableFilter<"Auditoria"> | string | null
    userAgent?: StringNullableFilter<"Auditoria"> | string | null
    detalle?: StringNullableFilter<"Auditoria"> | string | null
    creadoEn?: DateTimeFilter<"Auditoria"> | Date | string
    usuario?: XOR<UsuarioNullableScalarRelationFilter, UsuarioWhereInput> | null
  }

  export type AuditoriaOrderByWithRelationInput = {
    id?: SortOrder
    usuarioId?: SortOrderInput | SortOrder
    accion?: SortOrder
    exito?: SortOrder
    ip?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    detalle?: SortOrderInput | SortOrder
    creadoEn?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type AuditoriaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditoriaWhereInput | AuditoriaWhereInput[]
    OR?: AuditoriaWhereInput[]
    NOT?: AuditoriaWhereInput | AuditoriaWhereInput[]
    usuarioId?: StringNullableFilter<"Auditoria"> | string | null
    accion?: StringFilter<"Auditoria"> | string
    exito?: BoolFilter<"Auditoria"> | boolean
    ip?: StringNullableFilter<"Auditoria"> | string | null
    userAgent?: StringNullableFilter<"Auditoria"> | string | null
    detalle?: StringNullableFilter<"Auditoria"> | string | null
    creadoEn?: DateTimeFilter<"Auditoria"> | Date | string
    usuario?: XOR<UsuarioNullableScalarRelationFilter, UsuarioWhereInput> | null
  }, "id">

  export type AuditoriaOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioId?: SortOrderInput | SortOrder
    accion?: SortOrder
    exito?: SortOrder
    ip?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    detalle?: SortOrderInput | SortOrder
    creadoEn?: SortOrder
    _count?: AuditoriaCountOrderByAggregateInput
    _max?: AuditoriaMaxOrderByAggregateInput
    _min?: AuditoriaMinOrderByAggregateInput
  }

  export type AuditoriaScalarWhereWithAggregatesInput = {
    AND?: AuditoriaScalarWhereWithAggregatesInput | AuditoriaScalarWhereWithAggregatesInput[]
    OR?: AuditoriaScalarWhereWithAggregatesInput[]
    NOT?: AuditoriaScalarWhereWithAggregatesInput | AuditoriaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Auditoria"> | string
    usuarioId?: StringNullableWithAggregatesFilter<"Auditoria"> | string | null
    accion?: StringWithAggregatesFilter<"Auditoria"> | string
    exito?: BoolWithAggregatesFilter<"Auditoria"> | boolean
    ip?: StringNullableWithAggregatesFilter<"Auditoria"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"Auditoria"> | string | null
    detalle?: StringNullableWithAggregatesFilter<"Auditoria"> | string | null
    creadoEn?: DateTimeWithAggregatesFilter<"Auditoria"> | Date | string
  }

  export type UsuarioCreateInput = {
    id?: string
    email: string
    passwordHash: string
    nombre: string
    rol?: $Enums.Rol
    intentosFallidos?: number
    bloqueadoHasta?: Date | string | null
    ultimoAcceso?: Date | string | null
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    progresos?: ProgresoCreateNestedManyWithoutUsuarioInput
    auditorias?: AuditoriaCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: string
    email: string
    passwordHash: string
    nombre: string
    rol?: $Enums.Rol
    intentosFallidos?: number
    bloqueadoHasta?: Date | string | null
    ultimoAcceso?: Date | string | null
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    progresos?: ProgresoUncheckedCreateNestedManyWithoutUsuarioInput
    auditorias?: AuditoriaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    intentosFallidos?: IntFieldUpdateOperationsInput | number
    bloqueadoHasta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultimoAcceso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    progresos?: ProgresoUpdateManyWithoutUsuarioNestedInput
    auditorias?: AuditoriaUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    intentosFallidos?: IntFieldUpdateOperationsInput | number
    bloqueadoHasta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultimoAcceso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    progresos?: ProgresoUncheckedUpdateManyWithoutUsuarioNestedInput
    auditorias?: AuditoriaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: string
    email: string
    passwordHash: string
    nombre: string
    rol?: $Enums.Rol
    intentosFallidos?: number
    bloqueadoHasta?: Date | string | null
    ultimoAcceso?: Date | string | null
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type UsuarioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    intentosFallidos?: IntFieldUpdateOperationsInput | number
    bloqueadoHasta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultimoAcceso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    intentosFallidos?: IntFieldUpdateOperationsInput | number
    bloqueadoHasta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultimoAcceso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LibroCreateInput = {
    id?: string
    titulo: string
    autor: string
    descripcion: string
    portadaUrl?: string | null
    publicado?: boolean
    creadoEn?: Date | string
    paginas?: PaginaCreateNestedManyWithoutLibroInput
    progresos?: ProgresoCreateNestedManyWithoutLibroInput
  }

  export type LibroUncheckedCreateInput = {
    id?: string
    titulo: string
    autor: string
    descripcion: string
    portadaUrl?: string | null
    publicado?: boolean
    creadoEn?: Date | string
    paginas?: PaginaUncheckedCreateNestedManyWithoutLibroInput
    progresos?: ProgresoUncheckedCreateNestedManyWithoutLibroInput
  }

  export type LibroUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    portadaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publicado?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    paginas?: PaginaUpdateManyWithoutLibroNestedInput
    progresos?: ProgresoUpdateManyWithoutLibroNestedInput
  }

  export type LibroUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    portadaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publicado?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    paginas?: PaginaUncheckedUpdateManyWithoutLibroNestedInput
    progresos?: ProgresoUncheckedUpdateManyWithoutLibroNestedInput
  }

  export type LibroCreateManyInput = {
    id?: string
    titulo: string
    autor: string
    descripcion: string
    portadaUrl?: string | null
    publicado?: boolean
    creadoEn?: Date | string
  }

  export type LibroUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    portadaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publicado?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LibroUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    portadaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publicado?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaginaCreateInput = {
    id?: string
    numero: number
    contenido: string
    libro: LibroCreateNestedOneWithoutPaginasInput
  }

  export type PaginaUncheckedCreateInput = {
    id?: string
    libroId: string
    numero: number
    contenido: string
  }

  export type PaginaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    contenido?: StringFieldUpdateOperationsInput | string
    libro?: LibroUpdateOneRequiredWithoutPaginasNestedInput
  }

  export type PaginaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    libroId?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    contenido?: StringFieldUpdateOperationsInput | string
  }

  export type PaginaCreateManyInput = {
    id?: string
    libroId: string
    numero: number
    contenido: string
  }

  export type PaginaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    contenido?: StringFieldUpdateOperationsInput | string
  }

  export type PaginaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    libroId?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    contenido?: StringFieldUpdateOperationsInput | string
  }

  export type ProgresoCreateInput = {
    id?: string
    paginaActual?: number
    estado?: $Enums.EstadoLectura
    resumen?: string | null
    observaciones?: string | null
    iniciadoEn?: Date | string
    actualizadoEn?: Date | string
    usuario: UsuarioCreateNestedOneWithoutProgresosInput
    libro: LibroCreateNestedOneWithoutProgresosInput
  }

  export type ProgresoUncheckedCreateInput = {
    id?: string
    usuarioId: string
    libroId: string
    paginaActual?: number
    estado?: $Enums.EstadoLectura
    resumen?: string | null
    observaciones?: string | null
    iniciadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type ProgresoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    paginaActual?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoLecturaFieldUpdateOperationsInput | $Enums.EstadoLectura
    resumen?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    iniciadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutProgresosNestedInput
    libro?: LibroUpdateOneRequiredWithoutProgresosNestedInput
  }

  export type ProgresoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    libroId?: StringFieldUpdateOperationsInput | string
    paginaActual?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoLecturaFieldUpdateOperationsInput | $Enums.EstadoLectura
    resumen?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    iniciadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgresoCreateManyInput = {
    id?: string
    usuarioId: string
    libroId: string
    paginaActual?: number
    estado?: $Enums.EstadoLectura
    resumen?: string | null
    observaciones?: string | null
    iniciadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type ProgresoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    paginaActual?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoLecturaFieldUpdateOperationsInput | $Enums.EstadoLectura
    resumen?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    iniciadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgresoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    libroId?: StringFieldUpdateOperationsInput | string
    paginaActual?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoLecturaFieldUpdateOperationsInput | $Enums.EstadoLectura
    resumen?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    iniciadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditoriaCreateInput = {
    id?: string
    accion: string
    exito: boolean
    ip?: string | null
    userAgent?: string | null
    detalle?: string | null
    creadoEn?: Date | string
    usuario?: UsuarioCreateNestedOneWithoutAuditoriasInput
  }

  export type AuditoriaUncheckedCreateInput = {
    id?: string
    usuarioId?: string | null
    accion: string
    exito: boolean
    ip?: string | null
    userAgent?: string | null
    detalle?: string | null
    creadoEn?: Date | string
  }

  export type AuditoriaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accion?: StringFieldUpdateOperationsInput | string
    exito?: BoolFieldUpdateOperationsInput | boolean
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    detalle?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneWithoutAuditoriasNestedInput
  }

  export type AuditoriaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: NullableStringFieldUpdateOperationsInput | string | null
    accion?: StringFieldUpdateOperationsInput | string
    exito?: BoolFieldUpdateOperationsInput | boolean
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    detalle?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditoriaCreateManyInput = {
    id?: string
    usuarioId?: string | null
    accion: string
    exito: boolean
    ip?: string | null
    userAgent?: string | null
    detalle?: string | null
    creadoEn?: Date | string
  }

  export type AuditoriaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accion?: StringFieldUpdateOperationsInput | string
    exito?: BoolFieldUpdateOperationsInput | boolean
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    detalle?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditoriaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: NullableStringFieldUpdateOperationsInput | string | null
    accion?: StringFieldUpdateOperationsInput | string
    exito?: BoolFieldUpdateOperationsInput | boolean
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    detalle?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumRolFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    not?: NestedEnumRolFilter<$PrismaModel> | $Enums.Rol
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

  export type ProgresoListRelationFilter = {
    every?: ProgresoWhereInput
    some?: ProgresoWhereInput
    none?: ProgresoWhereInput
  }

  export type AuditoriaListRelationFilter = {
    every?: AuditoriaWhereInput
    some?: AuditoriaWhereInput
    none?: AuditoriaWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProgresoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuditoriaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    nombre?: SortOrder
    rol?: SortOrder
    intentosFallidos?: SortOrder
    bloqueadoHasta?: SortOrder
    ultimoAcceso?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    intentosFallidos?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    nombre?: SortOrder
    rol?: SortOrder
    intentosFallidos?: SortOrder
    bloqueadoHasta?: SortOrder
    ultimoAcceso?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    nombre?: SortOrder
    rol?: SortOrder
    intentosFallidos?: SortOrder
    bloqueadoHasta?: SortOrder
    ultimoAcceso?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    intentosFallidos?: SortOrder
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

  export type EnumRolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    not?: NestedEnumRolWithAggregatesFilter<$PrismaModel> | $Enums.Rol
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolFilter<$PrismaModel>
    _max?: NestedEnumRolFilter<$PrismaModel>
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PaginaListRelationFilter = {
    every?: PaginaWhereInput
    some?: PaginaWhereInput
    none?: PaginaWhereInput
  }

  export type PaginaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LibroCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    autor?: SortOrder
    descripcion?: SortOrder
    portadaUrl?: SortOrder
    publicado?: SortOrder
    creadoEn?: SortOrder
  }

  export type LibroMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    autor?: SortOrder
    descripcion?: SortOrder
    portadaUrl?: SortOrder
    publicado?: SortOrder
    creadoEn?: SortOrder
  }

  export type LibroMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    autor?: SortOrder
    descripcion?: SortOrder
    portadaUrl?: SortOrder
    publicado?: SortOrder
    creadoEn?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type LibroScalarRelationFilter = {
    is?: LibroWhereInput
    isNot?: LibroWhereInput
  }

  export type PaginaLibroIdNumeroCompoundUniqueInput = {
    libroId: string
    numero: number
  }

  export type PaginaCountOrderByAggregateInput = {
    id?: SortOrder
    libroId?: SortOrder
    numero?: SortOrder
    contenido?: SortOrder
  }

  export type PaginaAvgOrderByAggregateInput = {
    numero?: SortOrder
  }

  export type PaginaMaxOrderByAggregateInput = {
    id?: SortOrder
    libroId?: SortOrder
    numero?: SortOrder
    contenido?: SortOrder
  }

  export type PaginaMinOrderByAggregateInput = {
    id?: SortOrder
    libroId?: SortOrder
    numero?: SortOrder
    contenido?: SortOrder
  }

  export type PaginaSumOrderByAggregateInput = {
    numero?: SortOrder
  }

  export type EnumEstadoLecturaFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoLectura | EnumEstadoLecturaFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoLectura[] | ListEnumEstadoLecturaFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoLectura[] | ListEnumEstadoLecturaFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoLecturaFilter<$PrismaModel> | $Enums.EstadoLectura
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type ProgresoUsuarioIdLibroIdCompoundUniqueInput = {
    usuarioId: string
    libroId: string
  }

  export type ProgresoCountOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    libroId?: SortOrder
    paginaActual?: SortOrder
    estado?: SortOrder
    resumen?: SortOrder
    observaciones?: SortOrder
    iniciadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type ProgresoAvgOrderByAggregateInput = {
    paginaActual?: SortOrder
  }

  export type ProgresoMaxOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    libroId?: SortOrder
    paginaActual?: SortOrder
    estado?: SortOrder
    resumen?: SortOrder
    observaciones?: SortOrder
    iniciadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type ProgresoMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    libroId?: SortOrder
    paginaActual?: SortOrder
    estado?: SortOrder
    resumen?: SortOrder
    observaciones?: SortOrder
    iniciadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type ProgresoSumOrderByAggregateInput = {
    paginaActual?: SortOrder
  }

  export type EnumEstadoLecturaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoLectura | EnumEstadoLecturaFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoLectura[] | ListEnumEstadoLecturaFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoLectura[] | ListEnumEstadoLecturaFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoLecturaWithAggregatesFilter<$PrismaModel> | $Enums.EstadoLectura
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoLecturaFilter<$PrismaModel>
    _max?: NestedEnumEstadoLecturaFilter<$PrismaModel>
  }

  export type UsuarioNullableScalarRelationFilter = {
    is?: UsuarioWhereInput | null
    isNot?: UsuarioWhereInput | null
  }

  export type AuditoriaCountOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    accion?: SortOrder
    exito?: SortOrder
    ip?: SortOrder
    userAgent?: SortOrder
    detalle?: SortOrder
    creadoEn?: SortOrder
  }

  export type AuditoriaMaxOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    accion?: SortOrder
    exito?: SortOrder
    ip?: SortOrder
    userAgent?: SortOrder
    detalle?: SortOrder
    creadoEn?: SortOrder
  }

  export type AuditoriaMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    accion?: SortOrder
    exito?: SortOrder
    ip?: SortOrder
    userAgent?: SortOrder
    detalle?: SortOrder
    creadoEn?: SortOrder
  }

  export type ProgresoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ProgresoCreateWithoutUsuarioInput, ProgresoUncheckedCreateWithoutUsuarioInput> | ProgresoCreateWithoutUsuarioInput[] | ProgresoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ProgresoCreateOrConnectWithoutUsuarioInput | ProgresoCreateOrConnectWithoutUsuarioInput[]
    createMany?: ProgresoCreateManyUsuarioInputEnvelope
    connect?: ProgresoWhereUniqueInput | ProgresoWhereUniqueInput[]
  }

  export type AuditoriaCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<AuditoriaCreateWithoutUsuarioInput, AuditoriaUncheckedCreateWithoutUsuarioInput> | AuditoriaCreateWithoutUsuarioInput[] | AuditoriaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: AuditoriaCreateOrConnectWithoutUsuarioInput | AuditoriaCreateOrConnectWithoutUsuarioInput[]
    createMany?: AuditoriaCreateManyUsuarioInputEnvelope
    connect?: AuditoriaWhereUniqueInput | AuditoriaWhereUniqueInput[]
  }

  export type ProgresoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ProgresoCreateWithoutUsuarioInput, ProgresoUncheckedCreateWithoutUsuarioInput> | ProgresoCreateWithoutUsuarioInput[] | ProgresoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ProgresoCreateOrConnectWithoutUsuarioInput | ProgresoCreateOrConnectWithoutUsuarioInput[]
    createMany?: ProgresoCreateManyUsuarioInputEnvelope
    connect?: ProgresoWhereUniqueInput | ProgresoWhereUniqueInput[]
  }

  export type AuditoriaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<AuditoriaCreateWithoutUsuarioInput, AuditoriaUncheckedCreateWithoutUsuarioInput> | AuditoriaCreateWithoutUsuarioInput[] | AuditoriaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: AuditoriaCreateOrConnectWithoutUsuarioInput | AuditoriaCreateOrConnectWithoutUsuarioInput[]
    createMany?: AuditoriaCreateManyUsuarioInputEnvelope
    connect?: AuditoriaWhereUniqueInput | AuditoriaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRolFieldUpdateOperationsInput = {
    set?: $Enums.Rol
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProgresoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ProgresoCreateWithoutUsuarioInput, ProgresoUncheckedCreateWithoutUsuarioInput> | ProgresoCreateWithoutUsuarioInput[] | ProgresoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ProgresoCreateOrConnectWithoutUsuarioInput | ProgresoCreateOrConnectWithoutUsuarioInput[]
    upsert?: ProgresoUpsertWithWhereUniqueWithoutUsuarioInput | ProgresoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ProgresoCreateManyUsuarioInputEnvelope
    set?: ProgresoWhereUniqueInput | ProgresoWhereUniqueInput[]
    disconnect?: ProgresoWhereUniqueInput | ProgresoWhereUniqueInput[]
    delete?: ProgresoWhereUniqueInput | ProgresoWhereUniqueInput[]
    connect?: ProgresoWhereUniqueInput | ProgresoWhereUniqueInput[]
    update?: ProgresoUpdateWithWhereUniqueWithoutUsuarioInput | ProgresoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ProgresoUpdateManyWithWhereWithoutUsuarioInput | ProgresoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ProgresoScalarWhereInput | ProgresoScalarWhereInput[]
  }

  export type AuditoriaUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<AuditoriaCreateWithoutUsuarioInput, AuditoriaUncheckedCreateWithoutUsuarioInput> | AuditoriaCreateWithoutUsuarioInput[] | AuditoriaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: AuditoriaCreateOrConnectWithoutUsuarioInput | AuditoriaCreateOrConnectWithoutUsuarioInput[]
    upsert?: AuditoriaUpsertWithWhereUniqueWithoutUsuarioInput | AuditoriaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: AuditoriaCreateManyUsuarioInputEnvelope
    set?: AuditoriaWhereUniqueInput | AuditoriaWhereUniqueInput[]
    disconnect?: AuditoriaWhereUniqueInput | AuditoriaWhereUniqueInput[]
    delete?: AuditoriaWhereUniqueInput | AuditoriaWhereUniqueInput[]
    connect?: AuditoriaWhereUniqueInput | AuditoriaWhereUniqueInput[]
    update?: AuditoriaUpdateWithWhereUniqueWithoutUsuarioInput | AuditoriaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: AuditoriaUpdateManyWithWhereWithoutUsuarioInput | AuditoriaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: AuditoriaScalarWhereInput | AuditoriaScalarWhereInput[]
  }

  export type ProgresoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ProgresoCreateWithoutUsuarioInput, ProgresoUncheckedCreateWithoutUsuarioInput> | ProgresoCreateWithoutUsuarioInput[] | ProgresoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ProgresoCreateOrConnectWithoutUsuarioInput | ProgresoCreateOrConnectWithoutUsuarioInput[]
    upsert?: ProgresoUpsertWithWhereUniqueWithoutUsuarioInput | ProgresoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ProgresoCreateManyUsuarioInputEnvelope
    set?: ProgresoWhereUniqueInput | ProgresoWhereUniqueInput[]
    disconnect?: ProgresoWhereUniqueInput | ProgresoWhereUniqueInput[]
    delete?: ProgresoWhereUniqueInput | ProgresoWhereUniqueInput[]
    connect?: ProgresoWhereUniqueInput | ProgresoWhereUniqueInput[]
    update?: ProgresoUpdateWithWhereUniqueWithoutUsuarioInput | ProgresoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ProgresoUpdateManyWithWhereWithoutUsuarioInput | ProgresoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ProgresoScalarWhereInput | ProgresoScalarWhereInput[]
  }

  export type AuditoriaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<AuditoriaCreateWithoutUsuarioInput, AuditoriaUncheckedCreateWithoutUsuarioInput> | AuditoriaCreateWithoutUsuarioInput[] | AuditoriaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: AuditoriaCreateOrConnectWithoutUsuarioInput | AuditoriaCreateOrConnectWithoutUsuarioInput[]
    upsert?: AuditoriaUpsertWithWhereUniqueWithoutUsuarioInput | AuditoriaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: AuditoriaCreateManyUsuarioInputEnvelope
    set?: AuditoriaWhereUniqueInput | AuditoriaWhereUniqueInput[]
    disconnect?: AuditoriaWhereUniqueInput | AuditoriaWhereUniqueInput[]
    delete?: AuditoriaWhereUniqueInput | AuditoriaWhereUniqueInput[]
    connect?: AuditoriaWhereUniqueInput | AuditoriaWhereUniqueInput[]
    update?: AuditoriaUpdateWithWhereUniqueWithoutUsuarioInput | AuditoriaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: AuditoriaUpdateManyWithWhereWithoutUsuarioInput | AuditoriaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: AuditoriaScalarWhereInput | AuditoriaScalarWhereInput[]
  }

  export type PaginaCreateNestedManyWithoutLibroInput = {
    create?: XOR<PaginaCreateWithoutLibroInput, PaginaUncheckedCreateWithoutLibroInput> | PaginaCreateWithoutLibroInput[] | PaginaUncheckedCreateWithoutLibroInput[]
    connectOrCreate?: PaginaCreateOrConnectWithoutLibroInput | PaginaCreateOrConnectWithoutLibroInput[]
    createMany?: PaginaCreateManyLibroInputEnvelope
    connect?: PaginaWhereUniqueInput | PaginaWhereUniqueInput[]
  }

  export type ProgresoCreateNestedManyWithoutLibroInput = {
    create?: XOR<ProgresoCreateWithoutLibroInput, ProgresoUncheckedCreateWithoutLibroInput> | ProgresoCreateWithoutLibroInput[] | ProgresoUncheckedCreateWithoutLibroInput[]
    connectOrCreate?: ProgresoCreateOrConnectWithoutLibroInput | ProgresoCreateOrConnectWithoutLibroInput[]
    createMany?: ProgresoCreateManyLibroInputEnvelope
    connect?: ProgresoWhereUniqueInput | ProgresoWhereUniqueInput[]
  }

  export type PaginaUncheckedCreateNestedManyWithoutLibroInput = {
    create?: XOR<PaginaCreateWithoutLibroInput, PaginaUncheckedCreateWithoutLibroInput> | PaginaCreateWithoutLibroInput[] | PaginaUncheckedCreateWithoutLibroInput[]
    connectOrCreate?: PaginaCreateOrConnectWithoutLibroInput | PaginaCreateOrConnectWithoutLibroInput[]
    createMany?: PaginaCreateManyLibroInputEnvelope
    connect?: PaginaWhereUniqueInput | PaginaWhereUniqueInput[]
  }

  export type ProgresoUncheckedCreateNestedManyWithoutLibroInput = {
    create?: XOR<ProgresoCreateWithoutLibroInput, ProgresoUncheckedCreateWithoutLibroInput> | ProgresoCreateWithoutLibroInput[] | ProgresoUncheckedCreateWithoutLibroInput[]
    connectOrCreate?: ProgresoCreateOrConnectWithoutLibroInput | ProgresoCreateOrConnectWithoutLibroInput[]
    createMany?: ProgresoCreateManyLibroInputEnvelope
    connect?: ProgresoWhereUniqueInput | ProgresoWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type PaginaUpdateManyWithoutLibroNestedInput = {
    create?: XOR<PaginaCreateWithoutLibroInput, PaginaUncheckedCreateWithoutLibroInput> | PaginaCreateWithoutLibroInput[] | PaginaUncheckedCreateWithoutLibroInput[]
    connectOrCreate?: PaginaCreateOrConnectWithoutLibroInput | PaginaCreateOrConnectWithoutLibroInput[]
    upsert?: PaginaUpsertWithWhereUniqueWithoutLibroInput | PaginaUpsertWithWhereUniqueWithoutLibroInput[]
    createMany?: PaginaCreateManyLibroInputEnvelope
    set?: PaginaWhereUniqueInput | PaginaWhereUniqueInput[]
    disconnect?: PaginaWhereUniqueInput | PaginaWhereUniqueInput[]
    delete?: PaginaWhereUniqueInput | PaginaWhereUniqueInput[]
    connect?: PaginaWhereUniqueInput | PaginaWhereUniqueInput[]
    update?: PaginaUpdateWithWhereUniqueWithoutLibroInput | PaginaUpdateWithWhereUniqueWithoutLibroInput[]
    updateMany?: PaginaUpdateManyWithWhereWithoutLibroInput | PaginaUpdateManyWithWhereWithoutLibroInput[]
    deleteMany?: PaginaScalarWhereInput | PaginaScalarWhereInput[]
  }

  export type ProgresoUpdateManyWithoutLibroNestedInput = {
    create?: XOR<ProgresoCreateWithoutLibroInput, ProgresoUncheckedCreateWithoutLibroInput> | ProgresoCreateWithoutLibroInput[] | ProgresoUncheckedCreateWithoutLibroInput[]
    connectOrCreate?: ProgresoCreateOrConnectWithoutLibroInput | ProgresoCreateOrConnectWithoutLibroInput[]
    upsert?: ProgresoUpsertWithWhereUniqueWithoutLibroInput | ProgresoUpsertWithWhereUniqueWithoutLibroInput[]
    createMany?: ProgresoCreateManyLibroInputEnvelope
    set?: ProgresoWhereUniqueInput | ProgresoWhereUniqueInput[]
    disconnect?: ProgresoWhereUniqueInput | ProgresoWhereUniqueInput[]
    delete?: ProgresoWhereUniqueInput | ProgresoWhereUniqueInput[]
    connect?: ProgresoWhereUniqueInput | ProgresoWhereUniqueInput[]
    update?: ProgresoUpdateWithWhereUniqueWithoutLibroInput | ProgresoUpdateWithWhereUniqueWithoutLibroInput[]
    updateMany?: ProgresoUpdateManyWithWhereWithoutLibroInput | ProgresoUpdateManyWithWhereWithoutLibroInput[]
    deleteMany?: ProgresoScalarWhereInput | ProgresoScalarWhereInput[]
  }

  export type PaginaUncheckedUpdateManyWithoutLibroNestedInput = {
    create?: XOR<PaginaCreateWithoutLibroInput, PaginaUncheckedCreateWithoutLibroInput> | PaginaCreateWithoutLibroInput[] | PaginaUncheckedCreateWithoutLibroInput[]
    connectOrCreate?: PaginaCreateOrConnectWithoutLibroInput | PaginaCreateOrConnectWithoutLibroInput[]
    upsert?: PaginaUpsertWithWhereUniqueWithoutLibroInput | PaginaUpsertWithWhereUniqueWithoutLibroInput[]
    createMany?: PaginaCreateManyLibroInputEnvelope
    set?: PaginaWhereUniqueInput | PaginaWhereUniqueInput[]
    disconnect?: PaginaWhereUniqueInput | PaginaWhereUniqueInput[]
    delete?: PaginaWhereUniqueInput | PaginaWhereUniqueInput[]
    connect?: PaginaWhereUniqueInput | PaginaWhereUniqueInput[]
    update?: PaginaUpdateWithWhereUniqueWithoutLibroInput | PaginaUpdateWithWhereUniqueWithoutLibroInput[]
    updateMany?: PaginaUpdateManyWithWhereWithoutLibroInput | PaginaUpdateManyWithWhereWithoutLibroInput[]
    deleteMany?: PaginaScalarWhereInput | PaginaScalarWhereInput[]
  }

  export type ProgresoUncheckedUpdateManyWithoutLibroNestedInput = {
    create?: XOR<ProgresoCreateWithoutLibroInput, ProgresoUncheckedCreateWithoutLibroInput> | ProgresoCreateWithoutLibroInput[] | ProgresoUncheckedCreateWithoutLibroInput[]
    connectOrCreate?: ProgresoCreateOrConnectWithoutLibroInput | ProgresoCreateOrConnectWithoutLibroInput[]
    upsert?: ProgresoUpsertWithWhereUniqueWithoutLibroInput | ProgresoUpsertWithWhereUniqueWithoutLibroInput[]
    createMany?: ProgresoCreateManyLibroInputEnvelope
    set?: ProgresoWhereUniqueInput | ProgresoWhereUniqueInput[]
    disconnect?: ProgresoWhereUniqueInput | ProgresoWhereUniqueInput[]
    delete?: ProgresoWhereUniqueInput | ProgresoWhereUniqueInput[]
    connect?: ProgresoWhereUniqueInput | ProgresoWhereUniqueInput[]
    update?: ProgresoUpdateWithWhereUniqueWithoutLibroInput | ProgresoUpdateWithWhereUniqueWithoutLibroInput[]
    updateMany?: ProgresoUpdateManyWithWhereWithoutLibroInput | ProgresoUpdateManyWithWhereWithoutLibroInput[]
    deleteMany?: ProgresoScalarWhereInput | ProgresoScalarWhereInput[]
  }

  export type LibroCreateNestedOneWithoutPaginasInput = {
    create?: XOR<LibroCreateWithoutPaginasInput, LibroUncheckedCreateWithoutPaginasInput>
    connectOrCreate?: LibroCreateOrConnectWithoutPaginasInput
    connect?: LibroWhereUniqueInput
  }

  export type LibroUpdateOneRequiredWithoutPaginasNestedInput = {
    create?: XOR<LibroCreateWithoutPaginasInput, LibroUncheckedCreateWithoutPaginasInput>
    connectOrCreate?: LibroCreateOrConnectWithoutPaginasInput
    upsert?: LibroUpsertWithoutPaginasInput
    connect?: LibroWhereUniqueInput
    update?: XOR<XOR<LibroUpdateToOneWithWhereWithoutPaginasInput, LibroUpdateWithoutPaginasInput>, LibroUncheckedUpdateWithoutPaginasInput>
  }

  export type UsuarioCreateNestedOneWithoutProgresosInput = {
    create?: XOR<UsuarioCreateWithoutProgresosInput, UsuarioUncheckedCreateWithoutProgresosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutProgresosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type LibroCreateNestedOneWithoutProgresosInput = {
    create?: XOR<LibroCreateWithoutProgresosInput, LibroUncheckedCreateWithoutProgresosInput>
    connectOrCreate?: LibroCreateOrConnectWithoutProgresosInput
    connect?: LibroWhereUniqueInput
  }

  export type EnumEstadoLecturaFieldUpdateOperationsInput = {
    set?: $Enums.EstadoLectura
  }

  export type UsuarioUpdateOneRequiredWithoutProgresosNestedInput = {
    create?: XOR<UsuarioCreateWithoutProgresosInput, UsuarioUncheckedCreateWithoutProgresosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutProgresosInput
    upsert?: UsuarioUpsertWithoutProgresosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutProgresosInput, UsuarioUpdateWithoutProgresosInput>, UsuarioUncheckedUpdateWithoutProgresosInput>
  }

  export type LibroUpdateOneRequiredWithoutProgresosNestedInput = {
    create?: XOR<LibroCreateWithoutProgresosInput, LibroUncheckedCreateWithoutProgresosInput>
    connectOrCreate?: LibroCreateOrConnectWithoutProgresosInput
    upsert?: LibroUpsertWithoutProgresosInput
    connect?: LibroWhereUniqueInput
    update?: XOR<XOR<LibroUpdateToOneWithWhereWithoutProgresosInput, LibroUpdateWithoutProgresosInput>, LibroUncheckedUpdateWithoutProgresosInput>
  }

  export type UsuarioCreateNestedOneWithoutAuditoriasInput = {
    create?: XOR<UsuarioCreateWithoutAuditoriasInput, UsuarioUncheckedCreateWithoutAuditoriasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutAuditoriasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioUpdateOneWithoutAuditoriasNestedInput = {
    create?: XOR<UsuarioCreateWithoutAuditoriasInput, UsuarioUncheckedCreateWithoutAuditoriasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutAuditoriasInput
    upsert?: UsuarioUpsertWithoutAuditoriasInput
    disconnect?: UsuarioWhereInput | boolean
    delete?: UsuarioWhereInput | boolean
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutAuditoriasInput, UsuarioUpdateWithoutAuditoriasInput>, UsuarioUncheckedUpdateWithoutAuditoriasInput>
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

  export type NestedEnumRolFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    not?: NestedEnumRolFilter<$PrismaModel> | $Enums.Rol
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

  export type NestedEnumRolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    not?: NestedEnumRolWithAggregatesFilter<$PrismaModel> | $Enums.Rol
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolFilter<$PrismaModel>
    _max?: NestedEnumRolFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumEstadoLecturaFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoLectura | EnumEstadoLecturaFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoLectura[] | ListEnumEstadoLecturaFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoLectura[] | ListEnumEstadoLecturaFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoLecturaFilter<$PrismaModel> | $Enums.EstadoLectura
  }

  export type NestedEnumEstadoLecturaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoLectura | EnumEstadoLecturaFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoLectura[] | ListEnumEstadoLecturaFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoLectura[] | ListEnumEstadoLecturaFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoLecturaWithAggregatesFilter<$PrismaModel> | $Enums.EstadoLectura
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoLecturaFilter<$PrismaModel>
    _max?: NestedEnumEstadoLecturaFilter<$PrismaModel>
  }

  export type ProgresoCreateWithoutUsuarioInput = {
    id?: string
    paginaActual?: number
    estado?: $Enums.EstadoLectura
    resumen?: string | null
    observaciones?: string | null
    iniciadoEn?: Date | string
    actualizadoEn?: Date | string
    libro: LibroCreateNestedOneWithoutProgresosInput
  }

  export type ProgresoUncheckedCreateWithoutUsuarioInput = {
    id?: string
    libroId: string
    paginaActual?: number
    estado?: $Enums.EstadoLectura
    resumen?: string | null
    observaciones?: string | null
    iniciadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type ProgresoCreateOrConnectWithoutUsuarioInput = {
    where: ProgresoWhereUniqueInput
    create: XOR<ProgresoCreateWithoutUsuarioInput, ProgresoUncheckedCreateWithoutUsuarioInput>
  }

  export type ProgresoCreateManyUsuarioInputEnvelope = {
    data: ProgresoCreateManyUsuarioInput | ProgresoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type AuditoriaCreateWithoutUsuarioInput = {
    id?: string
    accion: string
    exito: boolean
    ip?: string | null
    userAgent?: string | null
    detalle?: string | null
    creadoEn?: Date | string
  }

  export type AuditoriaUncheckedCreateWithoutUsuarioInput = {
    id?: string
    accion: string
    exito: boolean
    ip?: string | null
    userAgent?: string | null
    detalle?: string | null
    creadoEn?: Date | string
  }

  export type AuditoriaCreateOrConnectWithoutUsuarioInput = {
    where: AuditoriaWhereUniqueInput
    create: XOR<AuditoriaCreateWithoutUsuarioInput, AuditoriaUncheckedCreateWithoutUsuarioInput>
  }

  export type AuditoriaCreateManyUsuarioInputEnvelope = {
    data: AuditoriaCreateManyUsuarioInput | AuditoriaCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type ProgresoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: ProgresoWhereUniqueInput
    update: XOR<ProgresoUpdateWithoutUsuarioInput, ProgresoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<ProgresoCreateWithoutUsuarioInput, ProgresoUncheckedCreateWithoutUsuarioInput>
  }

  export type ProgresoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: ProgresoWhereUniqueInput
    data: XOR<ProgresoUpdateWithoutUsuarioInput, ProgresoUncheckedUpdateWithoutUsuarioInput>
  }

  export type ProgresoUpdateManyWithWhereWithoutUsuarioInput = {
    where: ProgresoScalarWhereInput
    data: XOR<ProgresoUpdateManyMutationInput, ProgresoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type ProgresoScalarWhereInput = {
    AND?: ProgresoScalarWhereInput | ProgresoScalarWhereInput[]
    OR?: ProgresoScalarWhereInput[]
    NOT?: ProgresoScalarWhereInput | ProgresoScalarWhereInput[]
    id?: StringFilter<"Progreso"> | string
    usuarioId?: StringFilter<"Progreso"> | string
    libroId?: StringFilter<"Progreso"> | string
    paginaActual?: IntFilter<"Progreso"> | number
    estado?: EnumEstadoLecturaFilter<"Progreso"> | $Enums.EstadoLectura
    resumen?: StringNullableFilter<"Progreso"> | string | null
    observaciones?: StringNullableFilter<"Progreso"> | string | null
    iniciadoEn?: DateTimeFilter<"Progreso"> | Date | string
    actualizadoEn?: DateTimeFilter<"Progreso"> | Date | string
  }

  export type AuditoriaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: AuditoriaWhereUniqueInput
    update: XOR<AuditoriaUpdateWithoutUsuarioInput, AuditoriaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<AuditoriaCreateWithoutUsuarioInput, AuditoriaUncheckedCreateWithoutUsuarioInput>
  }

  export type AuditoriaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: AuditoriaWhereUniqueInput
    data: XOR<AuditoriaUpdateWithoutUsuarioInput, AuditoriaUncheckedUpdateWithoutUsuarioInput>
  }

  export type AuditoriaUpdateManyWithWhereWithoutUsuarioInput = {
    where: AuditoriaScalarWhereInput
    data: XOR<AuditoriaUpdateManyMutationInput, AuditoriaUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type AuditoriaScalarWhereInput = {
    AND?: AuditoriaScalarWhereInput | AuditoriaScalarWhereInput[]
    OR?: AuditoriaScalarWhereInput[]
    NOT?: AuditoriaScalarWhereInput | AuditoriaScalarWhereInput[]
    id?: StringFilter<"Auditoria"> | string
    usuarioId?: StringNullableFilter<"Auditoria"> | string | null
    accion?: StringFilter<"Auditoria"> | string
    exito?: BoolFilter<"Auditoria"> | boolean
    ip?: StringNullableFilter<"Auditoria"> | string | null
    userAgent?: StringNullableFilter<"Auditoria"> | string | null
    detalle?: StringNullableFilter<"Auditoria"> | string | null
    creadoEn?: DateTimeFilter<"Auditoria"> | Date | string
  }

  export type PaginaCreateWithoutLibroInput = {
    id?: string
    numero: number
    contenido: string
  }

  export type PaginaUncheckedCreateWithoutLibroInput = {
    id?: string
    numero: number
    contenido: string
  }

  export type PaginaCreateOrConnectWithoutLibroInput = {
    where: PaginaWhereUniqueInput
    create: XOR<PaginaCreateWithoutLibroInput, PaginaUncheckedCreateWithoutLibroInput>
  }

  export type PaginaCreateManyLibroInputEnvelope = {
    data: PaginaCreateManyLibroInput | PaginaCreateManyLibroInput[]
    skipDuplicates?: boolean
  }

  export type ProgresoCreateWithoutLibroInput = {
    id?: string
    paginaActual?: number
    estado?: $Enums.EstadoLectura
    resumen?: string | null
    observaciones?: string | null
    iniciadoEn?: Date | string
    actualizadoEn?: Date | string
    usuario: UsuarioCreateNestedOneWithoutProgresosInput
  }

  export type ProgresoUncheckedCreateWithoutLibroInput = {
    id?: string
    usuarioId: string
    paginaActual?: number
    estado?: $Enums.EstadoLectura
    resumen?: string | null
    observaciones?: string | null
    iniciadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type ProgresoCreateOrConnectWithoutLibroInput = {
    where: ProgresoWhereUniqueInput
    create: XOR<ProgresoCreateWithoutLibroInput, ProgresoUncheckedCreateWithoutLibroInput>
  }

  export type ProgresoCreateManyLibroInputEnvelope = {
    data: ProgresoCreateManyLibroInput | ProgresoCreateManyLibroInput[]
    skipDuplicates?: boolean
  }

  export type PaginaUpsertWithWhereUniqueWithoutLibroInput = {
    where: PaginaWhereUniqueInput
    update: XOR<PaginaUpdateWithoutLibroInput, PaginaUncheckedUpdateWithoutLibroInput>
    create: XOR<PaginaCreateWithoutLibroInput, PaginaUncheckedCreateWithoutLibroInput>
  }

  export type PaginaUpdateWithWhereUniqueWithoutLibroInput = {
    where: PaginaWhereUniqueInput
    data: XOR<PaginaUpdateWithoutLibroInput, PaginaUncheckedUpdateWithoutLibroInput>
  }

  export type PaginaUpdateManyWithWhereWithoutLibroInput = {
    where: PaginaScalarWhereInput
    data: XOR<PaginaUpdateManyMutationInput, PaginaUncheckedUpdateManyWithoutLibroInput>
  }

  export type PaginaScalarWhereInput = {
    AND?: PaginaScalarWhereInput | PaginaScalarWhereInput[]
    OR?: PaginaScalarWhereInput[]
    NOT?: PaginaScalarWhereInput | PaginaScalarWhereInput[]
    id?: StringFilter<"Pagina"> | string
    libroId?: StringFilter<"Pagina"> | string
    numero?: IntFilter<"Pagina"> | number
    contenido?: StringFilter<"Pagina"> | string
  }

  export type ProgresoUpsertWithWhereUniqueWithoutLibroInput = {
    where: ProgresoWhereUniqueInput
    update: XOR<ProgresoUpdateWithoutLibroInput, ProgresoUncheckedUpdateWithoutLibroInput>
    create: XOR<ProgresoCreateWithoutLibroInput, ProgresoUncheckedCreateWithoutLibroInput>
  }

  export type ProgresoUpdateWithWhereUniqueWithoutLibroInput = {
    where: ProgresoWhereUniqueInput
    data: XOR<ProgresoUpdateWithoutLibroInput, ProgresoUncheckedUpdateWithoutLibroInput>
  }

  export type ProgresoUpdateManyWithWhereWithoutLibroInput = {
    where: ProgresoScalarWhereInput
    data: XOR<ProgresoUpdateManyMutationInput, ProgresoUncheckedUpdateManyWithoutLibroInput>
  }

  export type LibroCreateWithoutPaginasInput = {
    id?: string
    titulo: string
    autor: string
    descripcion: string
    portadaUrl?: string | null
    publicado?: boolean
    creadoEn?: Date | string
    progresos?: ProgresoCreateNestedManyWithoutLibroInput
  }

  export type LibroUncheckedCreateWithoutPaginasInput = {
    id?: string
    titulo: string
    autor: string
    descripcion: string
    portadaUrl?: string | null
    publicado?: boolean
    creadoEn?: Date | string
    progresos?: ProgresoUncheckedCreateNestedManyWithoutLibroInput
  }

  export type LibroCreateOrConnectWithoutPaginasInput = {
    where: LibroWhereUniqueInput
    create: XOR<LibroCreateWithoutPaginasInput, LibroUncheckedCreateWithoutPaginasInput>
  }

  export type LibroUpsertWithoutPaginasInput = {
    update: XOR<LibroUpdateWithoutPaginasInput, LibroUncheckedUpdateWithoutPaginasInput>
    create: XOR<LibroCreateWithoutPaginasInput, LibroUncheckedCreateWithoutPaginasInput>
    where?: LibroWhereInput
  }

  export type LibroUpdateToOneWithWhereWithoutPaginasInput = {
    where?: LibroWhereInput
    data: XOR<LibroUpdateWithoutPaginasInput, LibroUncheckedUpdateWithoutPaginasInput>
  }

  export type LibroUpdateWithoutPaginasInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    portadaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publicado?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    progresos?: ProgresoUpdateManyWithoutLibroNestedInput
  }

  export type LibroUncheckedUpdateWithoutPaginasInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    portadaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publicado?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    progresos?: ProgresoUncheckedUpdateManyWithoutLibroNestedInput
  }

  export type UsuarioCreateWithoutProgresosInput = {
    id?: string
    email: string
    passwordHash: string
    nombre: string
    rol?: $Enums.Rol
    intentosFallidos?: number
    bloqueadoHasta?: Date | string | null
    ultimoAcceso?: Date | string | null
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    auditorias?: AuditoriaCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutProgresosInput = {
    id?: string
    email: string
    passwordHash: string
    nombre: string
    rol?: $Enums.Rol
    intentosFallidos?: number
    bloqueadoHasta?: Date | string | null
    ultimoAcceso?: Date | string | null
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    auditorias?: AuditoriaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutProgresosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutProgresosInput, UsuarioUncheckedCreateWithoutProgresosInput>
  }

  export type LibroCreateWithoutProgresosInput = {
    id?: string
    titulo: string
    autor: string
    descripcion: string
    portadaUrl?: string | null
    publicado?: boolean
    creadoEn?: Date | string
    paginas?: PaginaCreateNestedManyWithoutLibroInput
  }

  export type LibroUncheckedCreateWithoutProgresosInput = {
    id?: string
    titulo: string
    autor: string
    descripcion: string
    portadaUrl?: string | null
    publicado?: boolean
    creadoEn?: Date | string
    paginas?: PaginaUncheckedCreateNestedManyWithoutLibroInput
  }

  export type LibroCreateOrConnectWithoutProgresosInput = {
    where: LibroWhereUniqueInput
    create: XOR<LibroCreateWithoutProgresosInput, LibroUncheckedCreateWithoutProgresosInput>
  }

  export type UsuarioUpsertWithoutProgresosInput = {
    update: XOR<UsuarioUpdateWithoutProgresosInput, UsuarioUncheckedUpdateWithoutProgresosInput>
    create: XOR<UsuarioCreateWithoutProgresosInput, UsuarioUncheckedCreateWithoutProgresosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutProgresosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutProgresosInput, UsuarioUncheckedUpdateWithoutProgresosInput>
  }

  export type UsuarioUpdateWithoutProgresosInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    intentosFallidos?: IntFieldUpdateOperationsInput | number
    bloqueadoHasta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultimoAcceso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    auditorias?: AuditoriaUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutProgresosInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    intentosFallidos?: IntFieldUpdateOperationsInput | number
    bloqueadoHasta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultimoAcceso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    auditorias?: AuditoriaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type LibroUpsertWithoutProgresosInput = {
    update: XOR<LibroUpdateWithoutProgresosInput, LibroUncheckedUpdateWithoutProgresosInput>
    create: XOR<LibroCreateWithoutProgresosInput, LibroUncheckedCreateWithoutProgresosInput>
    where?: LibroWhereInput
  }

  export type LibroUpdateToOneWithWhereWithoutProgresosInput = {
    where?: LibroWhereInput
    data: XOR<LibroUpdateWithoutProgresosInput, LibroUncheckedUpdateWithoutProgresosInput>
  }

  export type LibroUpdateWithoutProgresosInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    portadaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publicado?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    paginas?: PaginaUpdateManyWithoutLibroNestedInput
  }

  export type LibroUncheckedUpdateWithoutProgresosInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    portadaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publicado?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    paginas?: PaginaUncheckedUpdateManyWithoutLibroNestedInput
  }

  export type UsuarioCreateWithoutAuditoriasInput = {
    id?: string
    email: string
    passwordHash: string
    nombre: string
    rol?: $Enums.Rol
    intentosFallidos?: number
    bloqueadoHasta?: Date | string | null
    ultimoAcceso?: Date | string | null
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    progresos?: ProgresoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutAuditoriasInput = {
    id?: string
    email: string
    passwordHash: string
    nombre: string
    rol?: $Enums.Rol
    intentosFallidos?: number
    bloqueadoHasta?: Date | string | null
    ultimoAcceso?: Date | string | null
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    progresos?: ProgresoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutAuditoriasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutAuditoriasInput, UsuarioUncheckedCreateWithoutAuditoriasInput>
  }

  export type UsuarioUpsertWithoutAuditoriasInput = {
    update: XOR<UsuarioUpdateWithoutAuditoriasInput, UsuarioUncheckedUpdateWithoutAuditoriasInput>
    create: XOR<UsuarioCreateWithoutAuditoriasInput, UsuarioUncheckedCreateWithoutAuditoriasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutAuditoriasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutAuditoriasInput, UsuarioUncheckedUpdateWithoutAuditoriasInput>
  }

  export type UsuarioUpdateWithoutAuditoriasInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    intentosFallidos?: IntFieldUpdateOperationsInput | number
    bloqueadoHasta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultimoAcceso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    progresos?: ProgresoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutAuditoriasInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    intentosFallidos?: IntFieldUpdateOperationsInput | number
    bloqueadoHasta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultimoAcceso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    progresos?: ProgresoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type ProgresoCreateManyUsuarioInput = {
    id?: string
    libroId: string
    paginaActual?: number
    estado?: $Enums.EstadoLectura
    resumen?: string | null
    observaciones?: string | null
    iniciadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type AuditoriaCreateManyUsuarioInput = {
    id?: string
    accion: string
    exito: boolean
    ip?: string | null
    userAgent?: string | null
    detalle?: string | null
    creadoEn?: Date | string
  }

  export type ProgresoUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    paginaActual?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoLecturaFieldUpdateOperationsInput | $Enums.EstadoLectura
    resumen?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    iniciadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    libro?: LibroUpdateOneRequiredWithoutProgresosNestedInput
  }

  export type ProgresoUncheckedUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    libroId?: StringFieldUpdateOperationsInput | string
    paginaActual?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoLecturaFieldUpdateOperationsInput | $Enums.EstadoLectura
    resumen?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    iniciadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgresoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    libroId?: StringFieldUpdateOperationsInput | string
    paginaActual?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoLecturaFieldUpdateOperationsInput | $Enums.EstadoLectura
    resumen?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    iniciadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditoriaUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    accion?: StringFieldUpdateOperationsInput | string
    exito?: BoolFieldUpdateOperationsInput | boolean
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    detalle?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditoriaUncheckedUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    accion?: StringFieldUpdateOperationsInput | string
    exito?: BoolFieldUpdateOperationsInput | boolean
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    detalle?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditoriaUncheckedUpdateManyWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    accion?: StringFieldUpdateOperationsInput | string
    exito?: BoolFieldUpdateOperationsInput | boolean
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    detalle?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaginaCreateManyLibroInput = {
    id?: string
    numero: number
    contenido: string
  }

  export type ProgresoCreateManyLibroInput = {
    id?: string
    usuarioId: string
    paginaActual?: number
    estado?: $Enums.EstadoLectura
    resumen?: string | null
    observaciones?: string | null
    iniciadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type PaginaUpdateWithoutLibroInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    contenido?: StringFieldUpdateOperationsInput | string
  }

  export type PaginaUncheckedUpdateWithoutLibroInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    contenido?: StringFieldUpdateOperationsInput | string
  }

  export type PaginaUncheckedUpdateManyWithoutLibroInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    contenido?: StringFieldUpdateOperationsInput | string
  }

  export type ProgresoUpdateWithoutLibroInput = {
    id?: StringFieldUpdateOperationsInput | string
    paginaActual?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoLecturaFieldUpdateOperationsInput | $Enums.EstadoLectura
    resumen?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    iniciadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutProgresosNestedInput
  }

  export type ProgresoUncheckedUpdateWithoutLibroInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    paginaActual?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoLecturaFieldUpdateOperationsInput | $Enums.EstadoLectura
    resumen?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    iniciadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgresoUncheckedUpdateManyWithoutLibroInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    paginaActual?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoLecturaFieldUpdateOperationsInput | $Enums.EstadoLectura
    resumen?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    iniciadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
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