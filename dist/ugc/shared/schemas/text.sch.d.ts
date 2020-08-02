export declare const textBox: {
    required: (string | boolean)[];
    type: StringConstructor;
    validate: {
        validator: (text: any) => boolean;
        message: string;
    }[];
};
