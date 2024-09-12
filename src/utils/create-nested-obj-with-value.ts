export function createNestedObjWithValue(obj: any, fn?: any) {
    const result = {};

    for (let key in obj) {
        const keys = key.split(".");
        let current: any = result;

        for (let i = 0; i < keys.length; i++) {
            const part = keys[i];

            // If it's the last part, assign the value
            if (i === keys.length - 1) {
                let value = obj[key];

                current[part] = value;
            } else {
                // If the property exists and is not an object, do not overwrite it
                if (typeof current[part] !== "object" || current[part] === null) {
                    current[part] = {};
                }
                current = current[part];
            }
        }
    }

    return result;
}
