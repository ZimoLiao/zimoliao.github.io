---
layout: post
title: Navier-Stokes Equations in the Wavenumber Space
date: 2025-08-08
description: 
tags: turbulence
categories: notes
# giscus_comments: true
---


Consider a 3D turbulent fluid flow occupying a periodic cubic box of side length $L$. 
Any field variable $f(\bm{x})$, where $\bm{x}=(x_l),$ $x_l\in[0,L]$ for $l=1,2,3$, can be expanded in a Fourier series
$$
f(\bm{x})=\sum_{\bm{k}}\hat{f}(\bm{k})e^{i\bm{k}\cdot\bm{x}},\quad \bm{k}\in\frac{2\pi}{L}\mathbb{Z}^3.	\tag{1}
$$
It follows that
$$
\nabla f=\sum_{\bm{k}}(i \bm{k})\hat{f}(\bm{k})e^{i\bm{k}\cdot\bm{x}},\quad \nabla^2 f=\sum_{\bm{k}}(-k^2)\hat{f}(\bm{k})e^{i\bm{k}\cdot\bm{x}},
$$
where $k\equiv|\bm{k}|=\sqrt{k_lk_l}$.	\tag{2}

The incompressible Navier–Stokes equations (INSE) governing the turbulent velocity field $\bm{u}(\bm{x},t)$ are
$$
\partial_t\bm{u}+\bm{u}\cdot\nabla\bm{u}=-\nabla p+\nu \nabla^2\bm{u}+\bm{f}, \quad
\nabla\cdot\bm{u}=0.	\tag{3}
$$
It can also be written in index form as
$$
\frac{\partial u_l}{\partial t}+u_m\frac{\partial u_l}{\partial x_m}=-\frac{\partial p}{\partial x_l}+\nu \frac{\partial^2 u_l}{\partial x_m x_m}+f_l, \tag{4}
$$
$$
\frac{\partial u_m}{\partial x_m}=0.\tag{5}
$$

