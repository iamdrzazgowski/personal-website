export default function Footer() {
    return (
        <footer className="flex justify-center mt-10 pt-5 border-t border-border/50 text-[10px] text-muted-foreground">
            <span>&copy; {new Date().getFullYear()} Adrian Drzazgowski</span>
        </footer>
    );
}
