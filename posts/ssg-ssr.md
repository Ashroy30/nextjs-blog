---
title: "Difference between getServerSideProps and getStaticProps"
date: "2021-07-20"
---

By default, Next.js pre-renders every page. This means that Next.js generates HTML for each page in advance, instead of having it all done by client-side JavaScript.

Next.js has two forms of pre rendering:

**Static generation**:HTML is generated at build time and will be reused on each request. 

**Server-side Rendering**: The HTML is generated on each request. 

If you have page content that depends on external data (your stores website might need to fetch a list of available products from some sort of product management system). You export an async function called getStaticProps from the same file. The function gets called at build time and lets you pass the fetched data to the pages props on pre-render. 

When deciding how to pre-render a page you should ask yourself “Can I pre-render this page AHEAD of a users request?”.  If the answer is yes then you should choose static generation. Pages like this would include Blog posts, Product listings, Help and Documentation pages. 

getStaticProps should return an object with:

-**Props**: an optional object with the props that will be received by the page component.

-**revalidate**: An optional amount in seconds after which a page re-generation can occur. This is called incremental static regeneration. Useful for something like a blog where you want your new posts published after a certain amount of time. This is defaulted to false. 

-**NotFound**: An optional boolean value to allow the page to return a 404 status and page. This is used mainly to support use cases like user generated content getting removed by its author. 

-**reDirect**: An optional redirect value to allow redirecting to internal and external resources.


If you can’t pre render a page ahead of a users request then you should use server side rendering. An example of this would be if your page shows frequently updated data and the page content changes on every request. 

If a page uses Server-side rendering then the page HTML is generated on each request. It works similarly to static generation in the sense that you need to export an async function but instead call getServerSideProps. This function is called by the server on every request. 

getServerSideProps should return an object with:

**Props, notFound, redirect** (same as getStaticProps).

If a page uses getServerSideProps then when you request the page directly getServerSideProps runs at the request time and the page will be pre rendered with the returned props. It also can only exported from a page. You can’t export it from non page files. 

While similar the main difference here is getServerSideProps is run on every request as opposed to build time like getStaticProps. 
