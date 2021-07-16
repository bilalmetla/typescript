"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedLIst = void 0;
var Sorter_1 = require("./Sorter");
var Node = /** @class */ (function () {
    function Node(value) {
        this.value = value;
        this.next = null;
    }
    return Node;
}());
var LinkedLIst = /** @class */ (function (_super) {
    __extends(LinkedLIst, _super);
    function LinkedLIst() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.head = null;
        _this.tail = null;
        _this.listLength = 0;
        return _this;
    }
    LinkedLIst.prototype.add = function (value) {
        var newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            if (this.tail instanceof Node) {
                this.tail.next = newNode;
                this.tail = newNode;
            }
        }
        this.listLength++;
        return this.listLength;
    };
    Object.defineProperty(LinkedLIst.prototype, "length", {
        get: function () {
            return this.listLength;
        },
        enumerable: false,
        configurable: true
    });
    LinkedLIst.prototype.at = function (index) {
        if (!this.head || index < 0 || index > this.listLength) {
            throw new Error('Index out of bounds');
        }
        var counter = 0;
        var current = this.head;
        while (current) {
            if (counter === index) {
                return current;
            }
            counter++;
            current = current.next;
        }
        throw new Error('Index Out Of Bound!');
    };
    LinkedLIst.prototype.compare = function (leftIndex, rightIndex) {
        if (!this.head) {
            throw new Error('List is empty!');
        }
        return this.at(leftIndex).value > this.at(rightIndex).value;
    };
    //swap rather then swap node jsut swap the values is easy
    LinkedLIst.prototype.swap = function (leftIndex, rightIndex) {
        var leftNode = this.at(leftIndex);
        var rightNode = this.at(rightIndex);
        var leftNodeData = leftNode.value;
        leftNode.value = rightNode.value;
        rightNode.value = leftNodeData;
    };
    return LinkedLIst;
}(Sorter_1.Sorter));
exports.LinkedLIst = LinkedLIst;
