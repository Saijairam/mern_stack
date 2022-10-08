import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import TagsList from './TagsList'; 
import './Tags.css';

const Tags = () => {

  const tagsList = [
    {
    id:1,
    tagName:"javascript",
    tagdesc : "For questions regarding programming in JS , refer to Javascript docs available in official website"
    },
    {
    id:2,
    tagName:"Python",
    tagdesc : "Python is a multipurpose programming language which is used in various fields like AI,ML,DL"
    },
    {
    id:3,
    tagName:"C#",
    tagdesc : "C# is a general-purpose, multi-paradigm programming language. C# encompasses static typing, strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented, and component-oriented programming disciplines."
    },
    {
    id:4,
    tagName:"Java",
    tagdesc : "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible."
    },
    {
    id:5,
    tagName:"PHP",
    tagdesc : "PHP is a general-purpose scripting language geared toward web development."
    },
    {
    id:6,
    tagName:"HTML",
    tagdesc : "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript."
    },
    {
    id:7,
    tagName:"ReactJS",
    tagdesc : "It is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies."
    },
    {
    id:8,
    tagName:"Android",
    tagdesc : "Android is a mobile operating system based on a modified version of the Linux kernel and other open source software, designed primarily for touchscreen mobile devices such as smartphones and tablets."
    },
    {
    id:9,
    tagName:"CSS",
    tagdesc : "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript."
    },
    {
    id:10,
    tagName:"Nodejs",
    tagdesc : "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications. "
    }
  ]


  return (
    <div className='home-container-1'>
      <LeftSidebar/>
      <div className="home-container-2">
        <h1 className='tags-h1'>Tags</h1>
        <p className='tags-p'>A tag is a keyword or label that categorizes your question with other, similar questions.</p>
        <p className='tags-p'>Using the right tags makes it easier for others to find and answer your question.</p>
        <div className='tags-list-container'>
           {
            tagsList.map((tag)=>(
               <TagsList tag={tag} key={tag.id} />
            ))
           }
        </div>
      </div>
    </div>
  )
}

export default Tags
