import { Rule } from 'eslint';

const findBanWord = (words = [], varName: string) => {
    return words.find((word) => {
        return varName.slice(0, word.length).toLowerCase() === word.toLowerCase() && varName.length !== word.length;
    });
};

export const meta: Rule.RuleMetaData = {
    fixable: 'code',
    type: 'suggestion',
};

export const create = (context: Rule.RuleContext): Rule.NodeListener => {
    const { options } = context;
    const { words = [] } = options[0] ?? {};

    return {
        Identifier: (node) => {
            console.log(`< node >`, node);
            if (
                node.parent.type === 'VariableDeclarator' ||
                // @ts-ignore
                node.parent.type === 'TSTypeAliasDeclaration' ||
                // @ts-ignore
                node.parent.type === 'TSInterfaceDeclaration' ||
                // @ts-ignore
                node.parent.type === 'ClassDeclaration'
            ) {
                const nodeName = node.name;
                const banWord = findBanWord(words, nodeName);
                if (!banWord) return;
                const isUpperCase = nodeName[0] === nodeName[0].toUpperCase();
                const message = `'${banWord}'는 postFix 로 사용해주세요`;
                context.report({
                    message,
                    node,
                    suggest: [
                        {
                            desc: 'prefixToPostfix',
                            fix(fixer) {
                                let name = nodeName.slice(banWord.length);
                                if (isUpperCase) name = name[0].toUpperCase() + name.slice(1);
                                else name = name[0].toLowerCase() + name.slice(1);
                                name += banWord[0].toUpperCase() + banWord.slice(1);
                                return fixer.replaceText(node, name);
                            },
                        },
                    ],
                });
            }
        },
    };
};

export default { create, meta };
