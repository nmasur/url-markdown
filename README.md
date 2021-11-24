# URL Markdown

Quick and dirty CLI program to fetch readable content from a webpage and
convert it to Markdown. Very similar to the
[Markdownload extension](https://github.com/deathau/markdownload) but for the
terminal.

Like the extension, uses [Readability](https://github.com/mozilla/readability)
to parse the readable content and
[Turndown](https://github.com/mixmark-io/turndown) to convert to Markdown.

It's written in Node because that's where those libraries are available.

## Installation

```
npm install -g url-markdown
```

## Usage

```
url-markdown https://en.wikipedia.org/wiki/Lorem_ipsum
```

I recommend pairing with [Glow](https://github.com/charmbracelet/glow) for
prettier viewing:

```
url-markdown https://en.wikipedia.org/wiki/Lorem_ipsum | glow -p -w 72 -
```
