// Error Handling Classes
class ProfileBadRequestError extends Error {
    constructor(errMessage) {
        super(errMessage);
        this.name = "ProfileBadRequestError";
        this.code = 400;
    }
}

class ProfileNotFoundError extends ProfileBadRequestError {
    constructor(errMessage) {
        super(errMessage);
        this.name = "ProfileNotFoundError";
        this.code = 404;
    }
}

class ProfileMissingIdError extends ProfileBadRequestError {
    constructor(errMessage) {
        super(errMessage);
        this.name = "ProfileMissingIdError";
        this.code = 404;
    }
}

class ProfileDbError extends ProfileBadRequestError {
    constructor(errMessage) {
        super(errMessage);
        this.name = "ProfileDbError";
        this.code = 400;
    }
}

class InvalidRouteError extends ProfileBadRequestError {
    constructor(errMessage) {
        super(errMessage);
        this.name = "InvalidRouteError";
        this.code = 404;
    }
}

module.exports = { ProfileBadRequestError, ProfileDbError, ProfileMissingIdError, ProfileNotFoundError, InvalidRouteError}