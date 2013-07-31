#### Kentucky Digital Library
##### Metadata Guidelines
---
7.13 / Nabil Kashyap (nabilk.com) / Digital Library Services / University of Kentucky

These guidelines describe the descriptive metadata fields used in the Kentucky Digital Library as well as introduces some of the philosophy and workflow behind its processes. The idea is to create a set of guidelines that is open, transparent and editable and that is easily accessed as either a static document or a web page.

This repository contains all the tools for a sample implementation of such a document. A single, version-controlled markdown document can be used to generate a web-based document, snippets of HTML suitable for reuse in other contexts and a static PDF.

#### Notes
- Webpage generation: I used a php library, a custom css stylesheet (lib/md_web_style.css) and a small js file. Several Ruby Gems can accomplish something similar for easier integration into the Blacklight 4 framework if need be -- in particular [Redcarpet](https://github.com/vmg/redcarpet) and [Kramdown](http://kramdown.rubyforge.org/parser/kramdown.html). The css and js files may need to modified according to small inconsistencies in parsing markdown.
- Static PDF: I used Mou, a markdown editor for OSX plus a modified css file (lib/md_pdf_style.css) to export the pdf. For Windows, [MarkdownPad](http://markdownpad.com/) provides similar functionality. Again, the css might need modification to account for parsing differences

##### Ingredients:
- metadata guidelines markdown document
- [php-markdown-lib](http://michelf.com/projects/php-markdown/), a php library for parsing markdown into html by Michel Fortin
- Twitter Bootstrap Framework (for convenience)
- JavaScript file for integrating parsed markdown with Bootstrap / jQuery collapse plugin
