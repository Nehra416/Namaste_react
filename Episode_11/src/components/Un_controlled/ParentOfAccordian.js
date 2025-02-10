import React from "react";
import Accordian from "./Accordian";

const dummyData = [
    {
        header: "What is the purpose of an Accordion in web design?",
        content: "An accordion is a UI pattern that allows for the display of large amounts of content in a compact space. It enables users to expand and collapse sections of content dynamically. The accordion's primary function is to enhance usability by organizing information and giving users control over the content they wish to view."
    },
    {
        header: "How do Accordions improve user experience?",
        content: "Accordions help improve user experience by reducing clutter on a page, allowing for the presentation of large amounts of information without overwhelming the user. They make navigation easier by keeping content organized and accessible, and they also provide interactive functionality that can increase user engagement."
    },
    {
        header: "What are the different types of Accordion designs?",
        content: "There are several types of accordion designs, including single-pane accordion (only one section open at a time), multi-pane accordion (multiple sections can be expanded simultaneously), and toggle-based accordion (sections open and close when clicked). The design choice depends on the context and purpose of the content being displayed."
    },
    {
        header: "What is the history of Accordion UI pattern?",
        content: "The accordion UI pattern dates back to the early 2000s, becoming popular with the rise of web 2.0 design principles. It was initially used for menu navigation but soon expanded to handle other types of content. The term 'accordion' was adopted because the content expands and collapses, much like the bellows of a musical accordion."
    },
    {
        header: "Can Accordions be used for complex forms?",
        content: "Yes, accordions can be used in complex forms to simplify the user experience. By dividing the form into sections and allowing users to expand or collapse them, it helps reduce visual clutter and makes it easier to navigate through the form. However, it is important to ensure that the user knows the state of each section and that the form can be completed without confusion."
    },
    {
        header: "How do you implement an Accordion in HTML?",
        content: "An accordion in HTML is implemented using a combination of HTML, CSS, and JavaScript. The HTML structure typically consists of a series of divs or sections, each representing a collapsible item. CSS is used to control the visibility and transitions of the expanded or collapsed sections. JavaScript is used to toggle the open and close functionality based on user interaction."
    },
    {
        header: "What accessibility considerations should be made for Accordions?",
        content: "Accessibility considerations for accordions include ensuring that the accordion is fully navigable via keyboard (e.g., using the Tab and Enter keys), that screen readers announce the changes in state when sections expand or collapse, and that the sections have appropriate ARIA roles like 'button' for headers and 'region' for content areas."
    },
    {
        header: "How do Accordions impact mobile usability?",
        content: "Accordions are particularly effective in mobile design, where screen real estate is limited. By collapsing sections and letting users open only the sections they are interested in, accordions help maintain a clean, uncluttered layout on smaller devices. However, it is important to ensure that the touch targets (e.g., the headers) are large enough for easy interaction on mobile devices."
    },
    {
        header: "What are the best practices for designing an Accordion?",
        content: "Best practices for designing an accordion include ensuring clarity with properly labeled headers, maintaining a consistent design for expanded and collapsed states, providing visual cues (e.g., arrows) to indicate which sections can be expanded, and making sure the accordion is responsive and works seamlessly across different screen sizes and devices."
    },
    {
        header: "Are there any performance considerations when using an Accordion?",
        content: "Yes, performance can be an issue if an accordion contains too much content or too many items, especially on lower-end devices or browsers. It is recommended to keep the content of each section concise, use lazy loading techniques to load content as it becomes visible, and avoid rendering heavy media or large DOM elements in collapsed sections."
    }
];

const ParentOfAccordian = () => {
    
    return (
        <div>
            {
                dummyData.map((data, index) => {
                    return (
                        <Accordian key={index} data={data} />
                    )
                })
            }
        </div>
    )
};

export default ParentOfAccordian;