Expanding $\bm{u}(\bm{x},t)$ and $p(\bm{x},t)$ into Fourier series, the equations in wavenumber space become
$$
\sum_{\bm{k}}\frac{\partial \hat{u}_l(\bm{k},t)}{\partial t}e^{i\bm{k}\cdot\bm{x}}
+\bigg(\sum_{\bm{p}}\hat{u}_m(\bm{p},t)e^{i\bm{p}\cdot\bm{x}}\bigg)\bigg(\sum_{\bm{q}}(i q_m)\hat{u}_l(\bm{q},t)e^{i\bm{q}\cdot\bm{x}}\bigg)
=\\
-\sum_{\bm{k}}(ik_l)\hat{p}(\bm{k},t)e^{i\bm{k}\cdot\bm{x}}
+\nu\sum_{\bm{k}}(-k^2)\hat{u}_l(\bm{k},t)e^{i\bm{k}\cdot\bm{x}}
+\sum_{\bm{k}}\hat{f}_l(\bm{k},t)e^{i\bm{k}\cdot\bm{x}}, \tag{6}
$$
and
$$
\sum_{\bm{k}}(ik_m)\hat{u}_m(\bm{k},t)e^{i\bm{k}\cdot\bm{x}}=0. \tag{7}
$$
The nonlinear term can be rewritten as 
$$
\sum_{\bm{p}}\sum_{\bm{q}}(iq_m)\hat{u}_m(\bm{p},t)\hat{u}_l(\bm{q},t)e^{i(\bm{p}+\bm{q})\cdot\bm{x}}.
$$
We now focus on the coefficient of $e^{i\bm{k}\cdot\bm{x}}$ on both sides of the equation, which corresponds to the evolution equation for a single Fourier mode $\bm{k}$. 
To obtain the evolution for a single Fourier mode $\bm{k}$, apply the operator
$$
\mathcal{F}\{\,\cdot\,\}_{\bm{k}}\equiv\langle(\,\cdot\,)e^{-i\bm{k}\cdot\bm{x}}\rangle_L\equiv \frac{1}{L^3}\int_0^L\int_0^L\int_0^L(\,\cdot\,)e^{-i\bm{k}\cdot\bm{x}}\,\mathrm{d}\bm{x}.
$$ 
Using orthogonality of the modes, one finds
$$
\bigg(\frac{\partial }{\partial t}+\nu k^2\bigg)\hat{u}_l(\bm{k},t)
=
-ik_m\sum_{\bm{k}'}\hat{u}_m(\bm{k}-\bm{k}',t)\hat{u}_l(\bm{k}',t)
-ik_l\hat{p}(\bm{k},t)
+\hat{f}_l(\bm{k},t),
\tag{8}
$$
and 
$$
ik_m\hat{u}_m(\bm{k},t)=0.\tag{9}
$$
Here, the derivation of the quadratic nonlinear term has utilized the continuity equation and a variable substitution, $\bm{p}+\bm{k}'=\bm{k}$.

An intuition is, in wavenumber space, the velocity $\hat{\bm{u}}$ should be normal to the wavevector $\bm{k}$ due to the incompressible condition. Hence, it's natural to ask what will happen if we decompose INSE into two components -- one parallel to and one normal to $\bm{k}$.

Projecting (8) along $\bm{k}$ gives the pressure Poisson equation in wavenumber space
$$
0
=
-i\bigg(\frac{k_lk_n}{k^2}\bigg)k_m\sum_{\bm{k}'}\hat{u}_m(\bm{k}-\bm{k}',t)\hat{u}_n(\bm{k}',t)
-ik_l\hat{p}(\bm{k},t)
+\bigg(\frac{k_lk_n}{k^2}\bigg)\hat{f}_n(\bm{k},t),
\tag{10}
$$
Imposing $({k_lk_n}/{k^2})\hat{f}_n(\bm{k},t)=0$ ensures divergence-free forcing for numerical simulations of forced incompressible homogeneous isotropic turbulence.

(8) minus (10), we have
$$
\bigg(\frac{\partial }{\partial t}+\nu k^2\bigg)\hat{u}_l(\bm{k},t)
=
-P_{ln}(\bm{k})(ik_m)\sum_{\bm{k}'}\hat{u}_m(\bm{k}-\bm{k}',t)\hat{u}_n(\bm{k}',t)
+P_{ln}(\bm{k})\hat{f}_n(\bm{k},t),
\tag{11}
$$
here $P_{ln}(\bm{k})\equiv\delta_{ln}-{(k_lk_n)}/{k^2}$ is the projection tensor, and the pressure is canceled in this equation.

## Energy balance equation

We then drop the forcing term in (11), focusing on the intrinsic properties of the turbulent flows governed by INSE.
Particularly, we are concerned about how the kinetic energy is transfered in this system.
$$
\bigg(\frac{\partial }{\partial t}+2\nu k^2\bigg)\frac{1}{2}\hat{u}_l^*(\bm{k},t)\hat{u}_l(\bm{k},t)
=
-P_{ln}(\bm{k})(ik_m)\sum_{\bm{k}'}\hat{u}_m(\bm{k}-\bm{k}',t)\hat{u}_n(\bm{k}',t)\hat{u}_l^*(\bm{k},t)
$$
Here the superscript * denotes the complex conjugate.

Take the ensemble average of the above equation, we obtain the balance equation of kinetic energy, $\hat{E}(\bm{k},t)\equiv\langle\frac{1}{2}\hat{u}_l^*(\bm{k},t)\hat{u}_l(\bm{k},t)\rangle$
$$
\bigg(\frac{\partial }{\partial t}+2\nu k^2\bigg)\hat{E}(\bm{k},t)
=
k_mP_{ln}(\bm{k})\,\Im\bigg\{\sum_{\bm{k}'}\big\langle{\hat{u}_l(\bm{k},t)\hat{u}_m^*(\bm{k}-\bm{k}',t)\hat{u}_n^*(\bm{k}',t)}\big\rangle\bigg\}.
\tag{12}
$$
$\hat{E}(\bm{k},t)$ is real-valued, so is the right-hand side. Thus we take its imaginary part, denoted by $\Im$.

We denote the right-hand side as $\hat{T}(\bm{k},t)$, and -- using the Hermitian symmetry of the real-valued velocity field, and a variable substitution -- it can also be expressed as
$$
\hat{T}(\bm{k},t)=k_mP_{ln}(\bm{k})\,\Im\bigg\{\sum_{\substack{\bm{p},\,\bm{q} \\ \bm{k}+\bm{p}+\bm{q}=0}}\big\langle{\hat{u}_l(\bm{k},t)\hat{u}_m(\bm{p},t)\hat{u}_n(\bm{q},t)}\big\rangle\bigg\} \\
=\Im\bigg\{\sum_{\substack{\bm{p},\,\bm{q} \\ \bm{k}+\bm{p}+\bm{q}=0}}\big\langle{k_m\hat{u}_n(\bm{k},t)\hat{u}_m(\bm{p},t)\hat{u}_n(\bm{q},t)}\big\rangle\bigg\}
$$

When it is summed over all $\bm{k}$, we have
$$
\sum_{\bm{k}}\hat{T}(\bm{k},t)=\Im\bigg\{\sum_{\substack{\bm{k},\,\bm{p},\,\bm{q} \\ \bm{k}+\bm{p}+\bm{q}=0}}\big\langle{k_m\hat{u}_n(\bm{k},t)\hat{u}_m(\bm{p},t)\hat{u}_n(\bm{q},t)}\big\rangle\bigg\} \\
=\Im\bigg\{\sum_{\substack{\bm{k},\,\bm{p},\,\bm{q} \\ \bm{k}+\bm{p}+\bm{q}=0}}\big\langle{-(p_m+q_m)\hat{u}_n(\bm{k},t)\hat{u}_m(\bm{p},t)\hat{u}_n(\bm{q},t)}\big\rangle\bigg\} \\
=\Im\bigg\{\sum_{\substack{\bm{k},\,\bm{p},\,\bm{q} \\ \bm{k}+\bm{p}+\bm{q}=0}}\big\langle{-q_m\hat{u}_n(\bm{q},t)\hat{u}_m(\bm{p},t)\hat{u}_n(\bm{k},t)}\big\rangle\bigg\}=-\sum_{\bm{q}}\hat{T}(\bm{q},t)
$$

It is straightforward that the summation should be zero, 
$$
\sum_{\bm{k}}\hat{T}(\bm{k},t)=0,
\tag{13}
$$
namely, this term merely represents a *transfer* of energy between modes.

## Reference

Batchelor, G. K. (1953). The theory of homogeneous turbulence, Cambridge university press.

McComb, W. D. (1992). The physics of fluid turbulence, Clarendon Press.

Frisch, U. and A. N. Kolmogorov (1995). Turbulence: The Legacy of A. N. Kolmogorov, Cambridge University Press.

Pope, S. B. (2000). Turbulent flows, Cambridge university press.