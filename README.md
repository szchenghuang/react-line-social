# react-line-social #

Line social plugins in React.

## [Demo][demo] ##

## Install ##

```sh
npm install react-line-social --save
```

## Usage and Configuration ##

```js
import { Share, Friend, Like } from 'react-line-social';

// Or cherry-pick import.
import Share from 'react-line-social/share';
import Friend from 'react-line-social/friend';
import Like from 'react-line-social/like';

<Share />

<Friend lineid="@lineteamjp" />
<Friend lineid="@lineteamjp" count />
<Friend lineid="@lineteamjp" home />
<Friend lineid="@lineteamjp" count home />

<Like />
<Like share />
<Like lineid="@lineteamjp" />
```

## Configuration ##
`Share` and `Like` components accept an optional `url` prop. When `url` is absent, `window.location.href` will be referenced.

## License ##

MIT. See [LICENSE.md](http://github.com/szchenghuang/react-line-social/blob/master/LICENSE.md) for details.

[demo]: https://szchenghuang.github.io/react-line-social/
