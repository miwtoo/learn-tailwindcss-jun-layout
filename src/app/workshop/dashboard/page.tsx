"use client";
import { menuGroups } from "@/app/dashboard/_data/menu";
import { MoreHorizontal } from "lucide-react";
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
				jun-edgeSidebar-w-[200px]
				jun-edgeSidebar-permanent
				jun-edgeSidebar-collapsed-w-[48px]
				jun-edgeSidebar-permanent-hoverUncollapse
        		jun-edgeSidebar-permanent-autoCollapse-lg
				"
			>
				<div className="jun-edgeContent">
					<div className="jun-sidebarContainer">
						{menuGroups.map((group) => (
							<div key={group.label} className="jun-sidebarGroup">
								<div className="jun-sidebarGroupLabel">{group.label}</div>
								<ul className="jun-sidebarMenu">
									{group.items.map((menu) => {
										const Icon = menu.icon;
										return (
											<li key={menu.label} className="jun-sidebarMenuItem">
												<button type="button" className="jun-sidebarMenuButton">
													<Icon className="jun-sidebarIcon" />
													<span className="jun-sidebarText">{menu.label}</span>
												</button>
												<button
													type="button"
													className="jun-sidebarMenuAction jun-sidebarMenuAction-hoverAppear"
												>
													<MoreHorizontal />
												</button>
											</li>
										);
									})}
								</ul>
							</div>
						))}
					</div>
				</div>
			</aside>
			<main className="jun-content">Content</main>
			<footer className="jun-footer">Footer</footer>
		</div>
	);
}
