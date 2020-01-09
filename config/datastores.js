/**
 * Datastores
 * (sails.config.datastores)
 *
 * A set of datastore configurations which tell Sails where to fetch or save
 * data when you execute built-in model methods like `.find()` and `.create()`.
 *
 *  > This file is mainly useful for configuring your development database,
 *  > as well as any additional one-off databases used by individual models.
 *  > Ready to go live?  Head towards `config/env/production.js`.
 *
 * For more information on configuring datastores, check out:
 * https://sailsjs.com/config/datastores
 */

module.exports.datastores = {


    /***************************************************************************
     *                                                                          *
     * Your app's default datastore.                                            *
     *                                                                          *
     * Sails apps read and write to local disk by default, using a built-in     *
     * database adapter called `sails-disk`.  This feature is purely for        *
     * convenience during development; since `sails-disk` is not designed for   *
     * use in a production environment.                                         *
     *                                                                          *
     * To use a different db _in development_, follow the directions below.     *
     * Otherwise, just leave the default datastore as-is, with no `adapter`.    *
     *                                                                          *
     * (For production configuration, see `config/env/production.js`.)          *
     *                                                                          *
     ***************************************************************************/

    default: {

        /***************************************************************************
         *                                                                          *
         * Want to use a different database during development?                     *
         *                                                                          *
         * 1. Choose an adapter:                                                    *
         *    https://sailsjs.com/plugins/databases                                 *
         *                                                                          *
         * 2. Install it as a dependency of your Sails app.                         *
         *    (For example:  npm install sails-mysql --save)                        *
         *                                                                          *
         * 3. Then pass it in, along with a connection URL.                         *
         *    (See https://sailsjs.com/config/datastores for help.)                 *
         *                                                                          *
         ***************************************************************************/
        // adapter: 'sails-mysql',
        // url: 'mysql://user:password@host:port/database',

        /**mongodb conn */
        adapter: 'sails-mongo',
        url: 'mongodb://test:cmdcs123@cluster0-shard-00-00-mmink.mongodb.net:27017,cluster0-shard-00-01-mmink.mongodb.net:27017,cluster0-shard-00-02-mmink.mongodb.net:27017/test',
        ssl: true,
        replicaSet: 'Cluster0-shard-0',
        authSource: 'admin',


        /**my sql db conn */
        // adapter: 'sails-mysql',
        // host: 'SG-mysql-27700.servers.mongodirector.com',
        // user: 'sgroot',
        // password: 'f2u!V7mFZ8U8C1Um',
        // database: 'testDB'


    },
};