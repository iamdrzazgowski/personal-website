import { stackData } from "@/data/tech-stack";

export default function Stack() {
    return (
        <div className="flex flex-col gap-3.5">
            {stackData.map((stack) => (
                <div
                    key={stack.category}
                    className="grid grid-cols-[78px_1fr] gap-2 items-start"
                >
                    <span className="text-[11.5px] text-muted-foreground pt-[3px]">
                        {stack.category}
                    </span>
                    <div className="flex flex-wrap gap-[5px]">
                        {stack.items.map((item) => (
                            <span
                                key={item}
                                className="text-[11.5px] border border-border px-2.5 py-0.5 rounded-md text-foreground hover:bg-foreground hover:text-background transition-colors duration-150 cursor-default"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
