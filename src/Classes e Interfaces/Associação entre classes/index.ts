class Writer {
  private _tool: Tool | null = null;

  constructor(private _name: string) {}

  get name(): string {
    return this._name;
  }

  get tool(): Tool | null {
    return this._tool;
  }

  set tool(tool: Tool | null) {
    this._tool = tool;
  }

  write(): void {
    if (!this.tool) {
      console.log(`I can't write without a tool`);

      return;
    }

    this.tool.write();
  }
}

abstract class Tool {
  constructor(private _name: string) {}

  abstract write(): void;

  get name(): string {
    return this._name;
  }
}

class Pen extends Tool {
  write(): void {
    console.log(`${this.name} is writting...`);
  }
}

class Typewriter extends Tool {
  write(): void {
    console.log(`${this.name} is typing...`);
  }
}

const writer = new Writer('Tiago');
const pen = new Pen('BIC');
const typewriter = new Typewriter('Super Máquina');

console.log(writer.name);
console.log(pen.name);
console.log(typewriter.name);

writer.tool = typewriter;

writer.write();
