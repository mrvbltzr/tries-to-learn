import { el } from '@/utils/el';

export const LandingPage = () => {
    return el({
        tagName: 'div',
        className: 'text-white px-8 py-12 mt-20 w-full text-center',
        children: [
            el({
                tagName: 'h1',
                className: 'text-white text-7xl font-bold mb-8 uppercase',
                textContent: 'Welcome to my playground!',
            }),
            el({
                tagName: 'div',
                className: 'text-xl text-slate-400 mx-50',
                children: [
                    el({
                        tagName: 'p',
                        className: 'p-4',
                        textContent: `This page is a collection of all the code snippets and exercises from the JavaScript course I'm taking.`,
                    }),
                    el({
                        tagName: 'p',
                        className: 'p-4',
                        innerHTML: `Think of this as my digital laboratory. I am definitely not a JavaScript noob (I know where the semicolons go... most of the time), but I am not an expert yet either.
                        <br />
                        I am currently living in the space between <em>'Yeah! It works!'</em> and <em>'What the f*ck? Why does it work?'</em>`,
                    }),
                    el({
                        tagName: 'p',
                        className: 'p-4 uppercase font-semibold text-red-700',
                        textContent: `Enter at your own risk...?`,
                    }),
                ],
            }),
        ],
    });
};
