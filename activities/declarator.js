var Activity = require("./activity");
var util = require("util");

function Declarator()
{
    Activity.call(this);
    this._reserved = [
        "varsDeclared",
        "_activityVariableFieldNames",
        "_varsGot"
    ];
    this.asNonScoped("asReserved");
    this.asNonScoped("_reserved");
}

util.inherits(Declarator, Activity);

Declarator.prototype.asReserved = function(fieldName)
{
    this._reserved.push(fieldName);
}

Declarator.prototype.run = function (context, args)
{
    var activityVariables = [];
    this._activityVariableFieldNames = [];
    for (var fieldName in this)
    {
        if (this.activity._reserved.indexOf(fieldName) == -1 && this.activity._nonScoped.indexOf(fieldName) == -1)
        {
            var fieldValue = this[fieldName];
            if (fieldValue instanceof Activity)
            {
                activityVariables.push(fieldValue);
                this._activityVariableFieldNames.push(fieldName);
            }
        }
    }
    if (activityVariables.length)
    {
        this._args = args;
        this.schedule(activityVariables, "_varsGot")
    }
    else
    {
        delete this._activityVariableFieldNames;
        this.varsDeclared(context, args);
    }
}

Declarator.prototype._varsGot = function (context, reason, result)
{
    if (reason == Activity.states.complete)
    {
        var idx = 0;
        this._activityVariableFieldNames.forEach(function(fieldName)
        {
            this[fieldName] = result[idx++];
        });
        var args = this._args;
        delete this._args;
        delete this._activityVariableFieldNames;
        this.varsDeclared(context, args);
    }
    else
    {
        this.end(reason, result);
    }
}

Declarator.prototype.varsDeclared = function (context, args)
{
}

module.exports = Declarator;