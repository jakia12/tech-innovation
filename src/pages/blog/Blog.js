import React from 'react'
import useTitle from '../../hooks/useTitle';
import { Accordion } from 'flowbite-react';

const Blog = () => {

    //create dynamic title
    useTitle('Blog');
    return (
        <section className='accordion_section bg-lightGray py-14 lg:py-20'>
            <div className="container w-full mx-auto lg:max-w-6xl px-8">
                <div className="accordion_wrapper lg:max-w-3xl mx-auto">
                    <Accordion alwaysOpen={true}>
                        <Accordion.Panel>
                            <Accordion.Title>
                                What is the difference between sql and nosql?
                            </Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 text-dark  text-left">
                                    The five critical differences between SQL vs NoSQL are:
                                    <br />

                                    1. SQL databases are relational, NoSQL databases are non-relational.
                                    <br />
                                    2. SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.
                                    <br />
                                    3. SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.
                                    <br />
                                    4. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.
                                    <br />
                                    5. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
                                </p>

                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title>
                                What is JWT, and how does it work?
                            </Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 text-dark text-left">
                                    JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
                                    <br />
                                    <br />
                                    JWT is differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.
                                </p>

                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title>
                                What is the difference between javascript and NodeJS?
                            </Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 text-dark text-left">
                                    JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.
                                </p>

                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title>
                                How does NodeJS handle multiple requests at the same time?
                            </Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 text-dark text-left">
                                    NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
                                </p>

                            </Accordion.Content>
                        </Accordion.Panel>
                    </Accordion>


                </div>
            </div>

        </section>
    )
}

export default Blog
