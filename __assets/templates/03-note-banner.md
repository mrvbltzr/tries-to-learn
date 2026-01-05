<%*
const newNoteTitle = await tp.system.prompt('Note Title:', tp.file.title, true);
const metadata = await tp.user.metadata();
const courseTitle = tp.user.html_entity(metadata.title);
const courseTitleSnake = courseTitle.replace(/\s/g, '_').replace(/_-_/g, '_--_');
const noteTitle = await tp.user.title_case(newNoteTitle.replace(/^\d+-/, ''));
-%>
<%* if (noteTitle) { -%>

<div id="title" align="center">
<a href="#"><img src="https://img.shields.io/badge/<% metadata.tag -%>-<% metadata.color.replace('#', '') -%>?style=for-the-badge&label=Mark%20Tries%20To%20Learn" alt="Mark Tries To Learn" /></a>
<a href="<% metadata.url -%>">
<img src="https://img.shields.io/badge/<% courseTitleSnake -%>-white?logo=udemy&style=for-the-badge&color=D2CBCB" alt="<% courseTitle -%>" />
</a>
<h1><% tp.user.html_entity(noteTitle) -%></h1>
<br />
</div>
<%* }
tp.file.cursor(0) -%>
