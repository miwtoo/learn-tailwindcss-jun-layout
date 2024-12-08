"use client";
import { menuGroups } from "@/app/dashboard/_data/menu";
import { triggerEdgeCollapse, triggerEdgeDrawer } from "tailwindcss-jun-layout";

export default function WorkshopDashboard() {
	return (
		<div className="jun-layout">
			<header className="jun-header">
				<button
					type="button"
					className="jun-edgeDrawerTrigger"
					onClick={() => triggerEdgeDrawer()}
				>
					Toggle
				</button>
				<button
					type="button"
					className="jun-collapsibleTrigger"
					onClick={(event) => triggerEdgeCollapse({ event })}
				>
					Collapse
				</button>
				Header
			</header>
			<aside
				className="
				jun-edgeSidebar
				jun-edgeSidebar-w-[256px]
				jun-edgeSidebar-drawer
				sm:jun-edgeSidebar-permanent
				sm:jun-edgeSidebar-collapsed-w-[80px]
				sm:jun-edgeSidebar-permanent-hoverUncollapse
        		jun-edgeSidebar-permanent-autoCollapse-lg
				"
			>
				<div className="jun-edgeContent">Sidebar Content</div>
			</aside>
			<main className="jun-content">Content</main>
			<footer className="jun-footer">Footer</footer>
		</div>
	);
}
