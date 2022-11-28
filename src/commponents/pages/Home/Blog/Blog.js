import React from 'react';

const Blog = () => {
    return (
        <div className='m-10'>
            <h2 className='text-xl'>Some Question</h2>
            <div>
                <h2 className='text-2xl'> What are the different ways to manage a state in a React application?</h2>
                <p> In React apps, there are at least seven ways to handle the state. Let us briefly explore a few of them in this part. <br />
                    We can use URL to store some data e.g. <br />

                    The id of the current item, being viewed <br />
                    Filter parameters <br />
                    Pagination offset and limit <br />
                    Sorting data </p>
            </div> <br />

            <div>
                <h2 className='text-2xl'> How does prototypical inheritance work?</h2>
                <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
            </div> <br />
            <div>
                <h2 className='text-2xl'> What is a unit test? Why should we write unit tests?</h2>
                <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
            </div> <br />
            <div>
                <h2 className='text-2xl'> React vs. Angular vs. Vue?

                </h2>
                <p>
                    Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.</p>
            </div>
        </div>
    );
};

export default Blog;