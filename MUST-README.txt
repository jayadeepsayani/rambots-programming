


Developing Pages Overview
=========================

Hello Fellow Rambots! Here is an guide on adding pages, adding info to pages to
the programming resources. This guide will include adding new pages, adding new sections,
adding information to pages etc.




Rules:
======
- Do not add additional features to the website without permission from the mentor.
- Do not add additional features to the website on the Main files, create a copy and do it there instead.
- Do not override the website with your copy without checking in with your mentor.
- Do not include any images that we do not own, or credit them if you do.
- Do not upload any image files to the folder, use imgbb.com to convert them to a link and use the link as the src attribute in the img tag.
- Do not under any circumstances, delete a page or a category.
- Only use figicons.com for icons



Adding pages to a already existing category:
============================================

Here is how an example code of a category can be found:

<div class="section">
    <h4><svg><path fill="" /></svg> Basics</h4>
    <a href="?page=java" id="java">Java</a>
    <a href="?page=best-practices" id="best-practices">Best Practices</a>
    <a href="?page=teleop" id="teleop">Tele-Op</a>
    <a href="?page=autonomous" id="autonomous">Autonomous</a>
    <a href="?page=telemetry" id="telemetry">Telemetry</a>
    <a href="?page=problem-solving" id="problem-solving">Problem Solving</a>    
</div>

To add a page, add an anchor tag into the category and follow the following template for an anchor tag.
Lets say, We wanna add a page called Dinosaur Toy, add in:


<a href="?page=dinosaur-toy" id="dinosaur-toy">Dinosaur Toy</a>

The text inside the anchor tag is normally written, but the href and id attributes
are written as the all lowercase characters, replacing the spaces with hyphens (-)

To Create the page with content:

1. Go to the lessons folder.
2. Make an html file named the page name in underscore notation ("Dinosaur Toy" -> dinosaur_toy.html)
3. Go to main.js
4. Add a page to the lessons object

Example for Dinosaur Toy, add to the lessons object,

"dinosaur-toy": "dinosaur_toy.html" 


MAKE SURE THE PAGE WITH THAT NAME DOES NOT ALREADY EXIST.
IF IT DOES, CHANGE THE ID NAME, THE PAGE NAME, FILE NAME TO A DIFFERENT NAME.




Adding a new category:
======================

1. Copy an existing category
2. Change the title of the new category
3. Remove the svg + path of the new category
4. Change the number of / names of the new pages
5. Add all the new pages as per the section above this section
6. Go to figicons.com and find an icon that suits the category
7. Copy its svg code
8. Paste it to the left of the text of the title
9. Change its color to an appropriate color that suits the icon
   and doesn't match with the previous icon




Which tags to use to add info to pages:
=======================================

Element          Tag          Class
____________________________________

Title            h2           doc-title
Title text       p            doc-title-text
Subtitle         h3           subtitle
Subtitle text    p            subtitle-text
Image            img          doc-image





Adding a Code Block:
====================

To add a code block, follow this structure:

<pre>
<code class="language-java">

</code>
</pre>


------------------------------------------------


To properly add code into the code tag, there are a Couple of Rules,

<-------------------------------------------------------------------------------------------->
----------------------------------------------------------------------------------------------
Rule 1: Do not have any indentation on the code, other than the indentation needed in the code
----------------------------------------------------------------------------------------------
<-------------------------------------------------------------------------------------------->

NOT TO DO:
----------
<pre>
<code class="language-java">
    public class Main {
        public static void main(String[] args) {
            System.out.println("Hello World!");
        }
    }

</code>
</pre>

----------------------------------------------------

TO DO:
------
<pre>
<code class="language-java">
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello World!");
    }
}

</code>
</pre>



----------------------------------------------------------------------
----------------------------------------------------------------------
Rule 2: Have the code start at the line right underneath the code tag
----------------------------------------------------------------------
----------------------------------------------------------------------

NOT TO DO:
----------
<pre>
<code class="language-java">


public class Main {
    public static void main(String[] args) {
        System.out.println("Hello World!");
    }
}

</code>
</pre>

----------------------------------------------------------------------

TO DO:
------
<pre>
<code class="language-java">
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello World!");
    }
}

</code>
</pre>

--------------------------------------------------------
--------------------------------------------------------
Rule 3: Add an aditional line at the end of the code tag
--------------------------------------------------------
--------------------------------------------------------

NOT TO DO:
----------

<pre>
<code class="language-java">
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello World!");
    }
}
</code>
</pre>

---------------------------------------------------------------------

TO DO:
======

<pre>
<code class="language-java">
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello World!");
    }
}

</code>
</pre>



Thanks for keeping the website up and running!
From the original programmers of the Rambots #22557 to the new Programmers,
Good Luck on your season

- Alex, Jay, and Anthony