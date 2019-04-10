var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
const shortid = require('shortid');

var UserSchema = new Schema({
    userId: {
        type: String,
        unique: true,
        default: shortid.generate
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

UserSchema.statics = {
    getDoc(id) {
        var objID
            = mongoose.Types.ObjectId(id);
        return
        this.find({
            _id: objID
        }).select('-__v')
            .exec()
            .then((visited) => {
                if (visited) {
                    return
                    Promise.resolve(visited);
                }
                return Promise.reject(new Error("No data exists"));
            });
    },

    findData(query) {
        console.log(query)
        return this.find(query)
            .select('-__v')
            .exec()
            .then((visited) => {
                if (visited) {
                    return
                    Promise.resolve(visited);
                }
                return Promise.reject(new Error("No data exists"));
            });
    },

    findOneDoc(query) {
        return this.findOne(query)
            .select('-__v')
            .exec()
            .then((visited) => {
                if (visited) {
                    return Promise.resolve(visited);
                }
                return Promise.reject(new Error("No data exists"));
            });
    },

    list(query, { skip =
        0, limit
        = 50
    } = {}) {
        return this.find(query)
            .select('-__v')
            .sort({
                createdAt: -1
            })
            .skip(skip)
            .limit(limit)
            .exec();
    },

    updateDoc(condition, set, options =
        {
            safe: false,
            upsert: false,
            new: true
        }) {

        return this.findOneAndUpdate(condition, set, options)
            .exec()
            .then((visited) => {
                if (visited) {
                    return Promise.resolve(visited);
                }
                return Promise.reject(new Error("No data exists"));
            });
    },

    many(data) {
        return
        this.insertMany(data,
            function
                (error, docs) {
                if (error) {
                    return Promise.reject(error);
                }
                return Promise.resolve(docs);
            })
    },

    updateMany(filter, data) {
        return this.updateMany(filter,
            data, function
                (error, docs) {
                if (error) {
                    return Promise.reject(error);
                }
                return
                Promise.resolve(docs);
            })
    }

};

mongoose.model('User', UserSchema);