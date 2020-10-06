import * as MongoDB from "mongodb";

export class DatabaseService {
  private static instance: DatabaseService;
  private dbClient: MongoDB.MongoClient = new MongoDB.MongoClient(
    process.env.MONGO_URI!,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  private constructor() {}

  /**
   * Initializes the Database Instance.
   * @returns {Promise<void>} A successful execution initializes the instance.
   */
  public initalize = async (): Promise<void> => {
    try {
      await this.dbClient.connect();
      console.log("Connected to MongoDB");
    } catch (err) {
      console.error("Could not connect to MongoDB");
      throw { httpStatus: 500, message: "Internal Server Error" };
    }
  };

  public static getInstance = (): DatabaseService => {
    if (!DatabaseService.instance) {
      DatabaseService.instance = new DatabaseService();
    }
    return DatabaseService.instance;
  };

  /**
   * Returns the Collection Instance of the given database
   * @param {string} collection The Collection Name
   * @returns {MongoDB.Collection} The instance
   */
  public getDb = async (collection: string): Promise<MongoDB.Collection> => {
    return this.dbClient.db().collection(collection);
  };
}
