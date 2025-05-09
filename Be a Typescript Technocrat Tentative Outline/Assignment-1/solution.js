var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
{
    function formatString(input, toUpper) {
        if (toUpper) {
            return input.toUpperCase();
        }
        return input.toLowerCase();
    }
    console.log(formatString("Hello")); // Should output: "hello"
    console.log(formatString("Hello", true)); // Should output: "HELLO"
    console.log(formatString("Hello", false)); // Should output: "hello"
    function filterByRating(items) {
        return items.filter(function (item) { return item.rating >= 4; });
    }
    var books = [
        { title: "Book A", rating: 4.5 },
        { title: "Book B", rating: 3.2 },
        { title: "Book C", rating: 5.0 },
    ];
    console.log(filterByRating(books));
    // Output: [ { title: "Book A", rating: 4.5 }, { title: "Book C", rating: 5.0 } ]
    function concatenateArrays() {
        var arrays = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arrays[_i] = arguments[_i];
        }
        return arrays.flat();
    }
    console.log(concatenateArrays(["a", "b"], ["c"])); // Output: ["a", "b", "c"]
    console.log(concatenateArrays([1, 2], [3, 4], [5])); // Output: [1, 2, 3, 4, 5]
    var Car = /** @class */ (function () {
        function Car(make, year, model) {
            this.make = make;
            this.year = year;
            this.model = model;
        }
        Car.prototype.getInfo = function () {
            return "Make: ".concat(this.make, ", Year: ").concat(this.year);
        };
        Car.prototype.getModel = function () {
            return "Model: ".concat(this.model);
        };
        return Car;
    }());
    var myCar = new Car("Toyota", 2020, "Corolla");
    console.log(myCar.getInfo()); // Output: "Make: Toyota, Year: 2020"
    console.log(myCar.getModel()); // Output: "Model: Corolla"
    function processValue(value) {
        if (typeof value === "string") {
            return value.length;
        }
        return value;
    }
    console.log(processValue("hello")); // Output: 5
    console.log(processValue(20)); // Output: 20
    function getMostExpensiveProduct(products) {
        if (products.length === 0) {
            return null;
        }
        return products.reduce(function (max, current) { return (current.price > max.price ? current : max); }, products[0]);
    }
    var products = [
        { name: "Pen", price: 10 },
        { name: "Notebook", price: 25 },
        { name: "Bag", price: 50 },
    ];
    console.log(getMostExpensiveProduct(products));
    // Output: { name: "Bag", price: 50 }
    var Day = void 0;
    (function (Day) {
        Day[Day["Monday"] = 0] = "Monday";
        Day[Day["Tuesday"] = 1] = "Tuesday";
        Day[Day["Wednesday"] = 2] = "Wednesday";
        Day[Day["Thursday"] = 3] = "Thursday";
        Day[Day["Friday"] = 4] = "Friday";
        Day[Day["Saturday"] = 5] = "Saturday";
        Day[Day["Sunday"] = 6] = "Sunday";
    })(Day || (Day = {}));
    function getDayType(day) {
        if (day === Day.Saturday || day === Day.Sunday) {
            return "Weekend";
        }
        return "Weekday";
    }
    console.log(getDayType(Day.Monday)); // Output: "Weekday"
    console.log(getDayType(Day.Sunday)); // Output: "Weekend"
    function squareAsync(n) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (n < 0) {
                    throw new Error("Negative number not allowed");
                }
                return [2 /*return*/, new Promise(function (resolve) {
                        setTimeout(function () {
                            resolve(n * n);
                        }, 1000);
                    })];
            });
        });
    }
    (function () { return __awaiter(_this, void 0, void 0, function () {
        var result1, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, squareAsync(4)];
                case 1:
                    result1 = _a.sent();
                    console.log(result1); // Output after 1s: 16
                    return [4 /*yield*/, squareAsync(-3)];
                case 2:
                    _a.sent(); // This will throw an error
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.log("Error:", error_1.message); // Output: Error: Negative number not allowed
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); })();
}
