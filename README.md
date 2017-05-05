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

<Share url="https://media.line.me" />

<Friend lineid="@lineteamjp" />
<Friend lineid="@lineteamjp" count />
<Friend lineid="@lineteamjp" home />
<Friend lineid="@lineteamjp" count home />

<Like url="https://media.line.me" />
<Like url="https://media.line.me" share />
<Like url="https://media.line.me" lineid="@lineteamjp" />
```

## License ##

MIT. See [LICENSE.md](http://github.com/szchenghuang/react-line-social/blob/master/LICENSE.md) for details.

[demo]: https://szchenghuang.github.io/react-line-social/
