# 🎬 MadCut [![License][LicenseIMGURL]][LicenseURL] [![NPM version][NPMIMGURL]][NPMURL] [![Build Status][BuildStatusIMGURL]][BuildStatusURL] [![Coverage Status][CoverageIMGURL]][CoverageURL]

[NPMURL]: https://npmjs.org/package/madcut "npm"
[NPMIMGURL]: https://img.shields.io/npm/v/madcut.svg?style=flat
[BuildStatusURL]: https://github.com/coderaiser/madcut/actions?query=workflow%3A%22Node+CI%22 "Build Status"
[BuildStatusIMGURL]: https://github.com/coderaiser/madcut/workflows/Node%20CI/badge.svg
[LicenseURL]: https://tldrlegal.com/license/mit-license "MIT License"
[LicenseIMGURL]: https://img.shields.io/badge/license-MIT-317BF9.svg?style=flat
[CoverageURL]: https://coveralls.io/github/coderaiser/madcut?branch=master
[CoverageIMGURL]: https://coveralls.io/repos/coderaiser/madcut/badge.svg?branch=master&service=github

CLI tool to cut markdown into peaces. Based on 🐊[**Putout**](https://github.com/coderaiser/putout) code transformer.

## Install

```
npm i madcut
```

## API

### cut(markdown)

Cut markdown file into a peaces list.

```js
import {cut} from 'madcut';
import montag from 'montag';

await cut(montag`
    # Hello
    
    ## World
    
    This is the world
`);

// returns
[
    montag`
        # Hello\n\n
    `,
    montag`
        ## World
        
        This is the world\n
    `,
];
```

### infer(markdown);

Infer captions to a list.

```js
import {infer} from 'madcut';
import montag from 'montag';

await infer(montag`
    # Hello
    ## World
`);
// returns
['World'];
```

## License

MIT
