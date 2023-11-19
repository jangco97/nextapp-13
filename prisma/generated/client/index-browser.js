
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.3.1
 * Query Engine version: 61e140623197a131c2a6189271ffee05a7aa9a59
 */
Prisma.prismaVersion = {
  client: "5.3.1",
  engine: "61e140623197a131c2a6189271ffee05a7aa9a59"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  name: 'name',
  hashedPassword: 'hashedPassword',
  email: 'email',
  emailVerified: 'emailVerified',
  image: 'image',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  userType: 'userType',
  favoriteIds: 'favoriteIds',
  averageRating: 'averageRating',
  averageproductRating: 'averageproductRating'
};

exports.Prisma.ActivateTokenScalarFieldEnum = {
  id: 'id',
  token: 'token',
  activatedAt: 'activatedAt',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  userId: 'userId'
};

exports.Prisma.AccountScalarFieldEnum = {
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

exports.Prisma.SessionScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  sessionToken: 'sessionToken',
  accessToken: 'accessToken',
  expires: 'expires',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.VerificationRequestScalarFieldEnum = {
  id: 'id',
  identifier: 'identifier',
  token: 'token',
  expires: 'expires',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ProductScalarFieldEnum = {
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
  status: 'status',
  views: 'views',
  delivery: 'delivery',
  faceToFace: 'faceToFace',
  categories: 'categories'
};

exports.Prisma.ReviewScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  sellerId: 'sellerId',
  sellerName: 'sellerName',
  productId: 'productId',
  title: 'title',
  text: 'text',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  userRating: 'userRating'
};

exports.Prisma.ViewdProductStoreScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  productId: 'productId',
  viewedAt: 'viewedAt'
};

exports.Prisma.ConversationScalarFieldEnum = {
  id: 'id',
  name: 'name',
  senderId: 'senderId',
  receiverId: 'receiverId',
  createdAt: 'createdAt'
};

exports.Prisma.MessageScalarFieldEnum = {
  id: 'id',
  text: 'text',
  productTitle: 'productTitle',
  image: 'image',
  senderId: 'senderId',
  receiverId: 'receiverId',
  conversationId: 'conversationId',
  productId: 'productId',
  isRead: 'isRead',
  messageType: 'messageType',
  isAccepted: 'isAccepted',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  address: 'address',
  addressDetail: 'addressDetail',
  latitude: 'latitude',
  longitude: 'longitude'
};

exports.Prisma.PurchaseScalarFieldEnum = {
  id: 'id',
  buyerId: 'buyerId',
  sellerId: 'sellerId',
  productId: 'productId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ReservationScalarFieldEnum = {
  id: 'id',
  buyerName: 'buyerName',
  sellerName: 'sellerName',
  buyerId: 'buyerId',
  sellerId: 'sellerId',
  productId: 'productId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  meetTime: 'meetTime',
  address: 'address',
  addressDetail: 'addressDetail',
  latitude: 'latitude',
  longitude: 'longitude',
  isAccepted: 'isAccepted',
  sellAccept: 'sellAccept',
  buyAccept: 'buyAccept'
};

exports.Prisma.BuyerScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  sellerId: 'sellerId',
  sellerName: 'sellerName',
  productId: 'productId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  isReviewed: 'isReviewed'
};

exports.Prisma.SellerScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  buyerId: 'buyerId',
  buyerName: 'buyerName',
  productId: 'productId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.UserType = exports.$Enums.UserType = {
  User: 'User',
  Admin: 'Admin'
};

exports.Prisma.ModelName = {
  User: 'User',
  ActivateToken: 'ActivateToken',
  Account: 'Account',
  Session: 'Session',
  VerificationRequest: 'VerificationRequest',
  Product: 'Product',
  Review: 'Review',
  ViewdProductStore: 'ViewdProductStore',
  Conversation: 'Conversation',
  Message: 'Message',
  Purchase: 'Purchase',
  Reservation: 'Reservation',
  Buyer: 'Buyer',
  Seller: 'Seller'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://github.com/prisma/prisma/issues`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
