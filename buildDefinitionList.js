const buildDefinitionList = (definitions) => {
    if (definitions.length > 0) {
        const value = [];
        for (const item of definitions) {
            const definition = item[0];
            const description = item[1];
            value.push(`<dt>${definition}</dt><dd>${description}</dd>`);
        }
        const secondValue = value.join('');
        return `<dl>${secondValue}</dl>`;
    }
    if (definitions.length === 0) {
        return '';
    }
};
export default buildDefinitionList;
