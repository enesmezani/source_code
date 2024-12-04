
    import { useEffect, useRef } from 'react';

    const BottomReached = ({ onView }) => {
        const ref = useRef();

        useEffect(() => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        onView();
                    }
                },
                { threshold: 0.5 }
            );

            if (ref.current) {
                observer.observe(ref.current);
            }

            return () => {
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            };
        }, [onView]);

        return <div style={{height: "100px"}} ref={ref}></div>;
    };

    export default BottomReached