"use client";
import { menuGroups } from "@/app/dashboard/_data/menu";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { ChevronDown } from "lucide-react";
import React from "react";
import { triggerEdgeCollapse } from "tailwindcss-jun-layout";

export default function WorkshopDashboard() {
	const [sidebar, setSidebar] = React.useState<null | Element>(null);
	React.useEffect(() => {
		setSidebar(document.querySelector(".jun-edgeSidebar"));
	});
	return (
		<TooltipProvider>
			<div className="jun-layout">
				<header className="jun-header">
					<button
						type="button"
						className="jun-edgeCollapseTrigger"
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
						jun-edgeSidebar-collapsed-w-[60px]
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
													<Tooltip>
														<TooltipTrigger asChild>
															<label className="jun-sidebarMenuButton">
																<Icon className="jun-sidebarIcon jun-sidebarIcon-shrink-size-6" />
																<span className="jun-sidebarText block">
																	{menu.label}
																</span>
																<ChevronDown className="size-4 jun-collapsibleIcon jun-collapsibleIcon-rotate-180" />
																<input
																	className="sr-only"
																	type="checkbox"
																	defaultChecked
																/>
															</label>
														</TooltipTrigger>
														<TooltipContent
															side="right"
															className="jun-sidebarTooltip"
															container={sidebar}
														>
															{menu.label}
														</TooltipContent>
													</Tooltip>

													{!!menu.menus && (
														<div className="jun-sidebarGroupText jun-collapsibleContent">
															<div>
																<ul className="jun-sidebarMenu jun-sidebarMenu-nested">
																	{menu.menus.map((submenu) => (
																		<li
																			key={submenu.title}
																			className="jun-sidebarMenuItem"
																		>
																			<button
																				type="button"
																				className="jun-sidebarMenuButton"
																			>
																				<span className="jun-sidebarText">
																					{submenu.title}
																				</span>
																			</button>
																		</li>
																	))}
																</ul>
															</div>
														</div>
													)}
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
		</TooltipProvider>
	);
}
