# react-line-social #

Line social plugins in React.

## [Demo][demo] ##

## Install ##

```sh
npm install react-line-social --save
```

## Usage ##

```js
import { Share, Friend, Like } from 'react-line-social';

// Or cherry-pick import.
import Share from 'react-line-social/share';
import Friend from 'react-line-social/friend';
import Like from 'react-line-social/like';

<Share />
<Share type='share-b' />

<Friend lineid="@lineteamjp" />
<Friend lineid="@lineteamjp" count />
<Friend lineid="@lineteamjp" home />
<Friend lineid="@lineteamjp" count home />

<Like />
<Like share />
<Like lineid="@lineteamjp" />
```

## Props ##

#### Share ####
* _style_ - Object.
* _className_ - String.
* _locale_ - '**en**' | '**ja**' | '**zh-TW**' | '**th**' | '**id**'. Defaut: `zh-TW`.
* _type_ - '**share-a**' | '**share-b**' | '**share-c**' | '**share-d**' | '**share-e**'. Defaut: `share-a`.
* _url_ - String. Default: `window.location.href`.

#### Friend ####
* _style_ - Object.
* _className_ - String.
* _lineid_ - String. **Required**.
* _locale_ - '**en**' | '**ja**' | '**zh-TW**' | '**th**' | '**id**'. Defaut: `zh-TW`.
* _count_ - Boolean.
* _home_ - Boolean.

#### Like ####
* _style_ - Object.
* _className_ - String.
* _lineid_ - String.
* _locale_ - '**en**' | '**ja**' | '**zh-TW**' | '**th**' | '**id**'. Defaut: `zh-TW`.
* _share_ - Boolean.
* _url_ - String. Default: `window.location.href`.

## License ##

MIT. See [LICENSE.md](http://github.com/szchenghuang/react-line-social/blob/master/LICENSE.md) for details.

[demo]: https://szchenghuang.github.io/react-line-social/
